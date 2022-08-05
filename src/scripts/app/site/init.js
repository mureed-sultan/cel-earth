import {addPage, addPaths} from 'setjs/kernel/page-manager.js';

import './api.js';
import './template-functions.js';
import home from './pages/home.js';
import learnBuild from './pages/learnBuild.js';

export default function() {
  addPage('', home);
  addPage('learn-build', learnBuild);
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
