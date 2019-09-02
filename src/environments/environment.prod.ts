import { mergeWithDefaultEnv } from '../environment.base';

export const environment = mergeWithDefaultEnv({
  production: true,
  swLocation: '/rss-reader/ngsw-worker.js'
});
