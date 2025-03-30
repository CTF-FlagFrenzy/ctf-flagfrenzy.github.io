const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx', 'md'],
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '',
  trailingSlash: true,
});
