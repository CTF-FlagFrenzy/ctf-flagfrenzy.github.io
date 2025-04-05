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
                { label: 'Registry | Setup', link: '/infrastructure/registry/setup' },
                { label: 'Registry | Usage', link: '/infrastructure/registry/usage' },
                { label: 'Registry | Troubleshooting', link: '/infrastructure/registry/troubleshooting' },
              ]
            },
            {
              label: 'Cluster',
              items: [
                { label: 'Cluster | Overview', link: '/infrastructure/cluster/overview' },
                { label: 'Cluster | Initial Setup', link: '/infrastructure/cluster/init' },
                { label: 'Cluster | Using Podman on Loadbalancer', link: '/infrastructure/cluster/podman-on-lb' },
                { label: 'Cluster | Webapp Interaction', link: '/infrastructure/cluster/webapp-interaction' },
                { label: 'Cluster | Challenge Deployment', link: '/infrastructure/cluster/challenge-deployment' },
                { label: 'Cluster | FastAPI Endpoints', link: '/infrastructure/cluster/fastapi-endpoints' },
                { label: 'Cluster | Traffic Routing', link: '/infrastructure/cluster/traffic-routing' },
                { label: 'Cluster | Dashboard', link: '/infrastructure/cluster/dashboard' },
                { label: 'Cluster | Internal Registry', link: '/infrastructure/cluster/internal-registry' },
                { label: 'Cluster | Secrets', link: '/infrastructure/cluster/secrets' },
                { label: 'Cluster | Troubleshooting', link: '/infrastructure/cluster/troubleshooting' },
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
            { label: 'Challenges | Overview', link: '/challenge/overview' },
            { 
              label: 'Web Challenge',
              items: [
                { label: 'Web Challenge | Solana Assets', link: '/challenge/web-challenge/solana-assets' },
                { label: 'Web Challenge | The SQL Heist', link: '/challenge/web-challenge/the-sql-heist' },
                { label: 'Web Challenge | File And Seek', link: '/challenge/web-challenge/file-and-seek' },
                { label: 'Web Challenge | Shadow File', link: '/challenge/web-challenge/shadow-file' },
              ]
            },
            {
              label: 'Others',
              items: [
                { label: 'Others | Security Maths', link: '/challenge/others/security-maths' },
                { label: 'Others | Hidden Job', link: '/challenge/others/hidden-job' },
                { label: 'Others | Decryption Master', link: '/challenge/others/decryption-master' },
                { label: 'Others | The Neverending Zip', link: '/challenge/others/the-neverending-zip' },
                { label: 'Others | Solana Dumb Contract', link: '/challenge/others/solana-dumb-contract' }, 
              ]
            },
            {
              label: 'Cryptography',
              items: [
                { label: 'Cryptography | Ceasar Cypher', link: '/challenge/cryptography/ceasar-cypher' },
                { label: 'Cryptography | Binary Puzzeling', link: '/challenge/cryptography/binary-puzzeling' },
                { label: 'Cryptography | Checking Encryption', link: '/challenge/cryptography/checking-encryption' },
              ]
            },
            {
              label: 'Reversing',
              items: [
                { label: 'Reversing | Confused Scripting', link: '/challenge/reversing/confused-scripting' },
                { label: 'Reversing | Mental Overflow', link: '/challenge/reversing/mental-overflow' },
                { label: 'Reversing | Shell Assembly', link: '/challenge/reversing/shell-assembly' },
                { label: 'Reversing | Corrupted File', link: '/challenge/reversing/corrupted-file' },
                { label: 'Reversing | PYCked Apart', link: '/challenge/reversing/pycked-apart' },
              ]
            },
            {
              label: 'Forensics',
              items: [
                { label: 'Forensics | Pixel Spy', link: '/challenge/forensics/pixel-spy' },
                { label: 'Forensics | Behind The Pixels', link: '/challenge/forensics/behind-the-pixels' },
                { label: 'Forensics | Stealth Invoice', link: '/challenge/forensics/stealth-invoice' },
                { label: 'Forensics | Transmission Received', link: '/challenge/forensics/transmission-received' },
                { label: 'Forensics | Phantom Frequency', link: '/challenge/forensics/phantom-frequency' },
              ]
            },
            {
              label: 'Steganography',
              items: [
                { label: 'Steganography | Hidden Frequencies', link: '/challenge/steganography/hidden-frequencies' },
              ]
            },
            {
              label: 'OSINT',
              items: [
                { label: 'OSINT | Profile Prodigy', link: '/challenge/osint/profile-prodigy' },
                { label: 'OSINT | Time Travelers Hunt', link: '/challenge/osint/time-travelers-hunt' },
                { label: 'OSINT | Git Secrets', link: '/challenge/osint/git-secrets' },
              ]
            },
          ],
				},
				{
					label: 'About', link: '/about'
				},
			],
		}),
	],
});