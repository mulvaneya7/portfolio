import EmberRouter from '@ember/routing/router';
import config from 'portfolio/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('projects');
  this.route('not-found', { path: '/*path' });
  this.route('aboutme');
  this.route('project', { path: '/project/:project_name' });
});
