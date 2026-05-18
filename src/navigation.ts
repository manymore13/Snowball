import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Works',
      href: getPermalink('/works'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Pages',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Works', href: getPermalink('/works') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [],
  footNote: `
    &copy; ${new Date().getFullYear()} Houxue Studio. All rights reserved.
    <br />
    Theme by <a class="text-blue-600 underline dark:text-muted" href="https://github.com/arthelokyo/astrowind" target="_blank" rel="noopener noreferrer">AstroWind</a>
  `,
};
