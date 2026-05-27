# AI-Hydrology-Lab

Faculty of Engineering, University of Ottawa

**Provided By:**
Professor Hossein Bonakdari  
PhD Candidate Mohammad Hashtari

AI-Hydrology-Lab is a set of short Jupyter Notebook exercises about hydrology and scientific coding. Each exercise connects a practical coding habit with a water-resources idea, such as low flow, drought, flood frequency, model checking, or stream-gauge data.

The examples use small synthetic or fixture datasets so the main ideas stay visible.

## Notebook Index

| No. | Notebook | Main idea |
|---:|---|---|
| 1 | [Explore, Plan, Code](notebooks/01_explore_plan_code.ipynb) | Low river flow during dry conditions |
| 2 | [Specific Context for SPI](notebooks/02_specific_context_spi.ipynb) | Drought from precipitation data |
| 3 | [Verify Your Work](notebooks/03_verify_your_work_metrics.ipynb) | Checking model predictions |
| 4 | [Persistent Project Context](notebooks/04_persistent_project_context.ipynb) | Keeping hydrology assumptions consistent |
| 5 | [Reusable Hydrology Skills](notebooks/05_reusable_hydrology_skills.ipynb) | Reusing common flood-analysis checks |
| 6 | [Review Loop for LP3](notebooks/06_review_loop_lp3_frequency.ipynb) | Estimating rare floods with LP3 |
| 7 | [CLI-Guided NWM Access](notebooks/07_cli_guided_nwm_data_access.ipynb) | Careful access to large water-model datasets |
| 8 | [USGS NWIS Parsing](notebooks/08_api_grounded_usgs_nwis_streamflow.ipynb) | Reading stream-gauge time-series data |
| 9 | [Parallel Fan-Out SPI](notebooks/09_parallel_fanout_spi_timescales.ipynb) | Comparing drought over multiple time windows |

## Exercise Ideas in Simple Language

### Exercise 1 - Explore, Plan, Code

This exercise is about very low river flow. In hydrology, low-flow values help describe dry periods, water-supply stress, and ecological risk. The main idea is to look at a streamflow record and estimate levels such as Q90 and Q95, which mean the river is above that flow most of the time.

### Exercise 2 - Specific Context for SPI

This exercise is about drought from precipitation data. SPI, the Standardized Precipitation Index, compares recent precipitation with what is normal for that place and time scale. A negative SPI means conditions are drier than usual; a positive SPI means wetter than usual.

### Exercise 3 - Verify Your Work

This exercise is about checking whether a hydrology model is behaving reasonably. A model can produce a number, but that number still needs to be tested against known values and observed data. Metrics such as NSE and KGE summarize how closely simulated streamflow follows measured streamflow.

### Exercise 4 - Persistent Project Context

This exercise is about keeping scientific rules consistent from one coding session to the next. Hydrology work depends on details such as units, dates, time steps, and assumptions. A persistent project context keeps those details visible so the analysis does not drift.

### Exercise 5 - Reusable Hydrology Skills

This exercise is about turning repeated hydrology habits into reusable checks. Flood and streamflow analyses often need the same cautions: missing data, water-year definitions, negative flow values, and rank conventions. The idea is to make those checks part of the normal workflow.

### Exercise 6 - Review Loop for LP3

This exercise is about estimating rare floods from annual peak-flow records. The Log-Pearson Type III model is commonly used in flood-frequency analysis. It fits a probability pattern to past flood peaks so larger, less frequent events can be estimated.

### Exercise 7 - CLI-Guided NWM Access

This exercise is about working carefully with large public water-model datasets. The National Water Model contains many files, so the hydrology idea is to narrow the data request before taking action. This keeps the work small, traceable, and focused on the right location or time period.

### Exercise 8 - USGS NWIS Parsing

This exercise is about reading stream-gauge data correctly. USGS NWIS data describe streamflow measurements through time. The main hydrology idea is a time series: each value only makes sense when its date, unit, site, and field name are read correctly.

### Exercise 9 - Parallel Fan-Out SPI

This exercise is about comparing drought over different time windows. A short SPI window can show a quick dry spell, while longer windows can show seasonal or longer-term drought. Looking at several time scales together gives a clearer picture of water conditions.

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

## Browser Version

The public page uses JupyterLite and GitHub Pages, so the notebooks can run in a web browser. The homepage shows one card for each exercise, and each card opens its own notebook.

Notebook edits made in JupyterLite are saved only in the user's browser storage and do not change the hosted notebooks or the GitHub repository.

## Data and Network Notes

- The notebooks run without downloading large datasets.
- Exercise 7 displays AWS CLI commands but does not execute AWS downloads.
- Exercise 8 uses a local USGS NWIS-style fixture and does not call the live API during execution.
- In JupyterLite, Python runs in the browser through Pyodide. Shell commands and real external downloads are intentionally not part of the browser workflow.
