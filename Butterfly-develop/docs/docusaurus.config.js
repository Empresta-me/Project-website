const redirects = require("./redirects.js");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "EMPRESTA.ME",
  tagline:
    "Share with trust: Join a community of trusted sharers and make a positive impact on the world.",
  url: "https://docs.butterfly.linwood.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/emprestamelogo.png",
  organizationName: "LinwoodCloud", // Usually your GitHub org/user name.
  projectName: "butterfly", // Usually your repo name.
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de", "fr", "es", "it", "pt-BR", "th", "tr", "ru"],
  },
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    algolia: {
      // The application ID provided by Algolia
      appId: "PQN0C3O7D3",

      // Public API key: it is safe to commit it
      apiKey: "219c0a938f5cec6e889c1e5edaef7035",

      indexName: "docs-butterfly-linwood",

      //... other Algolia params
    },
    navbar: {
      title: "EMPRESTA.ME",
      logo: {
        alt: "BEE Logo",
        src: "img/emprestalogo.png",
      },
      items: [
        /* {
          type: "doc",
          docId: "community",
          docsPluginId: "community",
          position: "left",
          label: "Functionalities",
        }, */
        /* {
          type: "doc",
          docId: "community",
          docsPluginId: "community",
          position: "left",
          label: "Team",
        }, */
        /* {
          
          to: "calendar",
          label: "Calendar",
          position: "left",
        }, */
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Documentation",
        },  
        {
          type: "dropdown",
          label: "More",
          position: "left",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/Empresta-me",
            }
          ],
        },
        {
          type: "docsVersionDropdown",
          position: "right",
          dropdownItemsBefore: [],
          dropdownItemsAfter: [{ to: "/versions", label: "All versions" }],
          dropdownActiveClassDisabled: true,
        },
        {
          type: "localeDropdown",
          position: "right",
          dropdownItemsAfter: [
            {
              to: "https://translate.linwood.dev/butterfly",
              label: "Help translate",
            },
          ],
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Source Code",
          items: [
            {
              label: "Github",
              href: "https://github.com/Empresta-me",
            }
          ],
        },
        {
          title: "Team Management",
          items: [
            {
              label: "JIRA",
              href: "https://github.com/LinwoodCloud/butterfly/tree/develop/app",
            },
          ],
        },
        {
          title: "Deployment",
          items: [
            {
              // Add this HTML object to display the Netlify badge
              html: `
              <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">
                <img src="https://www.netlify.com/img/global/badges/netlify-light.svg" alt="Deploys by Netlify">
              </a>
            `,
            },
          ],
        },
      ],
      logo: {
        alt: "Empresta.me",
        src: "img/emprestalogo.png",
        width: 100,
      },
      copyright: `Copyright © ${new Date().getFullYear()} EMPRESTA.ME.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/Empresta-me",
          versions: {
            "1.0": {
              label: "1.0.0",
              path: "1.0",
            }
          },
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "community",
        path: "community",
        routeBasePath: "/",
        sidebarPath: require.resolve("./sidebarsCommunity.js"),
      },
    ],
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: redirects,
      },
    ],
    [
      "@docusaurus/plugin-pwa",
      {
        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "queryString",
        ],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/logo.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json", // your PWA manifest
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "#f2b138",
          },
        ],
      },
    ],
    // Other tweaks
  ],

  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve("swc-loader"),
      options: {
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
          },
          target: "es2017",
        },
        module: {
          type: isServer ? "commonjs" : "es6",
        },
      },
    }),
  },
};
