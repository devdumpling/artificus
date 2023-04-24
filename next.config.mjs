import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './src/theme.config.tsx',
  staticImage: true,
  latex: true,
  flexsearch: {
    codeblock: false,
  },
  experimental: {
    mdxRs: true,
  },
});

export default withNextra({
  reactStrictMode: true,
});
