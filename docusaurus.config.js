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
      appId: '93JMS7URNB',
      apiKey: 'b7c07d0e12d760d793776941414358d7',
      indexName: 'keeb',
      contextualSearch: true,
    },
    zoomSelector: '.markdown :not(em) > img',
    colorMode: {
      defaultMode: 'dark'
    },
    image: 'img/keebio-avatar.png',
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
          to: 'remapping-keyboard',
          activeBasePath: 'docs',
          label: 'QMK Firmware/Remapping/VIA',
          position: 'left',
        },
        {
          to: 'default-keymaps',
          activeBasePath: 'docs',
          label: 'Additional Info',
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
        gtag: {
          trackingID: 'G-W0MR8DLK1C'
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/keebio/keebio-docs/tree/master/',
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
  scripts: [
    {
      src: "https://tools.luckyorange.com/core/lo.js?site-id=a1ff8553",
      async: true,
      defer: true,
    },
  ],
};
