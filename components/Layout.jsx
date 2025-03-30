import Head from 'next/head';

export default function Layout({ children, title }) {
  return (
    <div className="container">
      <Head>
        <title>{title || 'FlagFreny CTF'}</title>
        <meta name="description" content="A community dedicated to Capture The Flag competitions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {children}
      </main>

      <footer>
        <p>© {new Date().getFullYear()} FlagFreny CTF</p>
      </footer>

      <style jsx global>{`
        html, body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
        }
        main {
          min-height: 100vh;
          padding: 1rem 0;
        }
        footer {
          padding: 2rem 0;
          border-top: 1px solid #eaeaea;
        }
      `}</style>
    </div>
  );
}
