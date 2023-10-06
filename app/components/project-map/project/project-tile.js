import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class ProjectTileComponent extends Component {
  @tracked title = 'Flask Restful API';
  @tracked description =
    "This Flask-based project is dedicated to crafting a RESTful API microservice that replicates Twitter's user management, authentication, and dynamic timeline functionality.";
  @tracked url = '/images/flask.jpg';

  get project() {
    return {
      title: this.title,
      description: this.description,
      url: this.url,
    };
  }
}
