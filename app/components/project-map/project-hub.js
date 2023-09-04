import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class ProjectHubComponent extends Component {
  @tracked projects = [
    {
      title: 'Flask Restful API',
      description:
        "This Flask-based project is dedicated to crafting a RESTful API microservice that replicates Twitter's user management, authentication, and dynamic timeline functionality.",
      url: '/images/flask.jpg',
    },
    {
      title: 'Service Platform',
      description:
        'This project involved the successful implementation of a new servicing platform, achieved through close collaboration between business and engineering teams.',
      url: '/images/apple.png',
    },
    {
      title: 'Service Platform',
      description:
        'This project involved the successful implementation of a new servicing platform, achieved through close collaboration between business and engineering teams.',
      url: '/images/apple.png',
    },
    {
      title: 'Service Platform',
      description:
        'This project involved the successful implementation of a new servicing platform, achieved through close collaboration between business and engineering teams.',
      url: '/images/apple.png',
    },
  ];
}
