import { module, test } from 'qunit';

import { setupTest } from 'portfolio/tests/helpers';

module('Unit | Model | project data', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('project-data', {});
    assert.ok(model);
  });
});
