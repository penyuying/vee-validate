(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{203:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),s("p",[t._v("You can easily add custom rules to VeeValidate, but your custom rules must adhere to a contract or certain structure:")]),t._m(1),t._m(2),s("p",[t._v("This is the most basic custom validator form. It consists of only a function that returns either a Boolean or a promise. However, it will have a default error message.")]),t._m(3),t._m(4),t._m(5),s("p",[t._v("This validator object must have a "),s("code",[t._v("validate")]),t._v(" method and can contain a "),s("code",[t._v("getMessage")]),t._v(" method which will be merged into the current dictionary locale. For multiple languages, you should use the "),s("router-link",{attrs:{to:"./localization.html"}},[t._v("localization API")]),t._v(".")],1),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),s("p",[t._v("Notice how the "),s("code",[t._v("getMessage")]),t._v(" method receives the "),s("code",[t._v("field")]),t._v(", which is the name of the field under validation as a first parameter, and how the "),s("code",[t._v("validate")]),t._v(" method receives the value as a first parameter. Both receive the "),s("code",[t._v("args")]),t._v(" array which contains the arguments that were configured with the validation rule. Take a look at the "),s("a",{attrs:{href:"https://github.com/baianat/vee-validate/blob/master/src/rules/min.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("actual implementation of the min rule"),s("OutboundLink")],1),t._v(" as an example.")])]),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),s("p",[t._v("Then you can use your rule like any other rule:")]),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),s("p",[t._v("Notice that the other field value will be injected as the first item in the parameter list.")]),t._m(17),t._m(18),t._m(19),s("p",[t._v("VeeValidate triggers initial validation regardless if you used the "),s("router-link",{attrs:{to:"/api/directive.html#immediate"}},[t._v("immediate modifier")]),t._v(" or not, the difference being if the immediate modifier is set, the errors and flags will be updated.")],1),t._m(20),t._m(21),t._m(22),t._m(23),s("p",[t._v("Additionally, you may want to provide a reason for failing the validation that may change the error message. For example, you may be using an external API and the error message is generated there.")]),t._m(24),t._m(25)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"custom-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-rules","aria-hidden":"true"}},[this._v("#")]),this._v(" Custom Rules")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"creating-a-custom-rule"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-custom-rule","aria-hidden":"true"}},[this._v("#")]),this._v(" Creating A Custom Rule")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"function-form"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#function-form","aria-hidden":"true"}},[this._v("#")]),this._v(" Function Form")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{attrs:{class:"token function-variable function"}},[t._v("validator")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("// Return a Boolean or a Promise that resolves to a boolean.")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"object-form"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object-form","aria-hidden":"true"}},[this._v("#")]),this._v(" Object Form")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" validator "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token function"}},[t._v("getMessage")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("field"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// will be added to default locale messages.")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// Returns a message.")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token function"}},[t._v("validate")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// Returns a Boolean or a Promise that resolves to a boolean.")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),a("p",[this._v("As you can see, a validation rule must implement one of the two forms discussed above. Not doing so will throw an exception with a suitable error message detailing what you were missing.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"using-the-custom-rule"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-custom-rule","aria-hidden":"true"}},[this._v("#")]),this._v(" Using The Custom Rule")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("After creating your custom rule, you can add it to the list of rules using "),a("code",[this._v("extend(name, validator)")]),this._v(" method in the validator instance.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Validator "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'vee-validate'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nValidator"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("extend")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'truthy'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  getMessage"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" field "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'The '")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" field "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("' value is not truthy.'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  validate"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" value "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("!")]),s("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v(" value\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" instance "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Validator")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" trueField"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'truthy'")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// Also there is an instance 'extend' method for convenience.")]),t._v("\ninstance"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("extend")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'falsy'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v(" value"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ninstance"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("attach")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'falseField'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  rules"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'falsy'")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[this._v("TIP")]),a("p",[this._v("Using any of the "),a("code",[this._v("extend")]),this._v(" either on the class or on an instance will extend all validators with the new validation rule. Extending a new rule that has the same name as an existing rule will silently overwrite it.")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("field"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("v-validate")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("falsy"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),a("p",[this._v("When the field under validation is "),a("strong",[this._v("not")]),this._v(" required, your rule may not be executed at all. This is because VeeValidate skips validation for empty fields if they are not required.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"target-dependant-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#target-dependant-rules","aria-hidden":"true"}},[this._v("#")]),this._v(" Target Dependant Rules")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Sometimes your rules may need to compare the field value against another field value, some built in rules like "),a("code",[this._v("confirmed")]),this._v(", "),a("code",[this._v("before")]),this._v(" and "),a("code",[this._v("after")]),this._v(" need a target field to compare against.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("You can create custom rules that do this as well by setting the "),a("code",[this._v("hasTarget")]),this._v(" property on the extend options object which is the third parameter.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("validator"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("extend")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'isBigger'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("otherValue"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" value "),s("span",{attrs:{class:"token operator"}},[t._v(">=")]),t._v(" otherValue"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  hasTarget"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("These rules require at least one argument and the target field must have a matching "),a("code",[this._v("ref")]),this._v(" value.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("v-validate")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("confirmed:confirmation"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("password"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("password"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("passwordConfirmation"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("ref")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("confirmation"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("password"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("placeholder")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Confirm the password"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"non-immediate-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#non-immediate-rules","aria-hidden":"true"}},[this._v("#")]),this._v(" Non-immediate Rules")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Sometimes you don't want your rule to be executed, consider a rule that calls to a remote API. Unless the "),a("code",[this._v("immediate")]),this._v(" modifier is set, you don't want the rule to be executed. This can be done by adding "),a("code",[this._v("immediate")]),this._v(" boolean to your extend options.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("validator"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("extend")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'remote'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("otherValue"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("// do something")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  immediate"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("This will skip the rule on the initial validation when the "),a("code",[this._v("immediate")]),this._v(" modifier is not set.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"reasoning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reasoning","aria-hidden":"true"}},[this._v("#")]),this._v(" Reasoning")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[t._v("To achieve this, your validator function should return an "),s("code",[t._v("Object")]),t._v(" instead of a "),s("code",[t._v("Boolean")]),t._v(". This object should always contain a "),s("code",[t._v("valid")]),t._v(" property and an optional "),s("code",[t._v("data")]),t._v(" property. The data property will be passed to the message generator function as the third parameter, then you should use the passed data property to modify the output message. The same thing applies to promises as you resolve the promise with an object containing these properties. Here is a custom rule that does just that:")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myRule "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token function"}},[t._v("getMessage")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("field"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" params"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data "),s("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" data"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'Something went wrong'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token function"}},[t._v("validate")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Promise")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resolve "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token function"}},[t._v("resolve")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        valid"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" value "),s("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'trigger'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("!")]),s("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v(" value"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        data"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" value "),s("span",{attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'trigger'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" undefined "),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" message"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'Not this value'")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);a.default=e.exports}}]);