// filepath: c:\Users\manag\Documents\GitHub\ctf-flagfreny.github.io\astro.config.mjs
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://ctf-flagfrenzy.github.io',
  integrations: [
    starlight({
      title: 'CTF FlagFrenzy',
      customCss: [
        './src/styles/custom.css',
      ],
    })
  ],
});