import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type {Options as IdealImageOptions} from '@docusaurus/plugin-ideal-image';
import type * as Preset from '@docusaurus/preset-classic';
import {EnumChangefreq} from 'sitemap';

const config: Config = {
  title: 'Bitbom',
  tagline: 'High-Performance SBOM Analysis Tools',
  favicon: 'img/favicon.png',
  trailingSlash: true,

  // Set the production url of your site here
  url: 'https://bitbom.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'bitbomdev', // Usually your GitHub org/user name.
  projectName: 'minefield', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    // 'docusaurus-plugin-matomo',
    '@docusaurus/theme-mermaid',
    [
      './custom-blog-plugin',
      {
        id: 'blog',
        routeBasePath: 'blog',
        path: './blog',
      },
    ],
    [
      '@docusaurus/plugin-ideal-image',
      /** @type {import("@docusaurus/plugin-ideal-image").PluginOptions} */
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      } satisfies IdealImageOptions,
    ],
    [
      'content-docs',
      {
        id: 'demos',
        path: 'demos',
        routeBasePath: 'demos',
        editCurrentVersion: true,
        sidebarPath: './sidebar-demos.ts',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        editUrl: 'https://github.com/bitbomdev/docs/tree/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'glossary',
        path: 'glossary',
        routeBasePath: 'glossary',
        sidebarPath: './sidebar-glossary.ts',
      },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // editUrl: 'https://github.com/bitbomdev/docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: ['./src/css/custom.css'],
        },
        sitemap: {
          changefreq: EnumChangefreq.DAILY,
          priority: 1,
          ignorePatterns: ['/blog/archive', '/blog/tags', '/blog/tags/**'],
          filename: 'sitemap.xml',
        },
        gtag: {
          trackingID: 'G-36YSGXLQZ7', // Your Google Analytics tracking ID
          anonymizeIP: true, // Anonymize IPs if needed
        },
      } satisfies Preset.Options,
    ],
  ],
  markdown: {
    mermaid: true,
  },
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    announcementBar: {
      id: 'announcementBar-1', // Increment on change
      /* x-release-please-start-version */
      content: `🎉 We just released <a href="https://github.com/bitbomdev/minefield" target="_blank">Minefield</a> 🎉`,
      /* x-release-please-end */
      isCloseable: true,
    },
    navbar: {
      title: 'BitBom',
      logo: {
        alt: 'BitBom Logo',
        src: 'img/bitbomLogoBig.png',
      },
      items: [
        {type: 'docSidebar', sidebarId: 'docs', label: 'Docs', position: 'left'},
        {to: '/demos/starting-up-minefield', label: 'Demos', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/glossary', label: 'Glossary', position: 'left'},
        {
          type: 'search',
          position: 'left',
        },
        {
          type: 'custom-wrapper',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting started',
              to: '/docs/#getting-started',
            },
            {
              label: 'Architecture',
              to: '/docs/getting-started/',
            },
            {
              label: 'Minefield Paper',
              to: '/docs/minefield-paper',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            // {
            //   label: 'Discord',
            //   href: 'https://discord.gg/SxH6KUCGH7',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/bitbomdev/minefield',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Roadmap',
              to: '/roadmap',
            },
            // {
            //   label: 'Talk to founders',
            //   href: 'https://cal.glasskube.eu/team/founder/30min',
            // },
            // {
            //   label: 'Signup for the wait list',
            //   href: 'https://glasskube.cloud/',
            // },
          ],
        },
      ],
      copyright: `<img src="/img/Bitbom-long-white-logo.png" class="footer-logo"/><br>Copyright © ${new Date().getFullYear()} bitbomdev, Inc.<br>Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    // matomo: {
    //   matomoUrl: 'https://a.glasskube.eu/',
    //   siteId: '5',
    //   phpLoader: 'matomo.php',
    //   jsLoader: 'matomo.js',
    // },
    algolia: {
      appId: 'XVADXTT1S0',
      apiKey: 'dd44c26b3affe3e878fa9469701eb849', // search only API key
      indexName: 'bitbom',
      contextualSearch: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
