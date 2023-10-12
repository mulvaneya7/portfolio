import { module, test } from 'qunit';
import { setupTest } from 'portfolio/tests/helpers';

module('Unit | Route | contactme', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:contactme');
    assert.ok(route);
  });
});
