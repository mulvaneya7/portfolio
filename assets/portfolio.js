'use strict';



;define("portfolio/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/adapter/json-api"eaimeta@70e063a35619d71f
});
;define("portfolio/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "portfolio/config/environment"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/application",0,"ember-resolver",0,"ember-load-initializers",0,"portfolio/config/environment"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  class App extends _application.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);
      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);
      _defineProperty(this, "Resolver", _emberResolver.default);
    }
  }
  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("portfolio/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component/-private/ember-component-manager"eaimeta@70e063a35619d71f
});
;define("portfolio/components/aboutme-text-display", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component/template-only",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="aboutme-text-box">
      <p>{{@text1}}</p>
      <p>{{@text2}}</p>
  </div>
  */
  {
    "id": "Z1MlmY7n",
    "block": "[[[10,0],[14,0,\"aboutme-text-box\"],[12],[1,\"\\n    \"],[10,2],[12],[1,[30,1]],[13],[1,\"\\n    \"],[10,2],[12],[1,[30,2]],[13],[1,\"\\n\"],[13]],[\"@text1\",\"@text2\"],false,[]]",
    "moduleName": "portfolio/components/aboutme-text-display.hbs",
    "isStrictMode": false
  });
  var _default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
  _exports.default = _default;
});
;define("portfolio/components/background-photo", ["exports", "@ember/component", "@glimmer/component", "@glimmer/tracking", "@ember/template-factory"], function (_exports, _component, _component2, _tracking, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    
  <div class="background-photo">
      <img src={{@imageUrl}} alt="Background of the website"/>
  </div>
  */
  {
    "id": "VbTH2RnV",
    "block": "[[[1,\"\\n\"],[10,0],[14,0,\"background-photo\"],[12],[1,\"\\n    \"],[10,\"img\"],[15,\"src\",[30,1]],[14,\"alt\",\"Background of the website\"],[12],[13],[1,\"\\n\"],[13]],[\"@imageUrl\"],false,[]]",
    "moduleName": "portfolio/components/background-photo.hbs",
    "isStrictMode": false
  });
  let BackgroundImageComponent = (_class = class BackgroundImageComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "imageUrl", _descriptor, this);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "imageUrl", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 'https://images.unsplash.com/photo-1626908013351-800ddd734b8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80';
    }
  })), _class);
  _exports.default = BackgroundImageComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, BackgroundImageComponent);
});
;define("portfolio/components/contact-me-form", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component/template-only",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="contactme-section">
      <div class="contactme-section__header">
          <h2>Get in touch with me!</h2>
          <p>Have a question or want to work together? Send me a message below!</p>
      </div>
      <div class="contactme-container">
          <form action="/submit-form" method="POST">
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" required>
  
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required>
  
              <label for="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
  
              <button type="submit">Submit</button>
          </form>
      </div>
  </div>
  */
  {
    "id": "leyRNOnM",
    "block": "[[[10,0],[14,0,\"contactme-section\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"contactme-section__header\"],[12],[1,\"\\n        \"],[10,\"h2\"],[12],[1,\"Get in touch with me!\"],[13],[1,\"\\n        \"],[10,2],[12],[1,\"Have a question or want to work together? Send me a message below!\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"contactme-container\"],[12],[1,\"\\n        \"],[10,\"form\"],[14,\"action\",\"/submit-form\"],[14,\"method\",\"POST\"],[12],[1,\"\\n            \"],[10,\"label\"],[14,\"for\",\"name\"],[12],[1,\"Name:\"],[13],[1,\"\\n            \"],[10,\"input\"],[14,1,\"name\"],[14,3,\"name\"],[14,\"required\",\"\"],[14,4,\"text\"],[12],[13],[1,\"\\n\\n            \"],[10,\"label\"],[14,\"for\",\"email\"],[12],[1,\"Email:\"],[13],[1,\"\\n            \"],[10,\"input\"],[14,1,\"email\"],[14,3,\"email\"],[14,\"required\",\"\"],[14,4,\"email\"],[12],[13],[1,\"\\n\\n            \"],[10,\"label\"],[14,\"for\",\"message\"],[12],[1,\"Message:\"],[13],[1,\"\\n            \"],[10,\"textarea\"],[14,1,\"message\"],[14,3,\"message\"],[14,\"required\",\"\"],[12],[13],[1,\"\\n\\n            \"],[10,\"button\"],[14,4,\"submit\"],[12],[1,\"Submit\"],[13],[1,\"\\n        \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"],[13]],[],false,[]]",
    "moduleName": "portfolio/components/contact-me-form.hbs",
    "isStrictMode": false
  });
  var _default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
  _exports.default = _default;
});
;define("portfolio/components/ember-logo", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component/template-only",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="ember-logo">
      <p>This website was developed with:</p>
      <img src="/images/ember.png" alt="uh oh!"/>
  </div>
  */
  {
    "id": "rnzVrrl6",
    "block": "[[[10,0],[14,0,\"ember-logo\"],[12],[1,\"\\n    \"],[10,2],[12],[1,\"This website was developed with:\"],[13],[1,\"\\n    \"],[10,\"img\"],[14,\"src\",\"/images/ember.png\"],[14,\"alt\",\"uh oh!\"],[12],[13],[1,\"\\n\"],[13]],[],false,[]]",
    "moduleName": "portfolio/components/ember-logo.hbs",
    "isStrictMode": false
  });
  var _default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
  _exports.default = _default;
});
;define("portfolio/components/fa-icon", ["exports", "@fortawesome/ember-fontawesome/components/fa-icon"], function (_exports, _faIcon) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _faIcon.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@fortawesome/ember-fontawesome/components/fa-icon"eaimeta@70e063a35619d71f
});
;define("portfolio/components/footer", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component/template-only",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class = "footer"></div>
  */
  {
    "id": "KW1C11E8",
    "block": "[[[10,0],[14,0,\"footer\"],[12],[13]],[],false,[]]",
    "moduleName": "portfolio/components/footer.hbs",
    "isStrictMode": false
  });
  var _default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
  _exports.default = _default;
});
;define("portfolio/components/header-bar", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component/template-only",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="headerbar">
      <h1>Alex Mulvaney</h1>
  </div>
  */
  {
    "id": "Qp7PRIoS",
    "block": "[[[10,0],[14,0,\"headerbar\"],[12],[1,\"\\n    \"],[10,\"h1\"],[12],[1,\"Alex Mulvaney\"],[13],[1,\"\\n\"],[13]],[],false,[]]",
    "moduleName": "portfolio/components/header-bar.hbs",
    "isStrictMode": false
  });
  var _default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
  _exports.default = _default;
});
;define("portfolio/components/mobile-header", ["exports", "@ember/component", "@glimmer/component", "@ember/template-factory"], function (_exports, _component, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@ember/component"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="mobile-header">
    <div class="header-content">
      <span class="name">Alex Mulvaney</span>
      <nav>
        <ul>
          {{#each this.links as |link|}}
          <li>
            <LinkTo @route={{link.url}}>{{link.label}}</LinkTo>
          </li>
          {{/each}}
        </ul>
      </nav>
      <SocialBar />
    </div>
  </div>
  */
  {
    "id": "WmVM9lq2",
    "block": "[[[10,0],[14,0,\"mobile-header\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"header-content\"],[12],[1,\"\\n    \"],[10,1],[14,0,\"name\"],[12],[1,\"Alex Mulvaney\"],[13],[1,\"\\n    \"],[10,\"nav\"],[12],[1,\"\\n      \"],[10,\"ul\"],[12],[1,\"\\n\"],[42,[28,[37,1],[[28,[37,1],[[30,0,[\"links\"]]],null]],null],null,[[[1,\"        \"],[10,\"li\"],[12],[1,\"\\n          \"],[8,[39,2],null,[[\"@route\"],[[30,1,[\"url\"]]]],[[\"default\"],[[[[1,[30,1,[\"label\"]]]],[]]]]],[1,\"\\n        \"],[13],[1,\"\\n\"]],[1]],null],[1,\"      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[8,[39,3],null,null,null],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[\"link\"],false,[\"each\",\"-track-array\",\"link-to\",\"social-bar\"]]",
    "moduleName": "portfolio/components/mobile-header.hbs",
    "isStrictMode": false
  });
  class MobileHeaderComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "links", [{
        label: 'Projects',
        url: 'projects'
      }, {
        label: 'About Me',
        url: 'aboutme'
      }, {
        label: 'Resume',
        url: 'contactme'
      }]);
      _defineProperty(this, "socialLinks", [{
        label: 'GitHub',
        url: 'https://github.com/mulvaneya7'
      }, {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/alex-mulvaney/'
      }]);
    }
  }
  _exports.default = MobileHeaderComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, MobileHeaderComponent);
});
;define("portfolio/components/my-sidebar", ["exports", "@ember/component", "@glimmer/component", "@glimmer/tracking", "@ember/object", "@ember/template-factory"], function (_exports, _component, _component2, _tracking, _object, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{#if this.isMobileScreen}}
  <MobileHeader @links="{{this.links}}"/>
  {{else}}
  <div class="sidebar-container">
      <div class="sidebar">
          <div class="sidebar-header">
              <span class="name">Alex Mulvaney</span>
          </div>
              <ul>
                  {{#each this.links as |link|}}
                  <li><LinkTo @route={{link.url}}><strong>{{link.label}}</strong></LinkTo></li>
                  {{/each}}
              </ul>
          <SocialBar />
      </div>
  </div>
  {{/if}}
  */
  {
    "id": "/ODRdGfZ",
    "block": "[[[41,[30,0,[\"isMobileScreen\"]],[[[8,[39,1],null,[[\"@links\"],[[29,[[30,0,[\"links\"]]]]]],null],[1,\"\\n\"]],[]],[[[10,0],[14,0,\"sidebar-container\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"sidebar\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"sidebar-header\"],[12],[1,\"\\n            \"],[10,1],[14,0,\"name\"],[12],[1,\"Alex Mulvaney\"],[13],[1,\"\\n        \"],[13],[1,\"\\n            \"],[10,\"ul\"],[12],[1,\"\\n\"],[42,[28,[37,3],[[28,[37,3],[[30,0,[\"links\"]]],null]],null],null,[[[1,\"                \"],[10,\"li\"],[12],[8,[39,4],null,[[\"@route\"],[[30,1,[\"url\"]]]],[[\"default\"],[[[[10,\"strong\"],[12],[1,[30,1,[\"label\"]]],[13]],[]]]]],[13],[1,\"\\n\"]],[1]],null],[1,\"            \"],[13],[1,\"\\n        \"],[8,[39,5],null,null,null],[1,\"\\n    \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[]]]],[\"link\"],false,[\"if\",\"mobile-header\",\"each\",\"-track-array\",\"link-to\",\"social-bar\"]]",
    "moduleName": "portfolio/components/my-sidebar.hbs",
    "isStrictMode": false
  });
  let MySidebarComponent = (_class = class MySidebarComponent extends _component2.default {
    updateScreenWidth() {
      this.isMobileScreen = window.innerWidth < 768;
    }
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "isMobileScreen", _descriptor, this);
      _defineProperty(this, "links", [{
        label: 'Projects',
        url: 'projects'
      }, {
        label: 'About Me',
        url: 'aboutme'
      }, {
        label: 'Resume',
        url: 'contactme'
      }]);
      _defineProperty(this, "socialLinks", [{
        label: 'GitHub',
        url: 'https://github.com/mulvaneya7'
      }, {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/alex-mulvaney/'
      }]);
      window.addEventListener('resize', this.updateScreenWidth);
    }
    willDestroy() {
      super.willDestroy(...arguments);
      window.removeEventListener('resize', this.updateScreenWidth);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "isMobileScreen", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return window.innerWidth < 768;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "updateScreenWidth", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "updateScreenWidth"), _class.prototype)), _class);
  _exports.default = MySidebarComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, MySidebarComponent);
});
;define("portfolio/components/portrait-image", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component/template-only",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="portraitimage">
      <img src={{@imageUrl}} alt="Portrait of Me" />
  </div>  
  
  
  */
  {
    "id": "k+cdvBip",
    "block": "[[[10,0],[14,0,\"portraitimage\"],[12],[1,\"\\n    \"],[10,\"img\"],[15,\"src\",[30,1]],[14,\"alt\",\"Portrait of Me\"],[12],[13],[1,\"\\n\"],[13],[1,\"  \\n\\n\"]],[\"@imageUrl\"],false,[]]",
    "moduleName": "portfolio/components/portrait-image.hbs",
    "isStrictMode": false
  });
  var _default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
  _exports.default = _default;
});
;define("portfolio/components/project-map/project-hub-display", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component/template-only",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="project-hub">
      <div class="project-hub__header"><h1>{{@this.title}}</h1></div>
      <div class="project-hub__display">{{yield}}</div>
  </div>
  */
  {
    "id": "kPCIsOI2",
    "block": "[[[10,0],[14,0,\"project-hub\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"project-hub__header\"],[12],[10,\"h1\"],[12],[1,[30,1]],[13],[13],[1,\"\\n    \"],[10,0],[14,0,\"project-hub__display\"],[12],[18,2,null],[13],[1,\"\\n\"],[13]],[\"@title\",\"&default\"],false,[\"yield\"]]",
    "moduleName": "portfolio/components/project-map/project-hub-display.hbs",
    "isStrictMode": false
  });
  var _default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
  _exports.default = _default;
});
;define("portfolio/components/project-map/project-hub", ["exports", "@ember/component", "@glimmer/component", "@glimmer/tracking", "@ember/template-factory"], function (_exports, _component, _component2, _tracking, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="project-hub">
      <div class="project-hub__header">
          <h1>Projects</h1>
      </div>
      <div class="project-hub__display">
          {{#each this.projects as |project|}}
              <ProjectMap::Project::ProjectPost @title={{project.title}} @description={{project.description}} @sections={{project.sections}} @url={{project.url}} @image={{project.image}}/>
          {{/each}}
          
      </div>
  </div>
  */
  {
    "id": "MykT/x0R",
    "block": "[[[10,0],[14,0,\"project-hub\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"project-hub__header\"],[12],[1,\"\\n        \"],[10,\"h1\"],[12],[1,\"Projects\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"project-hub__display\"],[12],[1,\"\\n\"],[42,[28,[37,1],[[28,[37,1],[[30,0,[\"projects\"]]],null]],null],null,[[[1,\"            \"],[8,[39,2],null,[[\"@title\",\"@description\",\"@sections\",\"@url\",\"@image\"],[[30,1,[\"title\"]],[30,1,[\"description\"]],[30,1,[\"sections\"]],[30,1,[\"url\"]],[30,1,[\"image\"]]]],null],[1,\"\\n\"]],[1]],null],[1,\"        \\n    \"],[13],[1,\"\\n\"],[13]],[\"project\"],false,[\"each\",\"-track-array\",\"project-map/project/project-post\"]]",
    "moduleName": "portfolio/components/project-map/project-hub.hbs",
    "isStrictMode": false
  });
  let ProjectHubComponent = (_class = class ProjectHubComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "projects", _descriptor, this);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "projects", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [{
        title: 'Apple: Leading the Way in Launching a New Servicing Platform',
        image: 'images/apple.png',
        sections: [{
          subheader: 'The Project Overview',
          description: "The project in question involved the creation and launch of a cutting-edge servicing platform, a pivotal step in enhancing our organization's capabilities. As a leader in this venture, I played a multifaceted role, ensuring that the project was executed flawlessly and delivered on its promises."
        }, {
          subheader: 'Project Management and Execution',
          description: 'In my role, I conducted a wide range of day-to-day activities to keep the project on track. This included gathering requirements, leading grooming sessions, tracking user story numbers, creating detailed reports, and maintaining user stories in the backlog. These tasks demanded attention to detail and a proactive approach to problem-solving, skills that I take pride in.'
        }, {
          subheader: 'Agile Methodology in Action',
          description: "To ensure that our project remained on course, we adopted the Scrum and Agile methodology. This approach allowed us to maintain transparency, efficiency, and alignment throughout the project's lifecycle. By facilitating efficient project delivery, we were able to meet our objectives promptly and resolve any issues that arose in a timely manner."
        }, {
          subheader: 'Key Takeaways',
          description: 'Collaboration is Key: Success often hinges on effective collaboration between diverse teams and stakeholders. Attention to Detail: Thoroughness in tasks like requirement gathering and backlog management is crucial for project success. Agile Methodologies Work: Agile methodologies like Scrum provide a solid framework for project management, ensuring that teams stay on course.'
        }, {
          subheader: 'Conclusion',
          description: 'The launch and implementation of the new servicing platform was a testament to my leadership and project management skills. It highlighted my ability to bring together teams from different domains, keep projects on track, and adhere to Agile methodologies for efficient deliveries.'
        }]
      }, {
        title: 'Cloud Suitability and Readiness - Healthcare',
        image: 'images/cloud_strategy.png',
        // Placeholder image
        sections: [{
          subheader: 'Cloud Operational Readiness',
          description: 'My team and I, led the development of critical deliverables including the Application Estate Portfolio and Cloud Operational Readiness Report. This project required a deep understanding of cloud operations and application architecture.'
        }, {
          subheader: 'Resource and Timeline Management',
          description: 'I Managed resources and timelines effectively to deliver high-quality results. This role demanded strong project management skills and a strategic approach to meeting deadlines and project goals.'
        }]
      }, {
        title: 'Merger & Acquisition Lead - Stock Exchange',
        image: 'images/PM.png',
        // Placeholder image
        sections: [{
          subheader: 'Project Management Excellence',
          description: 'This project involved managing 12 workstreams, integrating a large stock exchange with an acquired company. The focus was on timely completion and adherence to budget constraints, showcasing advanced project management skills and effective stakeholder communication.'
        }, {
          subheader: 'Collaborative Teamwork',
          description: 'I worked in collaboration with DevOps and InfoSec teams, ensuring smooth integration and alignment of IT and security standards. This multidisciplinary approach was key to the project’s success.'
        }, {
          subheader: 'Stakeholder Communication',
          description: 'I engaged with stakeholders at various levels, ensuring clear communication and alignment with project goals. This role demanded high-level communication skills and an ability to navigate complex organizational structures.'
        }]
      }, {
        title: 'Flask Restful API',
        image: 'images/flask.jpg',
        url: 'https://github.com/mulvaneya7/microservices_RESTapi_flask',
        sections: [{
          subheader: 'Valuable Insights',
          description: 'To kickstart your project, start by initializing the database using the flask init command. This creates the necessary database structure and adds initial users. Then, fire up the microservices with foreman start to access the full range of features.'
        }, {
          subheader: 'User Management',
          description: 'The Users Microservice offers user creation, authentication, and follower management. You can create users, add or remove followers, and authenticate accounts seamlessly. Plus, the REST API makes it easy to integrate these functionalities into your applications.'
        }, {
          subheader: 'Timeline Interaction',
          description: 'The Timelines Microservice is perfect for handling timeline interactions. It allows you to post tweets, retrieve user-specific posts, and access a public timeline. Additionally, you can create a "home timeline" featuring posts from users a specific username follows. With these features, managing user timelines becomes a breeze.'
        }]
      }, {
        title: 'Building My Personal Portfolio Website with Ember.js',
        image: 'images/ember.png',
        url: 'https://github.com/mulvaneya7/portfolio',
        sections: [{
          subheader: 'The Vision',
          description: 'Every developer needs a space to display their talents, projects, and experiences. Recognizing this need, I embarked on a mission to build a personal portfolio website that could serve as my digital identity. My vision was clear - create an impressive, user-friendly, and customizable platform that could effectively communicate my skills and accomplishments to the world.'
        }, {
          subheader: 'Choosing Ember.js',
          description: 'Selecting the right technology stack was crucial. After evaluating several options, I decided to go with Ember.js. Why Ember? Because it offers a solid foundation for building ambitious web applications with a strong emphasis on developer productivity. Its conventions and ease of use made it an ideal choice for this project.'
        }, {
          subheader: 'Challenges and Learning',
          description: 'Building my portfolio website with Ember.js came with its fair share of challenges and valuable lessons. While Ember.js is known for its productivity, it has a learning curve. I invested time in understanding its conventions and concepts, which paid off in the long run. Ensuring a seamless experience across various devices required meticulous attention to responsive design principles.'
        }, {
          subheader: 'Conclusion',
          description: "Building my personal portfolio website with Ember.js was not just a technical project; it was a reflection of my skills, passion, and commitment to the world of web development. It's a testament to the power of Ember.js as a framework and my dedication to creating a standout online presence."
        }]
      }];
    }
  })), _class);
  _exports.default = ProjectHubComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, ProjectHubComponent);
});
;define("portfolio/components/project-map/project/project-card", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component/template-only",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="card">
    <img class="card-img-top" src={{@imageUrl}} alt="Card cap">
    <div class="card-body">
      <p class="card-text">{{@projectDescription}}</p>
      <a href="#" class="card-link">Project Link</a>
    </div>
  </div>
  */
  {
    "id": "QPDwRhNn",
    "block": "[[[10,0],[14,0,\"card\"],[12],[1,\"\\n  \"],[10,\"img\"],[14,0,\"card-img-top\"],[15,\"src\",[30,1]],[14,\"alt\",\"Card cap\"],[12],[13],[1,\"\\n  \"],[10,0],[14,0,\"card-body\"],[12],[1,\"\\n    \"],[10,2],[14,0,\"card-text\"],[12],[1,[30,2]],[13],[1,\"\\n    \"],[10,3],[14,6,\"#\"],[14,0,\"card-link\"],[12],[1,\"Project Link\"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[\"@imageUrl\",\"@projectDescription\"],false,[]]",
    "moduleName": "portfolio/components/project-map/project/project-card.hbs",
    "isStrictMode": false
  });
  var _default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
  _exports.default = _default;
});
;define("portfolio/components/project-map/project/project-post", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component/template-only",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="project-post">
      <div class="project-post__header">
          <h1>{{@this.title}}</h1>
      </div>
      <div class="project-post__content">
          <div class="project-post__image">
              <img src={{@this.image}} alt="project post imagery">
          </div>
          {{#each @this.sections as |section|}}
              <div class="project-post__section">
                  <h2>{{section.subheader}}</h2>
                  <p>{{section.description}}</p>
              </div>
          {{/each}}
          {{#if @this.url}}
          <div class="project-post__link">
              <a class="social-link" href={{@this.url}} target="_blank" rel="noopener noreferrer">
                  <FaIcon @icon="github" @prefix="fab" @size="2x"/>
              </a>
          </div>
          {{/if}}
      </div>
  </div>
  */
  {
    "id": "tJFcmuZX",
    "block": "[[[10,0],[14,0,\"project-post\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"project-post__header\"],[12],[1,\"\\n        \"],[10,\"h1\"],[12],[1,[30,1]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"project-post__content\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"project-post__image\"],[12],[1,\"\\n            \"],[10,\"img\"],[15,\"src\",[30,2]],[14,\"alt\",\"project post imagery\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n\"],[42,[28,[37,1],[[28,[37,1],[[30,3]],null]],null],null,[[[1,\"            \"],[10,0],[14,0,\"project-post__section\"],[12],[1,\"\\n                \"],[10,\"h2\"],[12],[1,[30,4,[\"subheader\"]]],[13],[1,\"\\n                \"],[10,2],[12],[1,[30,4,[\"description\"]]],[13],[1,\"\\n            \"],[13],[1,\"\\n\"]],[4]],null],[41,[30,5],[[[1,\"        \"],[10,0],[14,0,\"project-post__link\"],[12],[1,\"\\n            \"],[10,3],[14,0,\"social-link\"],[15,6,[30,5]],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n                \"],[8,[39,3],null,[[\"@icon\",\"@prefix\",\"@size\"],[\"github\",\"fab\",\"2x\"]],null],[1,\"\\n            \"],[13],[1,\"\\n        \"],[13],[1,\"\\n\"]],[]],null],[1,\"    \"],[13],[1,\"\\n\"],[13]],[\"@title\",\"@image\",\"@sections\",\"section\",\"@url\"],false,[\"each\",\"-track-array\",\"if\",\"fa-icon\"]]",
    "moduleName": "portfolio/components/project-map/project/project-post.hbs",
    "isStrictMode": false
  });
  var _default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
  _exports.default = _default;
});
;define("portfolio/components/project-map/project/project-tile", ["exports", "@ember/component", "@glimmer/component", "@glimmer/tracking", "@ember/template-factory"], function (_exports, _component, _component2, _tracking, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <LinkTo @route="project" @model={{@project-name}} class="tile-link">
  <div class="tile">
      <div class="tile-content">
        <h3>{{@title}}</h3>
        <p>{{@description}}</p>
      </div>
  </div>
  </LinkTo>
  
  */
  {
    "id": "lE2l1fsE",
    "block": "[[[8,[39,0],[[24,0,\"tile-link\"]],[[\"@route\",\"@model\"],[\"project\",[30,1]]],[[\"default\"],[[[[1,\"\\n\"],[10,0],[14,0,\"tile\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"tile-content\"],[12],[1,\"\\n      \"],[10,\"h3\"],[12],[1,[30,2]],[13],[1,\"\\n      \"],[10,2],[12],[1,[30,3]],[13],[1,\"\\n    \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\"]],[\"@project-name\",\"@title\",\"@description\"],false,[\"link-to\"]]",
    "moduleName": "portfolio/components/project-map/project/project-tile.hbs",
    "isStrictMode": false
  });
  let ProjectTileComponent = (_class = class ProjectTileComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "title", _descriptor, this);
      _initializerDefineProperty(this, "description", _descriptor2, this);
      _initializerDefineProperty(this, "url", _descriptor3, this);
    }
    get project() {
      return {
        title: this.title,
        description: this.description,
        url: this.url
      };
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "title", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 'Flask Restful API';
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "description", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return "This Flask-based project is dedicated to crafting a RESTful API microservice that replicates Twitter's user management, authentication, and dynamic timeline functionality.";
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "url", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '/images/flask.jpg';
    }
  })), _class);
  _exports.default = ProjectTileComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, ProjectTileComponent);
});
;define("portfolio/components/resume-download", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component/template-only",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="resume-download">
      <div class="resume-download__header">
          <h2>Grab a copy of my latest resume below!</h2>
          <p>Click the image below to download a PDF copy.</p>
      </div>
      <div class="resume-container">
          <a href="files/resume.pdf" download>
              <img src="images/resume-image.jpg" alt="Resume">
          </a>
      </div>
  </div>
  */
  {
    "id": "sqvNqy03",
    "block": "[[[10,0],[14,0,\"resume-download\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"resume-download__header\"],[12],[1,\"\\n        \"],[10,\"h2\"],[12],[1,\"Grab a copy of my latest resume below!\"],[13],[1,\"\\n        \"],[10,2],[12],[1,\"Click the image below to download a PDF copy.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"resume-container\"],[12],[1,\"\\n        \"],[10,3],[14,6,\"files/resume.pdf\"],[14,\"download\",\"\"],[12],[1,\"\\n            \"],[10,\"img\"],[14,\"src\",\"images/resume-image.jpg\"],[14,\"alt\",\"Resume\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"],[13]],[],false,[]]",
    "moduleName": "portfolio/components/resume-download.hbs",
    "isStrictMode": false
  });
  var _default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
  _exports.default = _default;
});
;define("portfolio/components/social-bar", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component/template-only",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="socials">
      <ul class="social-links">
          <li>
              <a class="social-link" href="https://github.com/mulvaneya7" target="_blank" rel="noopener noreferrer">
                  <FaIcon @icon="github" @prefix="fab" @size="2x"/>
              </a>
          </li>
          <li>
              <a class="social-link" href="https://www.linkedin.com/in/alex-mulvaney/" target="_blank" rel="noopener noreferrer">
                  <FaIcon @icon="linkedin" @prefix="fab" @size="2x"/>
              </a>
          </li>
      </ul>
  </div>
  */
  {
    "id": "6fPqii8r",
    "block": "[[[10,0],[14,0,\"socials\"],[12],[1,\"\\n    \"],[10,\"ul\"],[14,0,\"social-links\"],[12],[1,\"\\n        \"],[10,\"li\"],[12],[1,\"\\n            \"],[10,3],[14,0,\"social-link\"],[14,6,\"https://github.com/mulvaneya7\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n                \"],[8,[39,0],null,[[\"@icon\",\"@prefix\",\"@size\"],[\"github\",\"fab\",\"2x\"]],null],[1,\"\\n            \"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,\"li\"],[12],[1,\"\\n            \"],[10,3],[14,0,\"social-link\"],[14,6,\"https://www.linkedin.com/in/alex-mulvaney/\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n                \"],[8,[39,0],null,[[\"@icon\",\"@prefix\",\"@size\"],[\"linkedin\",\"fab\",\"2x\"]],null],[1,\"\\n            \"],[13],[1,\"\\n        \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"],[13]],[],false,[\"fa-icon\"]]",
    "moduleName": "portfolio/components/social-bar.hbs",
    "isStrictMode": false
  });
  var _default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
  _exports.default = _default;
});
;define("portfolio/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-welcome-page/components/welcome-page"eaimeta@70e063a35619d71f
});
;define("portfolio/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug"eaimeta@70e063a35619d71f
});
;define("portfolio/helpers/app-version", ["exports", "@ember/component/helper", "portfolio/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper",0,"portfolio/config/environment",0,"ember-cli-app-version/utils/regexp"eaimeta@70e063a35619d71f
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;
    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }
  var _default = (0, _helper.helper)(appVersion);
  _exports.default = _default;
});
;define("portfolio/helpers/ensure-safe-component", ["exports", "@embroider/util"], function (_exports, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _util.EnsureSafeComponentHelper;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@embroider/util"eaimeta@70e063a35619d71f
});
;define("portfolio/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/helpers/page-title"eaimeta@70e063a35619d71f
  var _default = _pageTitle.default;
  _exports.default = _default;
});
;define("portfolio/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/pluralize"eaimeta@70e063a35619d71f
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("portfolio/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/singularize"eaimeta@70e063a35619d71f
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("portfolio/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "portfolio/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-app-version/initializer-factory",0,"portfolio/config/environment"eaimeta@70e063a35619d71f
  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }
  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("portfolio/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-resolver/resolvers/classic/container-debug-adapter"eaimeta@70e063a35619d71f
  var _default = {
    name: 'container-debug-adapter',
    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
    }
  };
  _exports.default = _default;
});
;define("portfolio/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug/setup"eaimeta@70e063a35619d71f
});
;define("portfolio/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-data",0,"ember-data/setup-container"eaimeta@70e063a35619d71f
  /*
    This code initializes EmberData in an Ember application.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("portfolio/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',
    initialize() {}
  };
  _exports.default = _default;
});
;define("portfolio/models/project", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _dec2, _class, _descriptor, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"@ember-data/model"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  //ProjectModel is a class that extends the Model class from ember-data.
  //It has three attributes: title, description, and url. The @attr decorator is used to define the attributes of the model.
  let ProjectModel = (_dec = (0, _model.attr)('string'), _dec2 = (0, _model.attr)('string'), (_class = class ProjectModel extends _model.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "title", _descriptor, this);
      _initializerDefineProperty(this, "description", _descriptor2, this);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "title", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "description", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = ProjectModel;
});
;define("portfolio/router", ["exports", "@ember/routing/router", "portfolio/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/router",0,"portfolio/config/environment"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  class Router extends _router.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "location", _environment.default.locationType);
      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }
  }
  _exports.default = Router;
  Router.map(function () {
    this.route('projects');
    this.route('not-found', {
      path: '/*path'
    });
    this.route('aboutme');
    this.route('project', {
      path: '/project/:project_name'
    });
    this.route('contactme');
  });
});
;define("portfolio/routes/aboutme", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class AboutmeRoute extends _route.default {}
  _exports.default = AboutmeRoute;
});
;define("portfolio/routes/contactme", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class ContactmeRoute extends _route.default {}
  _exports.default = ContactmeRoute;
});
;define("portfolio/routes/index", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class IndexRoute extends _route.default {
    beforeModel() {
      this.transitionTo('projects');
    }
  }
  _exports.default = IndexRoute;
});
;define("portfolio/routes/not-found", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class NotFoundRoute extends _route.default {}
  _exports.default = NotFoundRoute;
});
;define("portfolio/routes/project", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class ProjectRoute extends _route.default {
    model(params) {
      const {
        project_name
      } = params;
      return this.store.findRecord('project', project_name);
    }
  }
  _exports.default = ProjectRoute;
});
;define("portfolio/routes/projects", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class ProjectsRoute extends _route.default {}
  _exports.default = ProjectsRoute;
});
;define("portfolio/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/json"eaimeta@70e063a35619d71f
});
;define("portfolio/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/json-api"eaimeta@70e063a35619d71f
});
;define("portfolio/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/rest"eaimeta@70e063a35619d71f
});
;define("portfolio/services/-ensure-registered", ["exports", "@embroider/util/services/ensure-registered"], function (_exports, _ensureRegistered) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ensureRegistered.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@embroider/util/services/ensure-registered"eaimeta@70e063a35619d71f
});
;define("portfolio/services/page-title-list", ["exports", "ember-page-title/services/page-title-list"], function (_exports, _pageTitleList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitleList.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title-list"eaimeta@70e063a35619d71f
});
;define("portfolio/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title"eaimeta@70e063a35619d71f
});
;define("portfolio/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-data/store"eaimeta@70e063a35619d71f
});
;define("portfolio/templates/aboutme", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "about me"}}
  <MySidebar />
  <div class="aboutme-page">
      <div class="aboutme-display">
          <div class="aboutme-content">
              <PortraitImage @imageUrl="images/me.jpg" />
              <AboutmeTextDisplay @text1="Hello! My name is Alex and I am a seasoned Cloud Engineering Consultant based in Southern California, I bring a dynamic blend of technical expertise and creative problem-solving to every project. My experience with top-tier firms like Deloitte, coupled with my hands-on involvement in key projects for clients such as Walmart International and Apple, has honed my skills in cloud architecture, DevOps practices, and technical project management. I thrive in environments that challenge me to deliver high-quality solutions within strict timelines and financial constraints, and I am skilled in communicating complex technical concepts to both technical and non-technical stakeholders. My academic background in Computer Science from California State University Fullerton, supported by professional certifications like AWS Solutions Architect Associate, forms the foundation of my technical knowledge."
              @text2="Outside of the office, you'll find me embracing the vibrant outdoor culture of Southern California. I am an avid surfer, snowboarder, and backpacker, always seeking new adventures and experiences in nature. These activities not only fuel my passion for exploration but also provide me with a unique perspective that I bring to my professional life. Additionally, I have a growing interest in blockchain technology. Its potential for innovation and disruption in various sectors aligns with my enthusiasm for emerging technologies and continuous learning."/>
          </div>
      </div>
  </div>
  {{outlet}}
  */
  {
    "id": "NY1tLo+k",
    "block": "[[[1,[28,[35,0],[\"about me\"],null]],[1,\"\\n\"],[8,[39,1],null,null,null],[1,\"\\n\"],[10,0],[14,0,\"aboutme-page\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"aboutme-display\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"aboutme-content\"],[12],[1,\"\\n            \"],[8,[39,2],null,[[\"@imageUrl\"],[\"images/me.jpg\"]],null],[1,\"\\n            \"],[8,[39,3],null,[[\"@text1\",\"@text2\"],[\"Hello! My name is Alex and I am a seasoned Cloud Engineering Consultant based in Southern California, I bring a dynamic blend of technical expertise and creative problem-solving to every project. My experience with top-tier firms like Deloitte, coupled with my hands-on involvement in key projects for clients such as Walmart International and Apple, has honed my skills in cloud architecture, DevOps practices, and technical project management. I thrive in environments that challenge me to deliver high-quality solutions within strict timelines and financial constraints, and I am skilled in communicating complex technical concepts to both technical and non-technical stakeholders. My academic background in Computer Science from California State University Fullerton, supported by professional certifications like AWS Solutions Architect Associate, forms the foundation of my technical knowledge.\",\"Outside of the office, you'll find me embracing the vibrant outdoor culture of Southern California. I am an avid surfer, snowboarder, and backpacker, always seeking new adventures and experiences in nature. These activities not only fuel my passion for exploration but also provide me with a unique perspective that I bring to my professional life. Additionally, I have a growing interest in blockchain technology. Its potential for innovation and disruption in various sectors aligns with my enthusiasm for emerging technologies and continuous learning.\"]],null],[1,\"\\n        \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[46,[28,[37,5],null,null],null,null,null]],[],false,[\"page-title\",\"my-sidebar\",\"portrait-image\",\"aboutme-text-display\",\"component\",\"-outlet\"]]",
    "moduleName": "portfolio/templates/aboutme.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("portfolio/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{outlet}}
  */
  {
    "id": "Q3dt9+Jt",
    "block": "[[[46,[28,[37,1],null,null],null,null,null]],[],false,[\"component\",\"-outlet\"]]",
    "moduleName": "portfolio/templates/application.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("portfolio/templates/contactme", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Contact me"}}
  <MySidebar />
  <div class="contactme-page">
      <div class="contactme-display">
          <ResumeDownload />
          {{!-- <ContactMeForm /> --}}
      </div>
  </div>
  {{outlet}}
  */
  {
    "id": "HZMkEIvx",
    "block": "[[[1,[28,[35,0],[\"Contact me\"],null]],[1,\"\\n\"],[8,[39,1],null,null,null],[1,\"\\n\"],[10,0],[14,0,\"contactme-page\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"contactme-display\"],[12],[1,\"\\n        \"],[8,[39,2],null,null,null],[1,\"\\n\"],[1,\"    \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[46,[28,[37,4],null,null],null,null,null]],[],false,[\"page-title\",\"my-sidebar\",\"resume-download\",\"component\",\"-outlet\"]]",
    "moduleName": "portfolio/templates/contactme.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("portfolio/templates/index", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <BackgroundPhoto @imageUrl="https://images.unsplash.com/photo-1527066579998-dbbae57f45ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80"/>
  <MySidebar />
  */
  {
    "id": "BbBCvMHe",
    "block": "[[[8,[39,0],null,[[\"@imageUrl\"],[\"https://images.unsplash.com/photo-1527066579998-dbbae57f45ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80\"]],null],[1,\"\\n\"],[8,[39,1],null,null,null]],[],false,[\"background-photo\",\"my-sidebar\"]]",
    "moduleName": "portfolio/templates/index.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("portfolio/templates/not-found", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Oops!"}}
  <img src="https://http.cat/images/404.jpg" alt="Not Found" />
  {{outlet}}
  */
  {
    "id": "OiC9xAY8",
    "block": "[[[1,[28,[35,0],[\"Oops!\"],null]],[1,\"\\n\"],[10,\"img\"],[14,\"src\",\"https://http.cat/images/404.jpg\"],[14,\"alt\",\"Not Found\"],[12],[13],[1,\"\\n\"],[46,[28,[37,2],null,null],null,null,null]],[],false,[\"page-title\",\"component\",\"-outlet\"]]",
    "moduleName": "portfolio/templates/not-found.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("portfolio/templates/project", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Project"}} 
  <BackgroundPhoto @imageUrl="https://images.unsplash.com/photo-1527066579998-dbbae57f45ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80"/>
  <MySidebar />
  <ProjectMap::ProjectHubDisplay @title={{@model.title}}>
      <div class="project-hub__description">
          <h1>{{@model.description}}</h1>
      </div>
  </ProjectMap::ProjectHubDisplay>
  */
  {
    "id": "8izKnOCR",
    "block": "[[[1,[28,[35,0],[\"Project\"],null]],[1,\" \\n\"],[8,[39,1],null,[[\"@imageUrl\"],[\"https://images.unsplash.com/photo-1527066579998-dbbae57f45ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80\"]],null],[1,\"\\n\"],[8,[39,2],null,null,null],[1,\"\\n\"],[8,[39,3],null,[[\"@title\"],[[30,1,[\"title\"]]]],[[\"default\"],[[[[1,\"\\n    \"],[10,0],[14,0,\"project-hub__description\"],[12],[1,\"\\n        \"],[10,\"h1\"],[12],[1,[30,1,[\"description\"]]],[13],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]]]]]],[\"@model\"],false,[\"page-title\",\"background-photo\",\"my-sidebar\",\"project-map/project-hub-display\"]]",
    "moduleName": "portfolio/templates/project.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("portfolio/templates/projects", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Projects"}}
  <div class="project-page">
      <MySidebar />
      <ProjectMap::ProjectHub />
  </div>
  {{outlet}}
  */
  {
    "id": "8ea8ALbq",
    "block": "[[[1,[28,[35,0],[\"Projects\"],null]],[1,\"\\n\"],[10,0],[14,0,\"project-page\"],[12],[1,\"\\n    \"],[8,[39,1],null,null,null],[1,\"\\n    \"],[8,[39,2],null,null,null],[1,\"\\n\"],[13],[1,\"\\n\"],[46,[28,[37,4],null,null],null,null,null]],[],false,[\"page-title\",\"my-sidebar\",\"project-map/project-hub\",\"component\",\"-outlet\"]]",
    "moduleName": "portfolio/templates/projects.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("portfolio/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("portfolio/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("portfolio/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("portfolio/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;

;define('portfolio/config/environment', [], function() {
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

;
          if (!runningTests) {
            require("portfolio/app")["default"].create({"name":"portfolio","version":"0.0.0+d0b97001"});
          }
        
//# sourceMappingURL=portfolio.map
