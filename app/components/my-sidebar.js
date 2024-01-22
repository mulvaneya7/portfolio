import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class MySidebarComponent extends Component {
  @tracked isMobileScreen = window.innerWidth < 768;

  @action
  updateScreenWidth() {
    this.isMobileScreen = window.innerWidth < 768;
  }

  constructor() {
    super(...arguments);
    window.addEventListener('resize', this.updateScreenWidth);
  }

  willDestroy() {
    super.willDestroy(...arguments);
    window.removeEventListener('resize', this.updateScreenWidth);
  }

  links = [
    { label: 'Projects', url: 'projects' },
    { label: 'About Me', url: 'aboutme' },
    { label: 'Resume', url: 'contactme' },
  ];
  socialLinks = [
    { label: 'GitHub', url: 'https://github.com/mulvaneya7' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/alex-mulvaney/' },
  ];
}
