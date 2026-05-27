# AI-Hydrology-Lab

Faculty of Engineering, University of Ottawa

**Provided By:**
Professor Hossein Bonakdari  
PhD Candidate Mohammad Hashtari

This project contains Jupyter Notebook exercises for teaching Python-based hydrology work with coding assistants. The notebooks emphasize habits that matter in scientific programming: inspect before editing, state assumptions, verify calculations, preserve project instructions, review code, limit data requests, and parse API responses from documented fields.

The examples start from hydrology problems and use small synthetic or fixture datasets so they can run locally without downloading large external data.

## Notebook Index

| No. | Notebook | Focus |
|---:|---|---|
| 1 | [Explore, Plan, Code](notebooks/01_explore_plan_code.ipynb) | Low-flow Q90/Q95 analysis and safe edit workflow |
| 2 | [Specific Context for SPI](notebooks/02_specific_context_spi.ipynb) | Precise bug reports for a simplified SPI formula |
| 3 | [Verify Your Work](notebooks/03_verify_your_work_metrics.ipynb) | NSE/KGE implementation with known expected values |
| 4 | [Persistent Project Context](notebooks/04_persistent_project_context.ipynb) | Reusable project instructions for hydrology coding |
| 5 | [Reusable Hydrology Skills](notebooks/05_reusable_hydrology_skills.ipynb) | Domain and workflow skill patterns for flood analysis |
| 6 | [Review Loop for LP3](notebooks/06_review_loop_lp3_frequency.ipynb) | Independent coder-reviewer workflow for LP3 flood frequency |
| 7 | [CLI-Guided NWM Access](notebooks/07_cli_guided_nwm_data_access.ipynb) | Safe command planning for public NWM data access |
| 8 | [USGS NWIS Parsing](notebooks/08_api_grounded_usgs_nwis_streamflow.ipynb) | API-grounded parsing of instantaneous streamflow JSON |
| 9 | [Parallel Fan-Out SPI](notebooks/09_parallel_fanout_spi_timescales.ipynb) | Multi-timescale SPI analysis and summary aggregation |

## Project Structure

```text
AI-Hydrology-Lab/
|-- assets/
|   `-- uottawa_logo_horizontal_grey.png
|-- site/
|   |-- assets/
|   |   |-- exercise-01.jpg
|   |   |-- ...
|   |   `-- uottawa_logo_horizontal_grey.png
|   |-- index.html
|   `-- styles.css
|-- notebooks/
|   |-- 01_explore_plan_code.ipynb
|   |-- 02_specific_context_spi.ipynb
|   |-- 03_verify_your_work_metrics.ipynb
|   |-- 04_persistent_project_context.ipynb
|   |-- 05_reusable_hydrology_skills.ipynb
|   |-- 06_review_loop_lp3_frequency.ipynb
|   |-- 07_cli_guided_nwm_data_access.ipynb
|   |-- 08_api_grounded_usgs_nwis_streamflow.ipynb
|   `-- 09_parallel_fanout_spi_timescales.ipynb
|-- .gitignore
|-- README.md
`-- requirements.txt
```

## Local Setup

Create and activate a Python environment, then install the dependencies:

```bash
python -m pip install -r requirements.txt
```

Start Jupyter:

```bash
jupyter notebook
```

Open the notebooks from the `notebooks/` folder.

## Run in the Browser

This project is prepared for **JupyterLite + GitHub Pages**, which lets users run notebook code cells directly in the browser with no local Python installation.

After the repository is pushed to GitHub:

1. Open repository **Settings**.
2. Go to **Pages**.
3. Set the source to **GitHub Actions**.
4. Push to the `main` branch.
5. The workflow `.github/workflows/deploy-jupyterlite.yml` will build and publish the browser lab.

The site URL will be:

```text
https://<github-username>.github.io/AI-Hydrology-Lab/
```

The JupyterLite build uses:

```text
requirements-jupyterlite.txt
jupyter_lite_config.json
content/
```

The workflow copies notebooks from `notebooks/` into the JupyterLite site during deployment, then adds the custom card-based homepage from `site/`. Users land on the exercise cards first and open notebooks from there.

Notebook edits made in JupyterLite are saved only in the user's browser storage and do not change the hosted notebooks or the GitHub repository.

## Verification

To execute one notebook from the command line:

```bash
python -m jupyter nbconvert --to notebook --execute notebooks/01_explore_plan_code.ipynb --output 01_explore_plan_code_executed.ipynb --output-dir notebooks
```

Temporary executed notebooks are ignored by `.gitignore`.

## Data and Network Notes

- The notebooks run without downloading large datasets.
- Exercise 7 displays AWS CLI commands but does not execute AWS downloads.
- Exercise 8 uses a local USGS NWIS-style fixture and does not call the live API during execution.
- In JupyterLite, Python runs in the browser through Pyodide. Shell commands and real external downloads are intentionally not part of the browser workflow.
- Any future large local datasets should be stored outside version control.
