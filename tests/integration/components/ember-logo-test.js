import { module, test } from 'qunit';
import { setupRenderingTest } from 'portfolio/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ember-logo', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<EmberLogo />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <EmberLogo>
        template block text
      </EmberLogo>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
