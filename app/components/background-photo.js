import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class BackgroundImageComponent extends Component {
  @tracked imageUrl =
    'https://images.unsplash.com/photo-1626908013351-800ddd734b8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80';
}
