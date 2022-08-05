import {addPage, addPaths} from 'setjs/kernel/page-manager.js';

import './api.js';
import './template-functions.js';
import home from './pages/home.js';
import learnBuild from './pages/learnBuild.js';
import about from './pages/about.js';

export default function() {
  addPage('', home);
  addPage('learn-build', learnBuild);
  addPage('about', about);
  addPaths('site', [
    'intro-superadobe',
    'docs/getting-started',
    'docs/templates',
    'docs/pages',
    'docs/architecture',
    'docs/samples',
    'docs/questions'
  ]);
}
