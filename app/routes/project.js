import Route from '@ember/routing/route';

export default class ProjectRoute extends Route {
  model(params) {
    const { project_name } = params;

    return this.store.findRecord('project', project_name);
  }
}
