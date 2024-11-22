import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({ 
  bundler: viteBundler(),
  markdown: {
    html: true, // Enable HTML in Markdown
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  theme: defaultTheme({
    logo: './logo.png',
    logoAlt: 'TOHO-C',
    home: '/',
    navbar: [
        {
          text: 'Home',
          link: '/',
        },
        {
          text: 'Roles',
          children: [
            {
              text: 'All Roles',
              link: 'roles.html',
            }
          ]
        },
        {
          text: 'Changelogs',
          link: 'changelogs.html',
        },
        {
          text: 'Posts',
          link: '/posts/posts.html',
        },
        {
          text: 'About',
          link: '/abouts/about.md',
        },
        {
          text: 'Install',
          link: '/install.html',
        },
        {
            text: 'Contact Us',
            link: '/contact.html',
        },
        {
          text: 'FAQ',
          link: '/faq.html',
      },
      ],
      sidebar: {
        '/posts/toho-posts': [
            {text: 'Back to Posts', link: '/posts/README.md'},
            {text: 'Introducing TOHO-C', link: '/posts/toho-posts/introducing-toho-c.html'},
        ],
        '/abouts/about/': [
          {text: 'Back to About', link: '/abouts/about.md'},
          {text: 'About the Mod', link: '/abouts/about/abouttheMod.html'},
          {text: 'About Us', link: '/abouts/about/aboutUs.html'}
        ],
        '/roles/': [
          { text: 'Game Settings', link: '/roles/Settings/Game.html' },
          { text: 'System Settings', link: '/roles/Settings/System.html' },
          { text: 'Mod Settings', link: '/roles/Settings/Mod.html' },
          { text: 'Game Modifiers', link: '/roles/Settings/Modifiers.html' },
          { text: 'Impostors', link: '/roles/Impostors/Impostors.html' },
          { text: 'Crewmates', link: '/roles/Crewmates/Crewmates.html' },
          { text: 'Neutrals', link: '/roles/Neutrals/Neutrals.html' },
          { text: 'Add-ons', link: '/roles/Settings/Addons.html' },
          ],
          '/roles/Crewmates/Power': [
            { text: 'Back to Crewmate Roles', link: '/roles/Crewmates/Crewmates.html' },
            { text: 'Illusionist', link: '/roles/Crewmates/Power/Illusionist.html' },
            { text: 'Timekeeper', link: '/roles/Crewmates/Power/Timekeeper.html' },
            { text: 'Telepath', link: '/roles/Crewmates/Power/Telepath.html' },
          ],
          '/roles/Crewmates/Support': [
            { text: 'Back to Crewmate Roles', link: '/roles/Crewmates/Crewmates.html' },
            { text: 'Contractor', link: '/roles/Crewmates/Support/Contractor.html' },
            { text: 'Sympathizer', link: '/roles/Crewmates/Support/Sympathizer.html' },
          ]
      },
  }),

  lang: 'en-US',
  title: 'TOHO-C',
  description: 'Where your modding journey starts!',

  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        },
      },
    }),
  ],
})