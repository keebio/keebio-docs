module.exports = {
  title: 'Keebio Documentation',
  tagline: 'Documentation for Keebio Keyboards',
  url: 'https://docs.keeb.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/keebio-favicon.png',
  organizationName: 'keebio', // Usually your GitHub org/user name.
  projectName: 'keebio-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Keebio Documentation',
      logo: {
        alt: 'Keebio Logo',
        src: 'img/keebio-favicon.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Build Guides',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {to: 'misc', label: 'Miscellaneous Info', position: 'left'},
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
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
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
