import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'W3BOTS - Innovating with Passion for Web3',
  tagline: 'We drive web3 adoption by developing innovative tools and bots that simplify complex processes and enhance user experience and engagement.',
  favicon: 'img/favicon.ico',

  url: 'https://www.w3bots.de/',

  baseUrl: '/',

  organizationName: 'facebook', 
  projectName: 'W3BOTS - Innovating with Passion for Web3', 

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          breadcrumbs: true,
        },
        
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-card-image-w3bots.png',
    navbar: {
      title: 'W3BOTS - Innovating with Passion for Web3',
      logo: {
        alt: 'w3bots',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        
      ],
    },
    breadcrumbs: {
      home: {
        label: 'Start', // Ändere 'Home' zu deinem gewünschten Wort
      },
    },
    docs: {
      
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true, // Deaktiviert den Light/Dark-Mode-Button
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
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
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    metadata: [
      {name: 'description', content: 'We drive web3 adoption by developing innovative tools and bots that simplify complex processes and enhance user experience and engagement.'},
      {name: 'keywords', content: 'ton, blockchain development, community engagement,telegram bot,trading bot,yield farming,telegram mini apps,sniperbot,web3 bots,w3bots, web3,tg bot,tools,services,multichain,swap, swapy,pooly,trady, audity,looty '},
      {name: 'robots', content: 'index, follow'}
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;
