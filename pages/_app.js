import { MDXProvider } from '@mdx-js/react';

const components = {
  h1: props => <h1 style={{ color: '#0070f3' }} {...props} />,
  h2: props => <h2 style={{ color: '#0070f3' }} {...props} />
};

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp;
