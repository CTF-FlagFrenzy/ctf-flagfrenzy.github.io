import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://ctf-flagfrenzy.github.io',
  base: '/',  // Explicitly set the base path
  integrations: [
    starlight({
      title: 'CTF-FlagFrenzy',
      customCss: [
        './src/styles/custom.css',
      ],
      social: {
        github: 'https://github.com/CTF-FlagFrenzy',
      },
      expressiveCode: {
        languageAlias: {
          'nginxconf': 'nginx'
        }
      },
			sidebar: [
				{
					label: 'Getting Started', link: '/overview'
				},
				{
					label: 'Infrastructure',
          items: [
            { label: 'Infrastructure | Overview', link: '/infrastructure/overview' },
            { 
              label: 'Registry',
              items: [
                { label: 'Registry | Overview', link: '/infrastructure/registry/overview' },
              ]
            },
            {
              label: 'Cluster',
              items: [
                { label: 'Cluster | Overview', link: '/infrastructure/cluster/overview' },
              ]
            },
          ],
				},
				{
					label: 'Webapp',
					items: [
            { label: 'Webapp | Overview', link: '/webapp/overview' },
            { 
              label: 'Frontend',
              items: [
                { label: 'Frontend | Overview', link: '/webapp/frontend/overview' },
              ]
            },
            {
              label: 'Backend',
              items: [
                { label: 'Backend | Overview', link: '/webapp/backend/overview' },
              ]
            },
            {
              label: 'Anti Cheat',
              items: [
                { label: 'Anti Cheat | Overview', link: '/webapp/anti-cheat/overview' },
              ]
            },
					],
				},
        {
					label: 'Challenges',
					items: [
            { label: 'Challenges | Overview', link: '/challenges/overview' },
            { 
              label: 'Web Challenge',
              items: [
                { label: 'Solana Assets', link: '/challenges/web-challenge/solana-assets' },
                { label: 'The SQL Heist', link: '/challenges/web-challenge/the-sql-heist' },
                { label: 'File And Seek', link: '/challenges/web-challenge/file-and-seek' },
                { label: 'Shadow File', link: '/challenges/web-challenge/shadow-file' },
              ]
            },
            {
              label: 'Others',
              items: [
                { label: 'Security Maths', link: '/challenges/others/security-maths' },
                { label: 'Hidden Job', link: '/challenges/others/hidden-job' },
                { label: 'Decryption Master', link: '/challenges/others/decryption-master' },
                { label: 'The Neverending Zip', link: '/challenges/others/the-neverending-zip' },
              ]
            },
            {
              label: 'Cryptography',
              items: [
                { label: 'Ceasar Cypher', link: '/challenges/cryptography/ceasar-cypher' },
                { label: 'Binary Puzzeling', link: '/challenges/cryptography/binary-puzzeling' },
                { label: 'Checking Encryption', link: '/challenges/cryptography/checking-encryption' },
              ]
            },
            {
              label: 'Reversing',
              items: [
                { label: 'Confused Scripting', link: '/challenges/reversing/confused-scripting' },
                { label: 'Mental Overflow', link: '/challenges/reversing/mental-overflow' },
                { label: 'Shell Assembly', link: '/challenges/reversing/shell-assembly' },
                { label: 'Corrupted File', link: '/challenges/reversing/corrupted-file' },
                { label: 'PYCked Apart', link: '/challenges/reversing/pycked-apart' },
              ]
            },
            {
              label: 'Forensics',
              items: [
                { label: 'Pixel Spy', link: '/challenges/forensics/pixel-spy' },
                { label: 'Behind The Pixels', link: '/challenges/forensics/behind-the-pixels' },
                { label: 'Stealth Invoice', link: '/challenges/forensics/stealth-invoice' },
                { label: 'Transmission Received', link: '/challenges/forensics/transmission-received' },
                { label: 'Phantom Frequency', link: '/challenges/forensics/phantom-frequency' },
                { label: 'Capture the Bytes', link: '/challenges/forensics/capture-the-bytes' },
              ]
            },
            {
              label: 'Steganography',
              items: [
                { label: 'Hidden Frequencies', link: '/challenges/steganography/hidden-frequencies' },
              ]
            },
            {
              label: 'OSINT',
              items: [
                { label: 'Profile Prodigy', link: '/challenges/osint/profile-prodigy' },
                { label: 'Time Travelers Hunt', link: '/challenges/osint/time-travelers-hunt' },
                { label: 'Git Secrets', link: '/challenges/osint/git-secrets' },
              ]
            },
            {
              label: 'Blockchain',
              items: [
                { label: 'Solana Dumb Contract', link: '/challenges/blockchain/solana-dumb-contract' },
              ]
            }
          ],
				},
				{
					label: 'About', link: '/about'
				},
			],
		}),
	],
});