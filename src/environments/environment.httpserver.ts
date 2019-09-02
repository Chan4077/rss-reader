import { mergeWithDefaultEnv } from '../environment.base';

export const environment = mergeWithDefaultEnv({
  production: true,
  swLocation: '/ngsw-worker.js'
});
