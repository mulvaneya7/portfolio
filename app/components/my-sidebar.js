import Component from '@glimmer/component';

export default class MySidebarComponent extends Component {
  links = [
    { label: 'Home', url: '/' },
    { label: 'About Me', url: '/aboutme' },
    { label: 'Projects', url: '/projects' },
  ];
}
