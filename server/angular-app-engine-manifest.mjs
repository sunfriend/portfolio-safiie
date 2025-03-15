
export default {
  basePath: 'https://sunfriend.github.io/portfolio-safiie',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
