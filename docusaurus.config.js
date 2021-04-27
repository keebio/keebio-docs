module.exports = {
  title: 'Keebio Documentation',
  tagline: 'Learn the secrets of building keyboards from Keebio',
  url: 'https://docs.keeb.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/keebio-favicon.png',
  organizationName: 'keebio', // Usually your GitHub org/user name.
  projectName: 'keebio-docs', // Usually your repo name.
  plugins: [
    'plugin-image-zoom'
  ],
  themeConfig: {
    algolia: {
      apiKey: 'c435eee47e15ea45760b6f35f61e5135',
      indexName: 'keeb'
    },
    colorMode: {
      defaultMode: 'dark'
    },
    googleAnalytics: {
      trackingID: 'UA-98651741-2'
    },
    navbar: {
      title: 'Keebio Documentation',
      logo: {
        alt: 'Keebio Logo',
        src: 'img/keebio-favicon.png',
      },
      items: [
        {
          to: 'main',
          activeBasePath: 'docs',
          label: 'Build Guides',
          position: 'left',
        },
        {
          to: 'testing-pcb',
          activeBasePath: 'docs',
          label: 'Testing Your PCB',
          position: 'left',
        },
        {
          to: 'faq/main',
          activeBasePath: 'faq',
          label: 'FAQ',
          position: 'left',
        },
        {
          href: 'https://github.com/keebio/keebio-docs',
          label: 'Keebio Docs GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Instagram',
              href: 'https://instagram.com/keebio',
            },
            {
              label: 'Discord',
              href: 'http://discord.keeb.io/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/keebio',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/keebio',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/keebio/keebio-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Keebio. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/keebio/keebio-docs/',
          routeBasePath: '/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
