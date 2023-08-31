import Component from '@glimmer/component';

export default class MySidebarComponent extends Component {
  links = [
    { label: 'About Me', url: '/aboutme' },
    { label: 'Projects', url: '/projects' },
  ];
}
