import {upgradeElement} from '@ampproject/worker-dom/dist/index';

const rootEl = document.querySelector('div[ng-worker-app]');

upgradeElement(rootEl, './worker-dom/worker.js');
