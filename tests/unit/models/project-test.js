import { module, test } from 'qunit';

import { setupTest } from 'portfolio/tests/helpers';

module('Unit | Model | project', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('project', {});
    assert.ok(model);
  });
});
