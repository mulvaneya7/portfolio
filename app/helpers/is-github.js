import { helper } from '@ember/component/helper';

export function isGithub([label]) {
  return label === 'GitHub';
}

export default helper(isGithub);
