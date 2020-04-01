function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{yPrK:function(e,t,n){"use strict";n.r(t),n.d(t,"SettingsModule",(function(){return F}));var o=n("2kYt"),a=n("40Bj"),s=n("nIj0"),i=n("PBFl"),c=n("Meci"),r=n("+Tre"),b=n("29Wa"),l=n("Cd2c"),u=n("R7+U"),m=n("sEIs"),f=n("EM62"),h=n("jx6E"),p=n("r2F1"),d=n("Avx7"),g=n("qFEQ"),S=n("mFH5");function k(e,t){if(1&e&&(f.Sb(0,"mat-option",13),f.Ec(1),f.Rb()),2&e){var n=t.$implicit;f.lc("value",n),f.Bb(1),f.Fc(n)}}var w,R,v,y=[{path:"",component:(w=function(){function e(t,n,o,a){_classCallCheck(this,e),this.dialog=t,this.shared=o,this.settingsStorage=a,this.themes=["indigo-pink","deeppurple-amber","pink-bluegrey","purple-green"],this.settingsForm=n.group({openNewTab:!1,showImages:!1,theme:"indigo-pink",notifyNewReleases:!1}),this.settingsForm.patchValue(a.settings)}return _createClass(e,[{key:"reset",value:function(){var e=this;this.dialog.openConfirmDialog({title:"Reset settings?",msg:"Are you sure you want to reset the settings?"}).afterClosed().subscribe((function(t){"ok"===t&&(e.settingsStorage.clearSettings(),e.shared.openSnackBar({msg:"Settings successfully reset"}))}))}},{key:"save",value:function(){this.settingsStorage.setSettings(this.settingsForm.value),this.shared.openSnackBar({msg:"Settings saved",action:"Reload"}).onAction().subscribe((function(){window.location.reload()}))}}]),e}(),w.\u0275fac=function(e){return new(e||w)(f.Nb(h.a),f.Nb(s.c),f.Nb(p.b),f.Nb(d.a))},w.\u0275cmp=f.Hb({type:w,selectors:[["app-settings"]],decls:28,vars:3,consts:[[1,"app-content"],["fxLayout","column"],["fxLayout","column",3,"formGroup"],[1,"mat-subheader"],["formControlName","openNewTab",1,"checkbox"],["formControlName","showImages",1,"checkbox"],["color","accent"],["formControlName","theme"],[3,"value",4,"ngFor","ngForOf"],["formControlName","notifyNewReleases",1,"checkbox"],["align","end"],["mat-button","","color","warn",3,"click"],["mat-button","","color","primary",3,"disabled","click"],[3,"value"]],template:function(e,t){1&e&&(f.Sb(0,"div",0),f.Sb(1,"mat-card"),f.Sb(2,"mat-card-title"),f.Ec(3,"Settings"),f.Rb(),f.Sb(4,"mat-card-content",1),f.Sb(5,"form",2),f.Sb(6,"h3",3),f.Ec(7,"General"),f.Rb(),f.Sb(8,"mat-checkbox",4),f.Ec(9,"Open posts in a new tab"),f.Rb(),f.Sb(10,"mat-checkbox",5),f.Ec(11,"Show images"),f.Rb(),f.Sb(12,"mat-form-field",6),f.Sb(13,"mat-label"),f.Ec(14,"Theme"),f.Rb(),f.Sb(15,"mat-select",7),f.Cc(16,k,2,2,"mat-option",8),f.Rb(),f.Sb(17,"mat-hint"),f.Ec(18,"Changes will be made on reload."),f.Rb(),f.Rb(),f.Sb(19,"h3",3),f.Ec(20,"Releases"),f.Rb(),f.Sb(21,"mat-checkbox",9),f.Ec(22,"Notify when new releases are out"),f.Rb(),f.Rb(),f.Rb(),f.Sb(23,"mat-card-actions",10),f.Sb(24,"button",11),f.ac("click",(function(){return t.reset()})),f.Ec(25,"Reset"),f.Rb(),f.Sb(26,"button",12),f.ac("click",(function(){return t.save()})),f.Ec(27,"Save"),f.Rb(),f.Rb(),f.Rb(),f.Rb()),2&e&&(f.Bb(5),f.lc("formGroup",t.settingsForm),f.Bb(11),f.lc("ngForOf",t.themes),f.Bb(10),f.lc("disabled",t.settingsForm.invalid))},directives:[c.a,c.h,c.c,g.b,s.r,s.k,s.e,r.a,s.j,s.d,b.d,b.h,u.a,o.l,b.g,c.b,i.b,S.i],encapsulation:2}),w)}],C=((R=function e(){_classCallCheck(this,e)}).\u0275mod=f.Lb({type:R}),R.\u0275inj=f.Kb({factory:function(e){return new(e||R)},imports:[[m.f.forChild(y)],m.f]}),R),E=[i.c,c.f,r.b,b.f,l.b,u.b],F=((v=function e(){_classCallCheck(this,e)}).\u0275mod=f.Lb({type:v}),v.\u0275inj=f.Kb({factory:function(e){return new(e||v)},imports:[[o.c,s.o,a.a,E,C]]}),v)}}]);