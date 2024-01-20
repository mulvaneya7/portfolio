import Component from '@glimmer/component';

export default class MySidebarComponent extends Component {
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
