
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://sunfriend.github.io/portfolio-safiie/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 28064, hash: 'a370d1bb4d18fadd9498ec07f52d2c8f1d505054219cbc8668698b4d51641296', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17232, hash: 'ea0025a12b05537a7f00d6a948af4ec1428115f97accb7b0ae8f9bb362c4dd9f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-3W4UTMC3.css': {size: 238967, hash: 'nTu7wgL0wng', text: () => import('./assets-chunks/styles-3W4UTMC3_css.mjs').then(m => m.default)}
  },
};
