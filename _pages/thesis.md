---
layout: page
title: MPhil Thesis
permalink: /thesis/
description: Atmospheric Drivers of Surface Melt on the George VI Ice Shelf, Antarctica.
nav: true
nav_order: 3
---

<div class="row align-items-start g-4 mb-5">
  <div class="col-md-7">
    <h2 class="mt-0">Atmospheric Drivers of Surface Melt on the George VI Ice Shelf</h2>
    <p class="lead">
      My MPhil thesis at the University of Cambridge — the first systematic atmospheric study of one of Antarctica's most vulnerable ice shelves, built on roughly <strong>1.7 billion data points</strong> of regional climate model output and validated against the only two weather stations within hundreds of kilometres.
    </p>
    <p>
      I worked with the <strong>British Antarctic Survey</strong> and the <strong>Scott Polar Research Institute</strong> to investigate the atmospheric patterns behind extreme surface-melt events on the <strong>George VI Ice Shelf (GVIIS)</strong> in Antarctica, using the RACMO 2.3p2 regional climate model, two automatic weather stations, NOAA upper-air reanalysis, and a custom Python pipeline I built to handle the data.
    </p>
  </div>
  <div class="col-md-5">
    <div class="card p-3" style="background-color: rgba(0,0,0,0.03);">
      <h6 class="text-uppercase text-muted mb-2" style="letter-spacing: 0.05em;">At a glance</h6>
      <table class="table table-sm table-borderless mb-0 small">
        <tr><td class="pe-2"><strong>Degree</strong></td><td>MPhil in Polar Studies</td></tr>
        <tr><td class="pe-2"><strong>Institution</strong></td><td>University of Cambridge<br/>(Scott Polar Research Institute, St Catharine's College)</td></tr>
        <tr><td class="pe-2"><strong>Year</strong></td><td>2021–2022</td></tr>
        <tr><td class="pe-2"><strong>Supervisors</strong></td><td>Dr Ian Willis (SPRI)<br/>Dr Amélie Kirchgaessner (BAS)</td></tr>
        <tr><td class="pe-2"><strong>Funding</strong></td><td>Scott Polar Scholarship<br/>(awarded to top applicant)</td></tr>
        <tr><td class="pe-2"><strong>Length</strong></td><td>~17,000 words, 105 pages</td></tr>
        <tr><td class="pe-2"><strong>Data scale</strong></td><td>~1.7 billion model points<br/>5 yrs of 3-hourly RACMO output</td></tr>
      </table>
    </div>
  </div>
</div>


<div class="card p-3 my-4" style="background-color: rgba(0,0,0,0.03);">
  <h6 class="text-uppercase text-muted mb-3" style="letter-spacing: 0.05em;">📑 On this page</h6>
  <div class="row small">
    <div class="col-md-6">
      <ol class="mb-md-0 ps-3">
        <li><a href="#abstract">Abstract</a></li>
        <li><a href="#why-this-thesis-exists">Why this thesis exists</a></li>
        <li><a href="#the-question">The question</a></li>
        <li><a href="#the-setting-george-vi-ice-shelf">The setting: George VI Ice Shelf</a></li>
        <li><a href="#what-made-this-work-technically-unique">What made this work technically unique</a></li>
      </ol>
    </div>
    <div class="col-md-6">
      <ol class="mb-0 ps-3" start="6">
        <li><a href="#how-i-approached-it">How I approached it</a></li>
        <li><a href="#what-i-found">What I found</a></li>
        <li><a href="#why-this-matters">Why this matters</a></li>
        <li><a href="#limitations">Limitations and future work</a></li>
        <li><a href="#want-a-copy">Get the full thesis</a></li>
      </ol>
    </div>
  </div>
</div>

## Abstract

> Regional shifts in climate are increasingly altering local-scale microclimates and processes, which may be changing surface meltwater distribution in Antarctica (Bell et al., 2018). With the 2019/2020 austral summer bringing a 32-year high record melt on the George VI Ice Shelf (GVIIS), understanding atmospheric drivers of surface melt plays a crucial role in predicting ice-shelf collapse and, ultimately, its impact on sea-level rise (Banwell et al., 2021).
>
> This project examines the prevalent atmospheric patterns, if any, that occur during high surface-melt events on the George VI Ice Shelf in Antarctica using model simulations for the period from 1979 to 2021. Model simulations cover the GVIIS at 5.5 km horizontal resolution and are carried out with the Regional Atmospheric Climate Model (RACMO), version 2.3, at 3-hour temporal timesteps between 2016 and 2021. The RACMO model is applied to polar regions by coupling it with a multi-layer snow/firn model that calculates the surface melt needed in this project (van Wessem et al., 2018). The spatial boundary of the GVIIS is isolated, and extreme melt events are spatially and temporally distinguished from periods of background low-to-moderate melting using the melt measured through the model runs. The composite fields of surface pressure, wind speed and direction, precipitation, air temperature, and humidity from these extreme melt clusters are analysed.
>
> It is revealed that during the melt events, winds in the northern portion of the GVIIS showed an easterly signature, flowing from Palmer Land onto the GVIIS, sometimes causing winds to curve along the western border with Alexander Island creating melt zones in this region of the GVIIS. When winds are blowing from Palmer Land to GVIIS, there are areas of divergence on the GVIIS, creating pressure gradients on the ice shelf itself and channelling winds in a north-south direction. Upper-air observations reveal that strong geopotential gradients across the GVIIS developed before and during high melt events and typically were associated with warm air advection from the north of the GVIIS, followed by channelled flow across the ice shelf. High melt events generally have high humidity and temperatures, but nothing conclusive can be said about surface pressure as melt continues under both low and high-pressure systems.
>
> Overall, this study improves the understanding of the atmospheric drivers of high surface melt on the GVIIS by (i) establishing regions where surface melt happens and its extent, (ii) establishing a framework for the atmospheric precursors of extreme surface melt on the GVIIS, and (iii) identifying atmospheric factors and weather patterns on the GVIIS that persist during and after high melt events.

{%
  include figure.liquid
  loading="lazy"
  path="assets/img/diss_presentation/4.png"
  alt="Why ice shelves matter for global sea-level risk"
  class="img-fluid rounded mb-5"
%}

## Why this thesis exists

The world's coastal cities sit at the mercy of how fast Antarctica is melting. Most of Antarctica's ice doesn't slip into the ocean directly — it's held back by floating extensions of glaciers called **ice shelves**, which act like buttresses holding back the continent's grounded ice. When ice shelves thin or collapse, the glaciers behind them speed up, and *that* is what raises sea levels.

{%
  include figure.liquid
  loading="lazy"
  path="assets/img/diss_presentation/5.png"
  alt="What weakens ice shelves on the Antarctic Peninsula"
  class="img-fluid rounded my-4"
%}

In 2002, the Larsen B ice shelf collapsed catastrophically. The glaciers feeding it accelerated 3–8× within eighteen months. The same chain reaction can happen elsewhere — and the **George VI Ice Shelf** has been getting alarming attention. In the 2019/2020 austral summer, the GVIIS saw its highest recorded surface melt in 32 years.

If the GVIIS collapsed, models project it would add ~22 mm to global mean sea level rise. For context, that's more than five times the projected contribution from a hypothetical Larsen C collapse.

Here was the gap I set out to fill: while atmospheric drivers of melt have been studied extensively on the *eastern* Antarctic Peninsula (Larsen C, Larsen B), almost nothing equivalent had been done for the GVIIS, on the *western* side. **My thesis was the first to systematically isolate the GVIIS, study its weather at multiple temporal scales, and quantify the atmospheric conditions that precede high-melt events on it.**

## The question

> *What atmospheric patterns precede, persist during, and follow extreme surface-melt events on the George VI Ice Shelf, and what do they tell us about its stability?*

{%
  include figure.liquid
  loading="lazy"
  path="assets/img/diss_presentation/3.png"
  alt="Map of the George VI Ice Shelf in the Antarctic Peninsula"
  class="img-fluid rounded my-4"
%}

## The setting: George VI Ice Shelf

The GVIIS is a roughly **24,000 km²** floating ice shelf — about the size of Wales or New Jersey — nestled in the George VI Sound between **Alexander Island** and **Palmer Land** on the Antarctic Peninsula. It is about 450 km long. It is the second largest ice shelf on the Peninsula and structurally complex: thin (~100 m) at its northern calving front into Marguerite Bay, thickest in the centre (~600 m), thinning again at the Ronne Entrance to the south.

Two features make the GVIIS especially interesting:

1. It sits on the **−9 °C isotherm** — a temperature threshold that historically separates stable from unstable Antarctic ice shelves. As that isotherm shifts polewards with warming, ice shelves that used to sit safely north of it tip into a vulnerable regime.
2. The glaciers on Palmer Land that feed the GVIIS would, if the buttress were lost, deliver more ice to the ocean than almost any other ice-shelf system on the Peninsula. Schannwell et al. (2018) projected ~22 mm of GMSL rise from a GVIIS collapse versus ~4 mm from a Larsen C collapse — a ~5× difference.

{%
  include figure.liquid
  loading="lazy"
  path="assets/img/diss_presentation/6.png"
  alt="The George VI Ice Shelf in regional context"
  class="img-fluid rounded my-4"
%}

## What made this work technically unique

This thesis is genuinely the first quantitative atmospheric study restricted to the GVIIS at multiple temporal scales. A few specific aspects of the work that pushed it past existing literature:

- **Three nested temporal scales for the same event.** Most ice-shelf studies pick a single timescale — synoptic events for atmospheric work, multi-decadal trends for climate work. I analysed each of five extreme melt events at **daily, biweekly, and monthly** resolution. The daily view caught the precursor signals two-to-three days out; the biweekly view caught the post-event persistence; the monthly view linked it back to seasonal climate.
- **Cross-validation across three data types.** RACMO regional model output, on-shelf AWS data deployed for the first time in summer 2019/2020, and Fossil Bluff station data — all three checked against each other. Most modelling studies don't do this rigorously, and most observational studies don't run their own models.
- **Custom GVIIS-domain extraction.** RACMO output spans the whole Antarctic continent. Restricting it to just the GVIIS — a complex, irregular polygon — required custom geospatial tooling (shapefile masking, reprojection, raster cropping) that reduced the dataset roughly 13× while preserving the science.
- **EOF analysis on the GVIIS sub-domain.** I ran Empirical Orthogonal Function decomposition both manually and using the `eofs` library to identify the dominant modes of climate–melt covariability on the GVIIS specifically — not on the Antarctic Peninsula as a whole, which is what prior work had done.
- **First atmospheric framework specific to the GVIIS.** Existing literature on the Peninsula's atmosphere is dominated by Larsen-C-focused studies (Datta, Elvidge, Gilbert, et al.). This thesis filled the corresponding gap on the western side and identified that the atmospheric drivers there are *different* — easterly inflow off Palmer Land matters in a way it doesn't for Larsen.

## How I approached it

### Data sources

- **RACMO 2.3p2** (Regional Atmospheric Climate Model) — purpose-built for polar atmospheric simulation, coupled with a multi-layer snow/firn model that calculates surface melt directly. I worked with model output at **5.5 km horizontal resolution** at two temporal cadences:
  - **3-hour timesteps** for 2016–2021 (the high-resolution analysis window for extreme melt events)
  - **Yearly** averages for 1979–2018 (the long-baseline climatology)
  - Variables used: pressure, 2-m temperature, humidity, snowmelt flux, 10-m wind speed and direction, precipitation flux, albedo.
  - Access courtesy of Dr Melchior van Wessem at the Institute for Marine and Atmospheric Research, Utrecht.
- **In-situ weather observations** — Fossil Bluff AWS (long record, just off the western edge of the GVIIS) plus a brand-new AWS the BAS team deployed *on* the ice shelf itself in 2019/2020, with 15-minute readings during austral summer. This is what validated the RACMO output and gave us ground truth.
- **Upper-air reanalysis** — 500 mb geopotential height fields from the **NOAA Physical Sciences Laboratory**, used to identify the larger-scale atmospheric circulation associated with each melt event.

{%
  include figure.liquid
  loading="lazy"
  path="assets/img/diss_presentation/8.png"
  alt="Three data sources: RACMO regional model, Fossil Bluff AWS, and the on-shelf AWS"
  class="img-fluid rounded my-4"
%}

### The scale of the dataset

The RACMO output, before any preprocessing, was on the order of:

| Cadence | Window | Grid points × timesteps | ≈ data points |
|---|---|---|---|
| 3-hourly | 2016–2020 | 114,660 × 14,616 | **1,675,870,560** |
| 3-hourly | Jan–Feb 2021 | 114,660 × 472 | **54,119,520** |
| Yearly | 1979–2018 | 114,660 × 40 | **4,586,400** |

That's **~1.73 billion data points** before any reduction — non-trivial to handle on a laptop, and the bottleneck was as much memory pressure and I/O as it was statistics. Restricting the domain to just the GVIIS polygon brought this down to about 132 million points (~13× smaller) while losing nothing relevant to the science.

<div class="row g-3 my-4">
  <div class="col-md-6">
    {%
      include figure.liquid
      loading="lazy"
      path="assets/img/diss_presentation/10.png"
      alt="Visualising the RACMO 3-hourly grid: 114,660 grid points × 14,616 timesteps"
      class="img-fluid rounded"
    %}
  </div>
  <div class="col-md-6">
    {%
      include figure.liquid
      loading="lazy"
      path="assets/img/diss_presentation/11.png"
      alt="Combined RACMO data scale across 3-hourly and yearly cadences"
      class="img-fluid rounded"
    %}
  </div>
</div>

### The Python pipeline

The processing stack:

`numpy`, `netCDF4`, `xarray`, `pandas`, `geopandas`, `rioxarray`, `rasterio`, `pyproj`, `cartopy`, `shapely`, `shapefile`, `fiona`, `geoplot`, `matplotlib`, `plotly`, `holoviews`, `geoviews`, `bokeh`, `scipy`, `sklearn`, `eofs`, `datetime`.

The pipeline, in steps:

1. **Load the RACMO `.nc` files** with `xarray` lazy-loading so the full dataset never needed to fit in RAM.
2. **Build a GVIIS mask** from a BAS-published shapefile — reprojected from polar stereographic into the RACMO grid's native CRS using `pyproj`, rasterised onto the model grid using `rasterio`/`geopandas`, then applied as a boolean mask.

{%
  include figure.liquid
  loading="lazy"
  path="assets/img/diss_presentation/13.png"
  alt="Building a custom GVIIS mask to extract the ice shelf from the larger RACMO grid"
  class="img-fluid rounded my-4"
%}

3. **Reduce the spatial domain** by clipping to the GVIIS polygon — collapsing the dataset by ~13×.
4. **Filter to austral summer** (October through March) since melt is functionally zero in winter.
5. **Resample temporally** into daily, weekly, biweekly, and monthly aggregates using `xarray`'s `resample` and `groupby` operations, so I could later switch between timescales for the same event.
6. **Validate against AWS data** — interpolate RACMO output to the AWS grid points, compare distributions, magnitudes, and seasonal trends. RACMO performed well on both magnitude and seasonality.
7. **Threshold extreme melt events** at the **99th percentile of snowmelt flux** across the GVIIS, then segregate spatially and temporally distinct events.
8. **Build composite atmospheric fields** for each event — averaging surface pressure, wind direction/speed, temperature, humidity, and precipitation across the event window, then comparing against background no-melt periods to isolate the signature.
9. **Layer in upper-air patterns** — pull NOAA 500 mb geopotential height composites for each event window and overlay onto the GVIIS analyses.
10. **Run EOF decomposition** on melt and climate fields, both via the `eofs` library and reimplemented from first principles (as a sanity check), to identify dominant modes of climate–melt covariability on the GVIIS specifically.
11. **Visualise** — a mix of static maps (`cartopy`) and interactive exploration plots (`plotly`/`bokeh`) used during analysis to spot patterns the naked eye would miss in the static composites.

{%
  include figure.liquid
  loading="lazy"
  path="assets/img/diss_presentation/15.png"
  alt="Resampling the GVIIS data into daily, weekly, biweekly, and monthly steps"
  class="img-fluid rounded my-4"
%}

## What I found

### 1. There is a recurring atmospheric signature for GVIIS melt events

The high-melt events I studied weren't random. They shared a distinctive pattern:

- In the **northern** half of the GVIIS, melt was driven by **easterly winds blowing off Palmer Land** onto the ice shelf, often curving along the western border with Alexander Island and creating concentrated melt zones along that flank.
- In the **southern** half, melt onset was typically preceded by a **southerly wind** appearing two to three days before the melt itself.
- The events were associated with **strong upper-air geopotential height gradients** across the GVIIS — a fingerprint of strong, directed atmospheric flow rather than calm conditions.

### 2. Foehn-style downslope warming matters

When warm, moist air is advected northward and descends from Palmer Land onto the ice shelf, it warms further by compression and channels along the shelf — a foehn-like effect (similar to Chinook winds in the Rockies or Santa Anas in California). The thesis showed how this warm flow gets directed by the bordering topography to create localised melt hotspots. The 5 km RACMO grid couldn't fully resolve the narrowest downslope features, but the broad pattern was unambiguous.

### 3. Surface pressure alone is *not* predictive — gradients are

Counter-intuitively, melt happens under both high- and low-pressure systems on the GVIIS. The useful predictor is not the absolute pressure level but the **gradient** across the shelf and the geopotential structure aloft. Strong gradients pointing in the right direction matter more than whether you're in a "high" or a "low".

### 4. The northern GVIIS is the most vulnerable region

Across all five events, the high-melt regions clustered in the northern third of the shelf, where the ice is thinnest (~100 m) and the −9 °C isotherm sits closest. If meltwater here begins to percolate to deeper layers rather than refreezing in place, the GVIIS could tip toward the kind of hydrofracture-driven collapse that took down Larsen B in 2002.

### 5. Temperature and melt covary much more cleanly than expected

The EOF analysis confirmed something the composites had hinted at: across the GVIIS, the dominant mode of melt variability tracks the dominant mode of 2-m temperature variability extremely closely — so strongly that for first-pass risk assessment, near-surface temperature anomaly alone is a useful proxy. That has practical implications for monitoring: temperature is one of the easiest fields to observe and reanalyse, so a temperature-based early-warning signal is feasible.

{%
  include figure.liquid
  loading="lazy"
  path="assets/img/diss_presentation/17.png"
  alt="EOF analysis: dominant modes of climate–melt covariability on the GVIIS"
  class="img-fluid rounded my-4"
%}

### 6. RACMO is good for the GVIIS — within limits

Validation against the Fossil Bluff AWS and the new on-shelf AWS showed RACMO captures both magnitudes and seasonal trends of surface melt well. The model is therefore a defensible tool for further GVIIS work. The main caveat: the 5 km grid is too coarse for the narrowest topographically-driven flow features, so finer-resolution coupled atmosphere–surface modelling will be needed to fully resolve the foehn dynamics.

## Why this matters

Three concrete contributions to the field:

1. **Where the melt is happening.** The thesis established that surface melt on the GVIIS is concentrated in the northern half — narrowing the spatial focus for ongoing satellite and field monitoring.
2. **What atmospheric precursors to watch for.** Strong geopotential gradients, easterlies in the north, southerlies in the south two-to-three days before, warm air advection from Palmer Land — these are the precursors that should set off alarm bells in real-time monitoring of the shelf.
3. **What persists after a melt event.** Most prior studies stopped at the event itself. The thesis showed that the warm-easterly regime *persists for several days afterwards*, which has implications for whether meltwater refreezes in place or has time to percolate to deeper, more dangerous layers.

The framework this thesis built is now a starting point for ongoing GVIIS-specific monitoring and follow-up modelling work — and it's also been my own bridge from physical climate science into the climate-risk modelling I do today.

## Limitations and what I didn't get to {#limitations}

A few things that didn't fit in 17,000 words and one year:

- **Radiative variables**: long-wave and short-wave up- and down-welling radiation, water-vapour column, cloud cover. These all matter for surface energy balance and would refine the picture of how atmospheric forcing translates into melt.
- **Larger-scale climate modes**: how do GVIIS melt events relate to phases of the Southern Annular Mode (SAM) or ENSO? I touched on this but didn't quantify it.
- **Surface mass balance and surface energy balance**: to fully isolate atmospheric drivers from ocean and ice-dynamics drivers, you really want a coupled mass/energy balance treatment. That's a follow-up project.
- **A wider spatial domain**: extending the analysis to include Alexander Island and Palmer Land would put the GVIIS-internal patterns in regional context.
- **Higher-resolution downscaling**: the foehn dynamics need a sub-5-km grid to be fully resolved; nesting RACMO inside an even higher-resolution regional model is a natural next step.

## Want a copy? {#want-a-copy}

The full thesis isn't published as a public download here. If you'd like the **full 105-page paper** or the **5-minute summary presentation** — whether you're a researcher, a prospective collaborator, a student working on the GVIIS or Antarctic ice shelves more broadly, or just curious — get in touch and I'll send them over.

<div class="d-flex flex-wrap gap-2 mt-3">
  <a class="btn btn-primary" href="mailto:pearlayem@gmail.com?subject=Request%20for%20MPhil%20thesis%20%E2%80%94%20George%20VI%20Ice%20Shelf">📧 Email me</a>
  <a class="btn btn-outline-primary" href="https://www.linkedin.com/in/pearl-ayem/" target="_blank" rel="noopener">💼 Reach out on LinkedIn</a>
</div>

<p class="text-muted small mt-3">
  The thesis is also indexed on
  <a href="https://books.google.co.uk/books/about/Using_a_Regional_Atmospheric_Model_RACMO.html?id=-92_0QEACAAJ" target="_blank" rel="noopener">Google Books</a>.
</p>

## Further reading

- 🔬 **About RACMO** — [Institute for Marine and Atmospheric Research, Utrecht University](https://www.projects.science.uu.nl/iceclimate/models/racmo-model.php){:target="_blank" rel="noopener"}
- 🏔️ **The fieldwork behind the data** — [The Wheel 2022, "Advancing polar research"]({% link _press/2022-06-01-cambridge-catz-wheel-magazine.md %})
- 📰 **Cambridge feature on this work** — [Polar Impact / Cambridge feature on the underlying field campaign]({% link _press/2021-11-22-cambridge-catz-polar-impact.md %})
