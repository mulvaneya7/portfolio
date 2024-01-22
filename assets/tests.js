'use strict';

define("portfolio/tests/helpers/index", ["exports", "ember-qunit"], function (_exports, _emberQunit) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setupApplicationTest = setupApplicationTest;
  _exports.setupRenderingTest = setupRenderingTest;
  _exports.setupTest = setupTest;
  0; //eaimeta@70e063a35619d71f0,"ember-qunit"eaimeta@70e063a35619d71f
  // This file exists to provide wrappers around ember-qunit's / ember-mocha's
  // test setup functions. This way, you can easily extend the setup that is
  // needed per test type.
  function setupApplicationTest(hooks, options) {
    (0, _emberQunit.setupApplicationTest)(hooks, options);

    // Additional setup for application tests can be done here.
    //
    // For example, if you need an authenticated session for each
    // application test, you could do:
    //
    // hooks.beforeEach(async function () {
    //   await authenticateSession(); // ember-simple-auth
    // });
    //
    // This is also a good place to call test setup functions coming
    // from other addons:
    //
    // setupIntl(hooks); // ember-intl
    // setupMirage(hooks); // ember-cli-mirage
  }

  function setupRenderingTest(hooks, options) {
    (0, _emberQunit.setupRenderingTest)(hooks, options);

    // Additional setup for rendering tests can be done here.
  }

  function setupTest(hooks, options) {
    (0, _emberQunit.setupTest)(hooks, options);

    // Additional setup for unit tests can be done here.
  }
});
define("portfolio/tests/integration/components/aboutme-text-display-test", ["qunit", "portfolio/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"portfolio/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | aboutme-text-display', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <AboutmeTextDisplay />
      */
      {
        "id": "inQT/EYP",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"aboutme-text-display\"]]",
        "moduleName": "/home/franksavage/projects/portfolio/portfolio/portfolio/tests/integration/components/aboutme-text-display-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <AboutmeTextDisplay>
              template block text
            </AboutmeTextDisplay>
          
      */
      {
        "id": "6OBamq/L",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"aboutme-text-display\"]]",
        "moduleName": "/home/franksavage/projects/portfolio/portfolio/portfolio/tests/integration/components/aboutme-text-display-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("portfolio/tests/integration/components/background-photo-test", ["qunit", "portfolio/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"portfolio/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | background-photo', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <BackgroundPhoto />
      */
      {
        "id": "ucc5+ZJN",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"background-photo\"]]",
        "moduleName": "/home/franksavage/projects/portfolio/portfolio/portfolio/tests/integration/components/background-photo-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <BackgroundPhoto>
              template block text
            </BackgroundPhoto>
          
      */
      {
        "id": "8MDiPMwr",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"background-photo\"]]",
        "moduleName": "/home/franksavage/projects/portfolio/portfolio/portfolio/tests/integration/components/background-photo-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("portfolio/tests/integration/components/contact-me-form-test", ["qunit", "portfolio/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"portfolio/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | contact-me-form', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ContactMeForm />
      */
      {
        "id": "oJ/uYLuB",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"contact-me-form\"]]",
        "moduleName": "/home/franksavage/projects/portfolio/portfolio/portfolio/tests/integration/components/contact-me-form-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <ContactMeForm>
              template block text
            </ContactMeForm>
          
      */
      {
        "id": "UDobtrog",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"contact-me-form\"]]",
        "moduleName": "/home/franksavage/projects/portfolio/portfolio/portfolio/tests/integration/components/contact-me-form-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("portfolio/tests/integration/components/ember-logo-test", ["qunit", "portfolio/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"portfolio/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | ember-logo', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <EmberLogo />
      */
      {
        "id": "tdmke9YP",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"ember-logo\"]]",
        "moduleName": "/home/franksavage/projects/portfolio/portfolio/portfolio/tests/integration/components/ember-logo-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <EmberLogo>
              template block text
            </EmberLogo>
          
      */
      {
        "id": "fRPWyPrw",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"ember-logo\"]]",
        "moduleName": "/home/franksavage/projects/portfolio/portfolio/portfolio/tests/integration/components/ember-logo-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("portfolio/tests/integration/components/footer-test", ["qunit", "portfolio/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"portfolio/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | footer', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Footer />
      */
      {
        "id": "w5rYYGS3",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"footer\"]]",
        "moduleName": "/home/franksavage/projects/portfolio/portfolio/portfolio/tests/integration/components/footer-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Footer>
              template block text
            </Footer>
          
      */
      {
        "id": "/eyRiyp/",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"footer\"]]",
        "moduleName": "/home/franksavage/projects/portfolio/portfolio/portfolio/tests/integration/components/footer-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("portfolio/tests/integration/components/header-bar-test", ["qunit", "portfolio/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"portfolio/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | header-bar', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <HeaderBar />
      */
      {
        "id": "o/m1+GhV",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"header-bar\"]]",
        "moduleName": "/home/franksavage/projects/portfolio/portfolio/portfolio/tests/integration/components/header-bar-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <HeaderBar>
              template block text
            </HeaderBar>
          
      */
      {
        "id": "xM7Jq/VG",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"header-bar\"]]",
        "moduleName": "/home/franksavage/projects/portfolio/portfolio/portfolio/tests/integration/components/header-bar-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("portfolio/tests/integration/components/mobile-header-test", ["qunit", "portfolio/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"portfolio/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | mobile-header', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <MobileHeader />
      */
      {
        "id": "5tCRw1rw",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"mobile-header\"]]",
        "moduleName": "/home/franksavage/projects/portfolio/portfolio/portfolio/tests/integration/components/mobile-header-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <MobileHeader>
              template block text
            </MobileHeader>
          
      */
      {
        "id": "nUFU0S+U",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"mobile-header\"]]",
        "moduleName": "/home/franksavage/projects/portfolio/portfolio/portfolio/tests/integration/components/mobile-header-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("portfolio/tests/integration/components/my-sidebar-test", ["qunit", "portfolio/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"portfolio/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | my-sidebar', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <MySidebar />
      */
      {
        "id": "5SDWiwuh",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"my-sidebar\"]]",
        "moduleName": "/home/franksavage/projects/portfolio/portfolio/portfolio/tests/integration/components/my-sidebar-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <MySidebar>
              template block text
            </MySidebar>
          
      */
      {
        "id": "8zjkz1O2",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"my-sidebar\"]]",
        "moduleName": "/home/franksavage/projects/portfolio/portfolio/portfolio/tests/integration/components/my-sidebar-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("portfolio/tests/integration/components/portrait-image-test", ["qunit", "portfolio/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"portfolio/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | portrait-image', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <PortraitImage />
      */
      {
        "id": "DI8LOblA",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"portrait-image\"]]",
        "moduleName": "/home/franksavage/projects/portfolio/portfolio/portfolio/tests/integration/components/portrait-image-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <PortraitImage>
              template block text
            </PortraitImage>
          
      */
      {
        "id": "4ITyqfUv",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"portrait-image\"]]",
        "moduleName": "/home/franksavage/projects/portfolio/portfolio/portfolio/tests/integration/components/portrait-image-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("portfolio/tests/integration/components/project-hub-display-test", ["qunit", "portfolio/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"portfolio/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | project-hub-display', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ProjectHubDisplay />
      */
      {
        "id": "wy8ShYS6",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"project-hub-display\"]]",
        "moduleName": "/home/franksavage/projects/portfolio/portfolio/portfolio/tests/integration/components/project-hub-display-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <ProjectHubDisplay>
              template block text
            </ProjectHubDisplay>
          
      */
      {
        "id": "7R3WXsJO",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"project-hub-display\"]]",
        "moduleName": "/home/franksavage/projects/portfolio/portfolio/portfolio/tests/integration/components/project-hub-display-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("portfolio/tests/integration/components/project-map/project-hub-display-test", ["qunit", "portfolio/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"portfolio/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | project-map/project-hub-display', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ProjectMap::ProjectHubDisplay />
      */
      {
        "id": "0jkgQB+1",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"project-map/project-hub-display\"]]",
        "moduleName": "/home/franksavage/projects/portfolio/portfolio/portfolio/tests/integration/components/project-map/project-hub-display-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <ProjectMap::ProjectHubDisplay>
              template block text
            </ProjectMap::ProjectHubDisplay>
          
      */
      {
        "id": "3BiPRj+6",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"project-map/project-hub-display\"]]",
        "moduleName": "/home/franksavage/projects/portfolio/portfolio/portfolio/tests/integration/components/project-map/project-hub-display-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("portfolio/tests/integration/components/project-map/project-hub-test", ["qunit", "portfolio/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"portfolio/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | project-map/project-hub', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ProjectMap::ProjectHub />
      */
      {
        "id": "699/rI0N",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"project-map/project-hub\"]]",
        "moduleName": "/home/franksavage/projects/portfolio/portfolio/portfolio/tests/integration/components/project-map/project-hub-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <ProjectMap::ProjectHub>
              template block text
            </ProjectMap::ProjectHub>
          
      */
      {
        "id": "ncHFM/VM",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"project-map/project-hub\"]]",
        "moduleName": "/home/franksavage/projects/portfolio/portfolio/portfolio/tests/integration/components/project-map/project-hub-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("portfolio/tests/integration/components/project-map/project/project-card-test", ["qunit", "portfolio/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"portfolio/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | project-map/project/project-card', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ProjectMap::Project::ProjectCard />
      */
      {
        "id": "/qt2qviD",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"project-map/project/project-card\"]]",
        "moduleName": "/home/franksavage/projects/portfolio/portfolio/portfolio/tests/integration/components/project-map/project/project-card-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <ProjectMap::Project::ProjectCard>
              template block text
            </ProjectMap::Project::ProjectCard>
          
      */
      {
        "id": "lkrAlQjI",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"project-map/project/project-card\"]]",
        "moduleName": "/home/franksavage/projects/portfolio/portfolio/portfolio/tests/integration/components/project-map/project/project-card-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("portfolio/tests/integration/components/project-map/project/project-post-test", ["qunit", "portfolio/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"portfolio/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | project-map/project/project-post', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ProjectMap::Project::ProjectPost />
      */
      {
        "id": "/pYm4mCp",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"project-map/project/project-post\"]]",
        "moduleName": "/home/franksavage/projects/portfolio/portfolio/portfolio/tests/integration/components/project-map/project/project-post-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <ProjectMap::Project::ProjectPost>
              template block text
            </ProjectMap::Project::ProjectPost>
          
      */
      {
        "id": "E543vQzp",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"project-map/project/project-post\"]]",
        "moduleName": "/home/franksavage/projects/portfolio/portfolio/portfolio/tests/integration/components/project-map/project/project-post-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("portfolio/tests/integration/components/project-map/project/project-tile-test", ["qunit", "portfolio/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"portfolio/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | project-map/project/project-tile', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ProjectMap::Project::ProjectTile />
      */
      {
        "id": "lVRWBGok",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"project-map/project/project-tile\"]]",
        "moduleName": "/home/franksavage/projects/portfolio/portfolio/portfolio/tests/integration/components/project-map/project/project-tile-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <ProjectMap::Project::ProjectTile>
              template block text
            </ProjectMap::Project::ProjectTile>
          
      */
      {
        "id": "8SxidJtt",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"project-map/project/project-tile\"]]",
        "moduleName": "/home/franksavage/projects/portfolio/portfolio/portfolio/tests/integration/components/project-map/project/project-tile-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("portfolio/tests/integration/components/project-map/project/star-test", ["qunit", "portfolio/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"portfolio/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | project-map/project/star', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ProjectMap::Project::Star />
      */
      {
        "id": "k6n8wKJv",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"project-map/project/star\"]]",
        "moduleName": "/home/franksavage/projects/portfolio/portfolio/portfolio/tests/integration/components/project-map/project/star-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <ProjectMap::Project::Star>
              template block text
            </ProjectMap::Project::Star>
          
      */
      {
        "id": "rk0TdzZg",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"project-map/project/star\"]]",
        "moduleName": "/home/franksavage/projects/portfolio/portfolio/portfolio/tests/integration/components/project-map/project/star-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("portfolio/tests/integration/components/resume-download-test", ["qunit", "portfolio/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"portfolio/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | resume-download', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ResumeDownload />
      */
      {
        "id": "wr80aAUP",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"resume-download\"]]",
        "moduleName": "/home/franksavage/projects/portfolio/portfolio/portfolio/tests/integration/components/resume-download-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <ResumeDownload>
              template block text
            </ResumeDownload>
          
      */
      {
        "id": "pbOS2Ah5",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"resume-download\"]]",
        "moduleName": "/home/franksavage/projects/portfolio/portfolio/portfolio/tests/integration/components/resume-download-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("portfolio/tests/integration/components/social-bar-test", ["qunit", "portfolio/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"portfolio/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | social-bar', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <SocialBar />
      */
      {
        "id": "4ieRSny8",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"social-bar\"]]",
        "moduleName": "/home/franksavage/projects/portfolio/portfolio/portfolio/tests/integration/components/social-bar-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <SocialBar>
              template block text
            </SocialBar>
          
      */
      {
        "id": "86eT4ar1",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"social-bar\"]]",
        "moduleName": "/home/franksavage/projects/portfolio/portfolio/portfolio/tests/integration/components/social-bar-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("portfolio/tests/integration/helpers/is-github-test", ["qunit", "portfolio/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"portfolio/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Helper | isGithub', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);

    // TODO: Replace this with your real tests.
    (0, _qunit.test)('it renders', async function (assert) {
      this.set('inputValue', '1234');
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        {{is-github this.inputValue}}
      */
      {
        "id": "Nu/JZyGJ",
        "block": "[[[1,[28,[35,0],[[30,0,[\"inputValue\"]]],null]]],[],false,[\"is-github\"]]",
        "moduleName": "/home/franksavage/projects/portfolio/portfolio/portfolio/tests/integration/helpers/is-github-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('1234');
    });
  });
});
define("portfolio/tests/integration/helpers/is-linkedin-test", ["qunit", "portfolio/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"portfolio/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Helper | isLinkedin', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);

    // TODO: Replace this with your real tests.
    (0, _qunit.test)('it renders', async function (assert) {
      this.set('inputValue', '1234');
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        {{is-linkedin this.inputValue}}
      */
      {
        "id": "N65k9b9U",
        "block": "[[[1,[28,[35,0],[[30,0,[\"inputValue\"]]],null]]],[],false,[\"is-linkedin\"]]",
        "moduleName": "/home/franksavage/projects/portfolio/portfolio/portfolio/tests/integration/helpers/is-linkedin-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('1234');
    });
  });
});
define("portfolio/tests/test-helper", ["portfolio/app", "portfolio/config/environment", "qunit", "@ember/test-helpers", "qunit-dom", "ember-qunit"], function (_app, _environment, QUnit, _testHelpers, _qunitDom, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"portfolio/app",0,"portfolio/config/environment",0,"qunit",0,"@ember/test-helpers",0,"qunit-dom",0,"ember-qunit"eaimeta@70e063a35619d71f
  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _emberQunit.start)();
});
define("portfolio/tests/unit/models/project-data-test", ["qunit", "portfolio/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"portfolio/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Model | project data', function (hooks) {
    (0, _helpers.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('project-data', {});
      assert.ok(model);
    });
  });
});
define("portfolio/tests/unit/models/project-test", ["qunit", "portfolio/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"portfolio/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Model | project', function (hooks) {
    (0, _helpers.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('project', {});
      assert.ok(model);
    });
  });
});
define("portfolio/tests/unit/routes/aboutme-test", ["qunit", "portfolio/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"portfolio/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Route | aboutme', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:aboutme');
      assert.ok(route);
    });
  });
});
define("portfolio/tests/unit/routes/contactme-test", ["qunit", "portfolio/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"portfolio/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Route | contactme', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:contactme');
      assert.ok(route);
    });
  });
});
define("portfolio/tests/unit/routes/index-test", ["qunit", "portfolio/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"portfolio/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define("portfolio/tests/unit/routes/not-found-test", ["qunit", "portfolio/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"portfolio/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Route | not-found', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:not-found');
      assert.ok(route);
    });
  });
});
define("portfolio/tests/unit/routes/projects-test", ["qunit", "portfolio/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"portfolio/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Route | projects', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:projects');
      assert.ok(route);
    });
  });
});
define('portfolio/config/environment', [], function() {
  var prefix = 'portfolio';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('portfolio/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
