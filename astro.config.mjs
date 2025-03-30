import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkGfm from 'remark-gfm';
import remarkGithubAdmonitions from 'remark-github-beta-blockquote-admonitions';

export default defineConfig({
  site: 'https://ctf-flagfrenzy.github.io',
  markdown: {
    remarkPlugins: [
      remarkGfm,
      [remarkGithubAdmonitions, {
        classNameMaps: {
          note: 'note',
          tip: 'tip',
          important: 'important',
          warning: 'warning',
          caution: 'caution'
        }
      }]
    ],
  },
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
            { label: 'Architecture', link: '/infrastructure/architecture' },
            { label: 'Deployment', link: '/infrastructure/deployment' },
            { label: 'Monitoring', link: '/infrastructure/monitoring' },
          ],
				},
				{
					label: 'Webapp',
					items: [
            { label: 'Webapp | Overview', link: '/webapp/overview' },
            { label: 'Frontend', link: '/webapp/frontend' },
            { label: 'Backend', link: '/webapp/backend' },
            { label: 'Database', link: '/webapp/database' },
					],
				},
        {
					label: 'Challenges',
					items: [
            { label: 'Challenges | Overview', link: '/challenges/overview' },
            { 
              label: 'Web-challenge',
              items: [
                { label: 'Solana_Assets', link: '/challenges/web-challenge/solana-assets' },
                { label: 'The_SQL_Heist', link: '/challenges/web-challenge/the-sql-heist' },
                { label: 'File_And_Seek', link: '/challenges/web-challenge/file-and-seek' },
                { label: 'Shadow_File', link: '/challenges/web-challenge/shadow-file' }
              ]
            },
            {
              label: 'Others',
              items: [
                { label: 'Security_Maths', link: '/challenges/others/security-maths' },
                { label: 'Hidden_Job', link: '/challenges/others/hidden-job' },
                { label: 'Decryption_Master', link: '/challenges/others/decryption-master' },
                { label: 'The_Neverending_Zip', link: '/challenges/others/the-neverending-zip' }
              ]
            },
            {
              label: 'Cryptography',
              items: [
                { label: 'Ceasar_Cypher', link: '/challenges/cryptography/ceasar-cypher' },
                { label: 'Binary_Puzzeling', link: '/challenges/cryptography/binary-puzzeling' },
                { label: 'Checking_Encryption', link: '/challenges/cryptography/checking-encryption' }
              ]
            },
            {
              label: 'Reversing',
              items: [
                { label: 'Confused_Scripting', link: '/challenges/reversing/confused-scripting' },
                { label: 'Mental_Overflow', link: '/challenges/reversing/mental-overflow' },
                { label: 'Shell_Assembly', link: '/challenges/reversing/shell-assembly' },
                { label: 'Corrupted_File', link: '/challenges/reversing/corrupted-file' },
                { label: 'PYCked_Apart', link: '/challenges/reversing/pycked-apart' }
              ]
            },
            {
              label: 'Forensics',
              items: [
                { label: 'Pixel_Spy', link: '/challenges/forensics/pixel-spy' },
                { label: 'Behind_The_Pixels', link: '/challenges/forensics/behind-the-pixels' },
                { label: 'Stealth_Invoice', link: '/challenges/forensics/stealth-invoice' },
                { label: 'Transmission_Received', link: '/challenges/forensics/transmission-received' },
                { label: 'Phantom_Frequency', link: '/challenges/forensics/phantom-frequency' },
                { label: 'Capture_the_Bytes', link: '/challenges/forensics/capture-the-bytes' }
              ]
            },
            {
              label: 'Steganography',
              items: [
                { label: 'Hidden_Frequencies', link: '/challenges/steganography/hidden-frequencies' }
              ]
            },
            {
              label: 'OSINT',
              items: [
                { label: 'Profile_Prodigy', link: '/challenges/osint/profile-prodigy' },
                { label: 'Time_Travelers_Hunt', link: '/challenges/osint/time-travelers-hunt' },
                { label: 'Git_Secrets', link: '/challenges/osint/git-secrets' },
              ]
            },
            {
              label: 'Blockchain',
              items: [
                { label: 'Solana_Dumb_Contract', link: '/challenges/blockchain/solana-dumb-contract' }
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