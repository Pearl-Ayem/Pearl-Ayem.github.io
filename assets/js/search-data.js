// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about-me",
    title: "About Me",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-featured-amp-press",
          title: "Featured &amp; Press",
          description: "Interviews, features, and media appearances.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/press/";
          },
        },{id: "nav-curriculum-vitae",
          title: "Curriculum Vitae",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-mphil-thesis",
          title: "MPhil Thesis",
          description: "Atmospheric Drivers of Surface Melt on the George VI Ice Shelf, Antarctica.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/thesis/";
          },
        },{id: "press-a-scott-polar-scholar-on-diversity-in-polar-research",
          title: 'A Scott Polar Scholar on Diversity in Polar Research',
          description: "",
          section: "Press",handler: () => {
              window.location.href = "/press/2021-11-22-cambridge-catz-polar-impact/";
            },},{id: "press-researching-antarctic-surface-melt-at-cambridge",
          title: 'Researching Antarctic Surface Melt at Cambridge',
          description: "",
          section: "Press",handler: () => {
              window.location.href = "/press/2022-06-01-cambridge-catz-wheel-magazine/";
            },},{id: "press-keynote-advising-financial-institutions-on-climate-risk",
          title: 'Keynote: Advising Financial Institutions on Climate Risk',
          description: "",
          section: "Press",handler: () => {
              window.location.href = "/press/2024-11-07-chartis-climaterisk50-panel/";
            },},{id: "press-cambridge-alumni-on-net-zero-by-2040",
          title: 'Cambridge Alumni on Net Zero by 2040',
          description: "",
          section: "Press",handler: () => {
              window.location.href = "/press/2025-01-03-cambridge-catz-net-zero-alumni/";
            },},{id: "press-a-climate-scientist-39-s-path-into-risk-modelling",
          title: 'A Climate Scientist&amp;#39;s Path Into Risk Modelling',
          description: "",
          section: "Press",handler: () => {
              window.location.href = "/press/2025-03-03-bsa-smashing-stereotypes/";
            },},{id: "press-eco-anxiety-and-the-climate-professional",
          title: 'Eco-Anxiety and the Climate Professional',
          description: "",
          section: "Press",handler: () => {
              window.location.href = "/press/2025-05-29-bsa-navigating-eco-anxiety/";
            },},{id: "projects-cannonical-component-analysis-on-sample-datasets",
          title: 'Cannonical Component Analysis on sample datasets',
          description: "Skills- sklearn, scipy, seaborn, CCA, statistics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cca_toy_project/";
            },},{id: "projects-appyling-clustering-to-identify-cloud-streets-in-satellite-imagery",
          title: 'Appyling Clustering to identify cloud streets in satellite imagery',
          description: "Skills - python, K-means, image clustering, multidimensional data",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cloud_streets_clustering/";
            },},{id: "projects-contrast-stretching-on-satellite-data",
          title: 'Contrast stretching on satellite data',
          description: "Skills - python, sklearn, rasterio, TIFF",
          section: "Projects",handler: () => {
              window.location.href = "/projects/contrast_stretching/";
            },},{id: "projects-calculating-rain-rate-from-radar-reflectivity-of-hurricane-julia",
          title: 'Calculating rain rate from radar reflectivity of Hurricane Julia',
          description: "Skills - python, hdf files, rasterio, ECMWF, weather forecasting, geoproj, numpy, pyproj, cloudsat",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hurricane_julia/";
            },},{id: "projects-calculating-rain-rate-from-radar-reflectivity-of-hurricane-karl",
          title: 'Calculating rain rate from radar reflectivity of Hurricane Karl',
          description: "Skills - python, hdf files, rasterio, ECMWF, weather forecasting, geoproj, numpy, pyproj, cloudsat",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hurricane_karl/";
            },},{id: "projects-application-of-multiple-linear-regression-and-stepwise-regression",
          title: 'Application of multiple linear regression and stepwise regression',
          description: "Skills- sklearn, scipy, seaborn, CCA, statistics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mlr_project/";
            },},{id: "projects-principal-component-analysis-on-sample-datasets",
          title: 'Principal Component Analysis on sample datasets',
          description: "Skills- sklearn, scipy, seaborn, PCA, statistics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pca_toy_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%70%65%61%72%6C%61%79%65%6D@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/pearl-ayem", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Pearl-Ayem", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Pearl_Ayem_CV.pdf", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
