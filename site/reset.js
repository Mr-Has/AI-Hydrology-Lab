(function () {
  const button = document.getElementById("reset-button");
  const status = document.getElementById("reset-status");

  function setStatus(message) {
    status.textContent = message;
  }

  function deleteDatabase(name) {
    return new Promise((resolve) => {
      const request = indexedDB.deleteDatabase(name);
      request.onsuccess = () => resolve({ name, ok: true });
      request.onerror = () => resolve({ name, ok: false });
      request.onblocked = () => resolve({ name, ok: false, blocked: true });
    });
  }

  function matchesLabScope(name, basePath) {
    return basePath === "/" || name.includes(basePath);
  }

  function removeScopedWebStorage(storage, basePath) {
    if (!storage) {
      return;
    }

    const keysToRemove = [];
    for (let index = 0; index < storage.length; index += 1) {
      const key = storage.key(index);
      if (!key) {
        continue;
      }

      const lowerKey = key.toLowerCase();
      if (lowerKey.includes("jupyterlite") && matchesLabScope(key, basePath)) {
        keysToRemove.push(key);
      }
    }

    keysToRemove.forEach((key) => storage.removeItem(key));
  }

  async function clearScopedCaches(basePath) {
    if (!("caches" in window)) {
      return;
    }

    const cacheNames = await caches.keys();
    const targetNames = cacheNames.filter((name) => {
      const lowerName = name.toLowerCase();
      return lowerName.includes("jupyterlite") && matchesLabScope(name, basePath);
    });

    await Promise.all(targetNames.map((name) => caches.delete(name)));
  }

  async function clearScopedServiceWorkers(basePath) {
    if (!("serviceWorker" in navigator)) {
      return;
    }

    const registrations = await navigator.serviceWorker.getRegistrations();
    const targetRegistrations = registrations.filter((registration) => {
      const scopePath = new URL(registration.scope).pathname;
      return scopePath.startsWith(basePath);
    });

    await Promise.all(targetRegistrations.map((registration) => registration.unregister()));
  }

  async function clearJupyterLiteStorage() {
    const deleted = [];
    const firstSegment = window.location.pathname.split("/").filter(Boolean)[0] || "";
    const basePath = firstSegment && !firstSegment.includes(".") ? `/${firstSegment}/` : "/";

    if (indexedDB.databases) {
      const databases = await indexedDB.databases();
      const targets = databases
        .map((database) => database.name)
        .filter(Boolean)
        .filter((name) => {
          const lowerName = name.toLowerCase();
          return lowerName.startsWith("jupyterlite storage") && matchesLabScope(name, basePath);
        });

      for (const name of targets) {
        deleted.push(await deleteDatabase(name));
      }
    } else {
      deleted.push(await deleteDatabase(`JupyterLite Storage - ${basePath}`));
    }

    removeScopedWebStorage(window.localStorage, basePath);
    removeScopedWebStorage(window.sessionStorage, basePath);
    await clearScopedCaches(basePath);
    await clearScopedServiceWorkers(basePath);

    return deleted;
  }

  button.addEventListener("click", async () => {
    const confirmed = window.confirm(
      "Reset locally saved notebook edits for this browser? The hosted GitHub notebooks will not be changed."
    );

    if (!confirmed) {
      return;
    }

    button.disabled = true;
    setStatus("Resetting local JupyterLite storage...");

    try {
      const deleted = await clearJupyterLiteStorage();
      const blocked = deleted.some((item) => item.blocked || !item.ok);

      if (blocked) {
        setStatus("Reset partly completed. Close open JupyterLite tabs, then press Reset again.");
        button.disabled = false;
        return;
      }

      setStatus("Local edits reset. Returning to the exercise page...");
      window.setTimeout(() => {
        window.location.assign("./");
      }, 900);
    } catch (error) {
      setStatus("Reset failed. Close JupyterLite tabs and try again.");
      button.disabled = false;
    }
  });
})();
