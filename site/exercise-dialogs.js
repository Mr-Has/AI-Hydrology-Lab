(function () {
  function closeDialog(dialog) {
    if (dialog && dialog.open) {
      dialog.close();
    }
  }

  document.querySelectorAll("[data-about-open]").forEach((button) => {
    button.addEventListener("click", () => {
      const dialog = document.getElementById(button.dataset.aboutOpen);
      if (dialog && typeof dialog.showModal === "function") {
        dialog.showModal();
      }
    });
  });

  document.querySelectorAll("[data-about-close]").forEach((button) => {
    button.addEventListener("click", () => {
      closeDialog(button.closest("dialog"));
    });
  });

  document.querySelectorAll(".about-dialog").forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) {
        closeDialog(dialog);
      }
    });
  });
})();
