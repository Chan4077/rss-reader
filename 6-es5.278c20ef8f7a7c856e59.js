function _defineProperties(n,e){for(var l=0;l<e.length;l++){var a=e[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}function _createClass(n,e,l){return e&&_defineProperties(n.prototype,e),l&&_defineProperties(n,l),n}function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{zDS7:function(n,e,l){"use strict";l.r(e);var a=l("kZht"),t=l("8JnZ"),i=l("gX7W"),c=l("1PzT"),o=l("qBwE"),r=l("S/D4"),u=l("5ohT"),b=function n(){_classCallCheck(this,n)},s=l("C9Ky"),d=l("QH8h"),m=l("ApNh"),h=l("1P7/"),k=l("FxgA"),p=l("Sgnd"),g=l("76xf"),f=l("An66"),x=l("OcC5"),E=l("pOQZ"),C=l("ENSU"),y=l("4rR8"),v=l("3kIJ"),w=l("owzC"),_=a.qb({encapsulation:2,styles:["@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.91026}50%{animation-timing-function:cubic-bezier(0,0,.2,.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0,0,0,1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(.4,0,1,1);stroke-dashoffset:0}to{stroke-dashoffset:-22.91026}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0,0,.2,.1);opacity:1;transform:rotate(0)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(.14,0,0,1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0,0,.2,.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(.14,0,0,1);opacity:1;transform:rotate(0)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}100%,32.8%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);cursor:pointer;-webkit-tap-highlight-color:transparent}._mat-animation-noopable.mat-checkbox{transition:none;animation:none}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox-layout{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0,0,.2,.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}@media (-ms-high-contrast:active){.mat-checkbox.cdk-keyboard-focused .mat-checkbox-frame{border-style:dotted}}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0,0,.2,.1),opacity 90ms cubic-bezier(0,0,.2,.1)}._mat-animation-noopable .mat-checkbox-background{transition:none}.mat-checkbox-persistent-ripple{width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-checkbox-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media (hover:none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.91026;stroke-dasharray:22.91026;stroke-width:2.13333px}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0);border-radius:2px}@media (-ms-high-contrast:active){.mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:transparent}.mat-checkbox-disabled{cursor:default}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0s mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0s mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0s mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0s mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0s mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:.5s linear 0s mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:.5s linear 0s mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:.3s linear 0s mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}"],data:{}});function M(n){return a.Ob(2,[a.Kb(671088640,1,{_inputElement:0}),a.Kb(671088640,2,{ripple:0}),(n()(),a.sb(2,0,[["label",1]],null,16,"label",[["class","mat-checkbox-layout"]],[[1,"for",0]],null,null,null,null)),(n()(),a.sb(3,0,null,null,10,"div",[["class","mat-checkbox-inner-container"]],[[2,"mat-checkbox-inner-container-no-side-margin",null]],null,null,null,null)),(n()(),a.sb(4,0,[[1,0],["input",1]],null,0,"input",[["class","mat-checkbox-input cdk-visually-hidden"],["type","checkbox"]],[[8,"id",0],[8,"required",0],[8,"checked",0],[1,"value",0],[8,"disabled",0],[1,"name",0],[8,"tabIndex",0],[8,"indeterminate",0],[1,"aria-label",0],[1,"aria-labelledby",0],[1,"aria-checked",0]],[[null,"change"],[null,"click"]],(function(n,e,l){var a=!0,t=n.component;return"change"===e&&(a=!1!==t._onInteractionEvent(l)&&a),"click"===e&&(a=!1!==t._onInputClick(l)&&a),a}),null,null)),(n()(),a.sb(5,0,null,null,3,"div",[["class","mat-checkbox-ripple mat-ripple"],["matRipple",""]],[[2,"mat-ripple-unbounded",null]],null,null,null,null)),a.rb(6,212992,[[2,4]],0,m.v,[a.k,a.y,y.a,[2,m.k],[2,k.a]],{centered:[0,"centered"],radius:[1,"radius"],animation:[2,"animation"],disabled:[3,"disabled"],trigger:[4,"trigger"]},null),a.Hb(7,{enterDuration:0}),(n()(),a.sb(8,0,null,null,0,"div",[["class","mat-ripple-element mat-checkbox-persistent-ripple"]],null,null,null,null,null)),(n()(),a.sb(9,0,null,null,0,"div",[["class","mat-checkbox-frame"]],null,null,null,null,null)),(n()(),a.sb(10,0,null,null,3,"div",[["class","mat-checkbox-background"]],null,null,null,null,null)),(n()(),a.sb(11,0,null,null,1,":svg:svg",[[":xml:space","preserve"],["class","mat-checkbox-checkmark"],["focusable","false"],["version","1.1"],["viewBox","0 0 24 24"]],null,null,null,null,null)),(n()(),a.sb(12,0,null,null,0,":svg:path",[["class","mat-checkbox-checkmark-path"],["d","M4.1,12.7 9,17.6 20.3,6.3"],["fill","none"],["stroke","white"]],null,null,null,null,null)),(n()(),a.sb(13,0,null,null,0,"div",[["class","mat-checkbox-mixedmark"]],null,null,null,null,null)),(n()(),a.sb(14,0,[["checkboxLabel",1]],null,4,"span",[["class","mat-checkbox-label"]],null,[[null,"cdkObserveContent"]],(function(n,e,l){var a=!0;return"cdkObserveContent"===e&&(a=!1!==n.component._onLabelTextChange()&&a),a}),null,null)),a.rb(15,1196032,null,0,x.a,[x.b,a.k,a.y],null,{event:"cdkObserveContent"}),(n()(),a.sb(16,0,null,null,1,"span",[["style","display:none"]],null,null,null,null,null)),(n()(),a.Mb(-1,null,["\xa0"])),a.Db(null,0)],(function(n,e){var l=e.component,t=n(e,7,0,150);n(e,6,0,!0,20,t,l._isRippleDisabled(),a.Eb(e,2))}),(function(n,e){var l=e.component;n(e,2,0,l.inputId),n(e,3,0,!a.Eb(e,14).textContent||!a.Eb(e,14).textContent.trim()),n(e,4,1,[l.inputId,l.required,l.checked,l.value,l.disabled,l.name,l.tabIndex,l.indeterminate,l.ariaLabel||null,l.ariaLabelledby,l._getAriaChecked()]),n(e,5,0,a.Eb(e,6).unbounded)}))}var S=l("QsvA"),z=l("rW4h"),N=l("tBgR"),O=l("Gien"),P=function(){function n(e){_classCallCheck(this,n),this.shared=e,this.themes=["indigo-pink","deeppurple-amber","pink-bluegrey","purple-green"]}return _createClass(n,[{key:"reset",value:function(){var n=this;this.shared.openConfirmDialog({title:"Reset settings?",msg:"Do you want to reset your settings?"}).afterClosed().subscribe((function(e){"ok"===e&&(window.localStorage.settings=JSON.stringify({multipleRss:!1,openNewTab:!0,showImages:!0,theme:"indigo-pink",notifyNewReleases:!0}),n.shared.openSnackBar({msg:"Settings successfully reset",additionalOpts:{duration:4e3,horizontalPosition:"start"}}))}))}},{key:"save",value:function(){window.localStorage.settings=JSON.stringify(this.settings),this.shared.openSnackBar({msg:"Settings saved",action:"Reload",additionalOpts:{duration:4e3,horizontalPosition:"start"}}).onAction().subscribe((function(){window.location.reload()}))}},{key:"ngOnInit",value:function(){window.localStorage.settings&&(this.settings=JSON.parse(window.localStorage.settings))}}]),n}(),A=l("r2F1"),I=a.qb({encapsulation:2,styles:[],data:{}});function F(n){return a.Ob(0,[(n()(),a.sb(0,0,null,null,2,"mat-option",[["class","mat-option"],["role","option"]],[[1,"tabindex",0],[2,"mat-selected",null],[2,"mat-option-multiple",null],[2,"mat-active",null],[8,"id",0],[1,"aria-selected",0],[1,"aria-disabled",0],[2,"mat-option-disabled",null]],[[null,"click"],[null,"keydown"]],(function(n,e,l){var t=!0;return"click"===e&&(t=!1!==a.Eb(n,1)._selectViaInteraction()&&t),"keydown"===e&&(t=!1!==a.Eb(n,1)._handleKeydown(l)&&t),t}),d.e,d.b)),a.rb(1,8568832,[[10,4]],0,m.q,[a.k,a.h,[2,m.j],[2,m.p]],{value:[0,"value"]},null),(n()(),a.Mb(2,0,["",""]))],(function(n,e){n(e,1,0,e.context.$implicit)}),(function(n,e){n(e,0,0,a.Eb(e,1)._getTabIndex(),a.Eb(e,1).selected,a.Eb(e,1).multiple,a.Eb(e,1).active,a.Eb(e,1).id,a.Eb(e,1)._getAriaSelected(),a.Eb(e,1).disabled.toString(),a.Eb(e,1).disabled),n(e,2,0,e.context.$implicit)}))}function K(n){return a.Ob(0,[(n()(),a.sb(0,0,null,null,70,"div",[["class","app-content"]],null,null,null,null,null)),(n()(),a.sb(1,0,null,null,69,"mat-card",[["class","mat-card"]],[[2,"_mat-animation-noopable",null]],null,null,h.d,h.a)),a.rb(2,49152,null,0,i.a,[[2,k.a]],null,null),(n()(),a.sb(3,0,null,0,2,"mat-card-title",[["class","mat-card-title"]],null,null,null,null,null)),a.rb(4,16384,null,0,i.h,[],null,null),(n()(),a.Mb(-1,null,["Settings"])),(n()(),a.sb(6,0,null,0,56,"mat-card-content",[["class","mat-card-content"],["fxLayout","column"]],null,null,null,null,null)),a.rb(7,671744,null,0,p.b,[a.k,g.i,[2,p.e],g.f],{fxLayout:[0,"fxLayout"]},null),a.rb(8,16384,null,0,i.c,[],null,null),(n()(),a.sb(9,0,null,null,1,"h3",[["class","mat-subheader"]],null,null,null,null,null)),(n()(),a.Mb(-1,null,["General"])),(n()(),a.sb(11,0,null,null,6,"mat-checkbox",[["class","checkbox mat-checkbox"]],[[8,"id",0],[1,"tabindex",0],[2,"mat-checkbox-indeterminate",null],[2,"mat-checkbox-checked",null],[2,"mat-checkbox-disabled",null],[2,"mat-checkbox-label-before",null],[2,"_mat-animation-noopable",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],(function(n,e,l){var a=!0;return"ngModelChange"===e&&(a=!1!==(n.component.settings.openNewTab=l)&&a),a}),M,_)),a.rb(12,8568832,null,0,c.b,[a.k,a.h,w.f,a.y,[8,null],[2,c.a],[2,k.a]],null,null),a.Jb(1024,null,v.j,(function(n){return[n]}),[c.b]),a.rb(14,671744,null,0,v.o,[[8,null],[8,null],[8,null],[6,v.j]],{model:[0,"model"]},{update:"ngModelChange"}),a.Jb(2048,null,v.k,null,[v.o]),a.rb(16,16384,null,0,v.l,[[4,v.k]],null,null),(n()(),a.Mb(-1,0,["Open posts in a new tab"])),(n()(),a.sb(18,0,null,null,6,"mat-checkbox",[["class","checkbox mat-checkbox"]],[[8,"id",0],[1,"tabindex",0],[2,"mat-checkbox-indeterminate",null],[2,"mat-checkbox-checked",null],[2,"mat-checkbox-disabled",null],[2,"mat-checkbox-label-before",null],[2,"_mat-animation-noopable",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],(function(n,e,l){var a=!0;return"ngModelChange"===e&&(a=!1!==(n.component.settings.showImages=l)&&a),a}),M,_)),a.rb(19,8568832,null,0,c.b,[a.k,a.h,w.f,a.y,[8,null],[2,c.a],[2,k.a]],null,null),a.Jb(1024,null,v.j,(function(n){return[n]}),[c.b]),a.rb(21,671744,null,0,v.o,[[8,null],[8,null],[8,null],[6,v.j]],{model:[0,"model"]},{update:"ngModelChange"}),a.Jb(2048,null,v.k,null,[v.o]),a.rb(23,16384,null,0,v.l,[[4,v.k]],null,null),(n()(),a.Mb(-1,0,["Show images"])),(n()(),a.sb(25,0,null,null,28,"mat-form-field",[["class","mat-form-field"],["color","accent"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,S.b,S.a)),a.rb(26,7520256,null,9,o.c,[a.k,a.h,[2,m.h],[2,E.b],[2,o.a],y.a,a.y,[2,k.a]],{color:[0,"color"]},null),a.Kb(603979776,1,{_controlNonStatic:0}),a.Kb(335544320,2,{_controlStatic:0}),a.Kb(603979776,3,{_labelChildNonStatic:0}),a.Kb(335544320,4,{_labelChildStatic:0}),a.Kb(603979776,5,{_placeholderChild:0}),a.Kb(603979776,6,{_errorChildren:1}),a.Kb(603979776,7,{_hintChildren:1}),a.Kb(603979776,8,{_prefixChildren:1}),a.Kb(603979776,9,{_suffixChildren:1}),(n()(),a.sb(36,0,null,3,2,"mat-label",[],null,null,null,null,null)),a.rb(37,16384,[[3,4],[4,4]],0,o.g,[],null,null),(n()(),a.Mb(-1,null,["Theme"])),(n()(),a.sb(39,0,null,1,11,"mat-select",[["class","mat-select"],["role","listbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[1,"id",0],[1,"tabindex",0],[1,"aria-label",0],[1,"aria-labelledby",0],[1,"aria-required",0],[1,"aria-disabled",0],[1,"aria-invalid",0],[1,"aria-owns",0],[1,"aria-multiselectable",0],[1,"aria-describedby",0],[1,"aria-activedescendant",0],[2,"mat-select-disabled",null],[2,"mat-select-invalid",null],[2,"mat-select-required",null],[2,"mat-select-empty",null]],[[null,"ngModelChange"],[null,"keydown"],[null,"focus"],[null,"blur"]],(function(n,e,l){var t=!0,i=n.component;return"keydown"===e&&(t=!1!==a.Eb(n,44)._handleKeydown(l)&&t),"focus"===e&&(t=!1!==a.Eb(n,44)._onFocus()&&t),"blur"===e&&(t=!1!==a.Eb(n,44)._onBlur()&&t),"ngModelChange"===e&&(t=!1!==(i.settings.theme=l)&&t),t}),z.b,z.a)),a.Jb(6144,null,m.j,null,[u.c]),a.rb(41,671744,null,0,v.o,[[8,null],[8,null],[8,null],[8,null]],{model:[0,"model"]},{update:"ngModelChange"}),a.Jb(2048,null,v.k,null,[v.o]),a.rb(43,16384,null,0,v.l,[[4,v.k]],null,null),a.rb(44,2080768,null,3,u.c,[N.e,a.h,a.y,m.b,a.k,[2,E.b],[2,v.n],[2,v.g],[2,o.c],[6,v.k],[8,null],u.a,w.h],null,null),a.Kb(603979776,10,{options:1}),a.Kb(603979776,11,{optionGroups:1}),a.Kb(603979776,12,{customTrigger:0}),a.Jb(2048,[[1,4],[2,4]],o.d,null,[u.c]),(n()(),a.hb(16777216,null,1,1,null,F)),a.rb(50,278528,null,0,f.l,[a.O,a.L,a.r],{ngForOf:[0,"ngForOf"]},null),(n()(),a.sb(51,0,null,6,2,"mat-hint",[["class","mat-hint"]],[[2,"mat-right",null],[1,"id",0],[1,"align",0]],null,null,null,null)),a.rb(52,16384,[[7,4]],0,o.f,[],null,null),(n()(),a.Mb(-1,null,["Changes will be made on reload."])),(n()(),a.sb(54,0,null,null,1,"h3",[["class","mat-subheader"]],null,null,null,null,null)),(n()(),a.Mb(-1,null,["Releases"])),(n()(),a.sb(56,0,null,null,6,"mat-checkbox",[["class","checkbox mat-checkbox"]],[[8,"id",0],[1,"tabindex",0],[2,"mat-checkbox-indeterminate",null],[2,"mat-checkbox-checked",null],[2,"mat-checkbox-disabled",null],[2,"mat-checkbox-label-before",null],[2,"_mat-animation-noopable",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],(function(n,e,l){var a=!0;return"ngModelChange"===e&&(a=!1!==(n.component.settings.notifyNewReleases=l)&&a),a}),M,_)),a.rb(57,8568832,null,0,c.b,[a.k,a.h,w.f,a.y,[8,null],[2,c.a],[2,k.a]],null,null),a.Jb(1024,null,v.j,(function(n){return[n]}),[c.b]),a.rb(59,671744,null,0,v.o,[[8,null],[8,null],[8,null],[6,v.j]],{model:[0,"model"]},{update:"ngModelChange"}),a.Jb(2048,null,v.k,null,[v.o]),a.rb(61,16384,null,0,v.l,[[4,v.k]],null,null),(n()(),a.Mb(-1,0,["Notify when new releases are out"])),(n()(),a.sb(63,0,null,0,7,"mat-card-actions",[["align","end"],["class","mat-card-actions"]],[[2,"mat-card-actions-align-end",null]],null,null,null,null)),a.rb(64,16384,null,0,i.b,[],{align:[0,"align"]},null),(n()(),a.sb(65,0,null,null,2,"button",[["color","warn"],["mat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(n,e,l){var a=!0;return"click"===e&&(a=!1!==n.component.reset()&&a),a}),O.d,O.b)),a.rb(66,180224,null,0,t.b,[a.k,w.f,[2,k.a]],{color:[0,"color"]},null),(n()(),a.Mb(-1,0,["Reset"])),(n()(),a.sb(68,0,null,null,2,"button",[["color","primary"],["mat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(n,e,l){var a=!0;return"click"===e&&(a=!1!==n.component.save()&&a),a}),O.d,O.b)),a.rb(69,180224,null,0,t.b,[a.k,w.f,[2,k.a]],{color:[0,"color"]},null),(n()(),a.Mb(-1,0,["Save"]))],(function(n,e){var l=e.component;n(e,7,0,"column"),n(e,14,0,l.settings.openNewTab),n(e,21,0,l.settings.showImages),n(e,26,0,"accent"),n(e,41,0,l.settings.theme),n(e,44,0),n(e,50,0,l.themes),n(e,59,0,l.settings.notifyNewReleases),n(e,64,0,"end"),n(e,66,0,"warn"),n(e,69,0,"primary")}),(function(n,e){n(e,1,0,"NoopAnimations"===a.Eb(e,2)._animationMode),n(e,11,1,[a.Eb(e,12).id,null,a.Eb(e,12).indeterminate,a.Eb(e,12).checked,a.Eb(e,12).disabled,"before"==a.Eb(e,12).labelPosition,"NoopAnimations"===a.Eb(e,12)._animationMode,a.Eb(e,16).ngClassUntouched,a.Eb(e,16).ngClassTouched,a.Eb(e,16).ngClassPristine,a.Eb(e,16).ngClassDirty,a.Eb(e,16).ngClassValid,a.Eb(e,16).ngClassInvalid,a.Eb(e,16).ngClassPending]),n(e,18,1,[a.Eb(e,19).id,null,a.Eb(e,19).indeterminate,a.Eb(e,19).checked,a.Eb(e,19).disabled,"before"==a.Eb(e,19).labelPosition,"NoopAnimations"===a.Eb(e,19)._animationMode,a.Eb(e,23).ngClassUntouched,a.Eb(e,23).ngClassTouched,a.Eb(e,23).ngClassPristine,a.Eb(e,23).ngClassDirty,a.Eb(e,23).ngClassValid,a.Eb(e,23).ngClassInvalid,a.Eb(e,23).ngClassPending]),n(e,25,1,["standard"==a.Eb(e,26).appearance,"fill"==a.Eb(e,26).appearance,"outline"==a.Eb(e,26).appearance,"legacy"==a.Eb(e,26).appearance,a.Eb(e,26)._control.errorState,a.Eb(e,26)._canLabelFloat,a.Eb(e,26)._shouldLabelFloat(),a.Eb(e,26)._hasFloatingLabel(),a.Eb(e,26)._hideControlPlaceholder(),a.Eb(e,26)._control.disabled,a.Eb(e,26)._control.autofilled,a.Eb(e,26)._control.focused,"accent"==a.Eb(e,26).color,"warn"==a.Eb(e,26).color,a.Eb(e,26)._shouldForward("untouched"),a.Eb(e,26)._shouldForward("touched"),a.Eb(e,26)._shouldForward("pristine"),a.Eb(e,26)._shouldForward("dirty"),a.Eb(e,26)._shouldForward("valid"),a.Eb(e,26)._shouldForward("invalid"),a.Eb(e,26)._shouldForward("pending"),!a.Eb(e,26)._animationsEnabled]),n(e,39,1,[a.Eb(e,43).ngClassUntouched,a.Eb(e,43).ngClassTouched,a.Eb(e,43).ngClassPristine,a.Eb(e,43).ngClassDirty,a.Eb(e,43).ngClassValid,a.Eb(e,43).ngClassInvalid,a.Eb(e,43).ngClassPending,a.Eb(e,44).id,a.Eb(e,44).tabIndex,a.Eb(e,44)._getAriaLabel(),a.Eb(e,44)._getAriaLabelledby(),a.Eb(e,44).required.toString(),a.Eb(e,44).disabled.toString(),a.Eb(e,44).errorState,a.Eb(e,44).panelOpen?a.Eb(e,44)._optionIds:null,a.Eb(e,44).multiple,a.Eb(e,44)._ariaDescribedby||null,a.Eb(e,44)._getAriaActiveDescendant(),a.Eb(e,44).disabled,a.Eb(e,44).errorState,a.Eb(e,44).required,a.Eb(e,44).empty]),n(e,51,0,"end"==a.Eb(e,52).align,a.Eb(e,52).id,null),n(e,56,1,[a.Eb(e,57).id,null,a.Eb(e,57).indeterminate,a.Eb(e,57).checked,a.Eb(e,57).disabled,"before"==a.Eb(e,57).labelPosition,"NoopAnimations"===a.Eb(e,57)._animationMode,a.Eb(e,61).ngClassUntouched,a.Eb(e,61).ngClassTouched,a.Eb(e,61).ngClassPristine,a.Eb(e,61).ngClassDirty,a.Eb(e,61).ngClassValid,a.Eb(e,61).ngClassInvalid,a.Eb(e,61).ngClassPending]),n(e,63,0,"end"===a.Eb(e,64).align),n(e,65,0,a.Eb(e,66).disabled||null,"NoopAnimations"===a.Eb(e,66)._animationMode),n(e,68,0,a.Eb(e,69).disabled||null,"NoopAnimations"===a.Eb(e,69)._animationMode)}))}var j=a.ob("app-settings",P,(function(n){return a.Ob(0,[(n()(),a.sb(0,0,null,null,1,"app-settings",[],null,null,null,K,I)),a.rb(1,114688,null,0,P,[A.f],null,null)],(function(n,e){n(e,1,0)}),null)}),{},{},[]),J=l("D4FV"),D=l("2ob+"),L=l("aLyt"),T=l("CBf0"),R=l("9Z2Q"),q=l("DiCn"),B=l("1VvW"),X=function n(){_classCallCheck(this,n)};l.d(e,"SettingsModuleNgFactory",(function(){return V}));var V=a.pb(b,[],(function(n){return a.Bb([a.Cb(512,a.j,a.ab,[[8,[s.a,j]],[3,a.j],a.w]),a.Cb(4608,f.o,f.n,[a.t,[2,f.F]]),a.Cb(4608,v.u,v.u,[]),a.Cb(5120,a.b,(function(n,e){return[g.j(n,e)]}),[f.d,a.A]),a.Cb(4608,x.c,x.c,[]),a.Cb(4608,m.b,m.b,[]),a.Cb(4608,J.c,J.c,[J.i,J.e,a.j,J.h,J.f,a.q,a.y,f.d,E.b,[2,f.i]]),a.Cb(5120,J.j,J.k,[J.c]),a.Cb(5120,u.a,u.b,[J.c]),a.Cb(1073742336,f.c,f.c,[]),a.Cb(1073742336,v.t,v.t,[]),a.Cb(1073742336,v.h,v.h,[]),a.Cb(1073742336,g.c,g.c,[]),a.Cb(1073742336,E.a,E.a,[]),a.Cb(1073742336,p.c,p.c,[]),a.Cb(1073742336,D.a,D.a,[]),a.Cb(1073742336,L.a,L.a,[]),a.Cb(1073742336,T.a,T.a,[[2,g.g],a.A]),a.Cb(1073742336,m.l,m.l,[[2,m.d],[2,C.f]]),a.Cb(1073742336,y.b,y.b,[]),a.Cb(1073742336,m.w,m.w,[]),a.Cb(1073742336,t.c,t.c,[]),a.Cb(1073742336,i.f,i.f,[]),a.Cb(1073742336,x.d,x.d,[]),a.Cb(1073742336,c.d,c.d,[]),a.Cb(1073742336,c.c,c.c,[]),a.Cb(1073742336,o.e,o.e,[]),a.Cb(1073742336,R.c,R.c,[]),a.Cb(1073742336,r.b,r.b,[]),a.Cb(1073742336,q.g,q.g,[]),a.Cb(1073742336,N.c,N.c,[]),a.Cb(1073742336,J.g,J.g,[]),a.Cb(1073742336,m.u,m.u,[]),a.Cb(1073742336,m.r,m.r,[]),a.Cb(1073742336,u.d,u.d,[]),a.Cb(1073742336,B.p,B.p,[[2,B.u],[2,B.l]]),a.Cb(1073742336,X,X,[]),a.Cb(1073742336,b,b,[]),a.Cb(1024,B.j,(function(){return[[{path:"",component:P}]]}),[])])}))}}]);