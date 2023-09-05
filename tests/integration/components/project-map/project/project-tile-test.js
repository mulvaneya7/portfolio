import { module, test } from 'qunit';
import { setupRenderingTest } from 'portfolio/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | project-map/project/project-tile',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await render(hbs`<ProjectMap::Project::ProjectTile />`);

      assert.dom(this.element).hasText('');

      // Template block usage:
      await render(hbs`
      <ProjectMap::Project::ProjectTile>
        template block text
      </ProjectMap::Project::ProjectTile>
    `);

      assert.dom(this.element).hasText('template block text');
    });
  }
);
