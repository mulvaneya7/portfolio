import { helper } from '@ember/component/helper';

export function isLinkedin([label]) {
  return label === 'LinkedIn';
}

export default helper(isLinkedin);
