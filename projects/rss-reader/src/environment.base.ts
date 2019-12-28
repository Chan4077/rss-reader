import { Version } from '@angular/core';
import { ExtraOptions } from '@angular/router';
import { GitRepo } from './app/pages/release-notes/release-notes';
import { latestVersion as versionJson } from './assets/release-notes/release-notes.json';

// This file contains the constants that all of the environments
// that the app defines.

/** Firebase app configuration */
export interface FirebaseAppConfig {
  apiKey?: string;
  authDomain?: string;
  databaseURL?: string;
  projectId?: string;
  storageBucket?: string;
  messagingSenderId?: string;
}
/** Environment interface */
export interface Environment {
  /** The app's latest version. */
  latestVersion: Version;
  /** Whether the environment is in production mode. */
  production: boolean;
  /** Location of the service worker file. */
  swLocation: string;
  /**
   * Router options to be passed to `RouterModule.forRoot` in the main routing
   * module.
   */
  routerOptions?: ExtraOptions;
  /** Firebase configuration options. (Currently unused) */
  firebaseConfig?: FirebaseAppConfig;
  /** Default Git repo options to be used in-place for the release notes options. */
  gitRepoDefaults?: GitRepo;
}

/** The latest version of the app. */
export const latestVersion = new Version(versionJson);

/** The Firebase configuration. */
export const firebaseConfig: FirebaseAppConfig = {
  apiKey: 'AIzaSyB70FnAVNaxg33vyY4tlPKZ5x00QY80mTc',
  authDomain: 'rss-reader-a5b4b.firebaseapp.com',
  databaseURL: 'https://rss-reader-a5b4b.firebaseio.com',
  projectId: 'rss-reader-a5b4b',
  storageBucket: '',
  messagingSenderId: '870397667989'
};

/** Default configuration for the Git repository. */
export const gitRepoDefaults: GitRepo = {
  host: 'https://github.com',
  username: 'EdricChan03',
  repo: 'rss-reader'
};

/** Default environment that other enviroments can extend from. */
export const defaultEnvironment: Environment = {
  production: false,
  swLocation: '',
  latestVersion,
  gitRepoDefaults
};

/**
 * Merges the specified environment with the default environment
 * and returns the result.
 * @param env The enviroment to merge
 */
export function mergeWithDefaultEnv(env: Partial<Environment>): Environment {
  return { ...defaultEnvironment, ...env };
}
