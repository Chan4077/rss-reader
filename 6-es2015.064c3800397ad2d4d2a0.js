(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{yPrK:function(e,t,o){"use strict";o.r(t),o.d(t,"SettingsModule",(function(){return E}));var n=o("2kYt"),s=o("40Bj"),a=o("nIj0"),c=o("PBFl"),r=o("Meci"),i=o("+Tre"),b=o("29Wa"),l=o("Cd2c"),m=o("R7+U"),u=o("sEIs"),h=o("EM62"),p=o("jx6E"),g=o("r2F1"),d=o("Avx7"),f=o("qFEQ"),S=o("mFH5");function R(e,t){if(1&e&&(h.Sb(0,"mat-option",13),h.Ec(1),h.Rb()),2&e){const e=t.$implicit;h.lc("value",e),h.Bb(1),h.Fc(e)}}const w=[{path:"",component:(()=>{class e{constructor(e,t,o,n){this.dialog=e,this.shared=o,this.settingsStorage=n,this.themes=["indigo-pink","deeppurple-amber","pink-bluegrey","purple-green"],this.settingsForm=t.group({openNewTab:!1,showImages:!1,theme:"indigo-pink",notifyNewReleases:!1}),this.settingsForm.patchValue(n.settings)}reset(){this.dialog.openConfirmDialog({title:"Reset settings?",msg:"Are you sure you want to reset the settings?"}).afterClosed().subscribe(e=>{"ok"===e&&(this.settingsStorage.clearSettings(),this.shared.openSnackBar({msg:"Settings successfully reset"}))})}save(){this.settingsStorage.setSettings(this.settingsForm.value),this.shared.openSnackBar({msg:"Settings saved",action:"Reload"}).onAction().subscribe(()=>{window.location.reload()})}}return e.\u0275fac=function(t){return new(t||e)(h.Nb(p.a),h.Nb(a.c),h.Nb(g.b),h.Nb(d.a))},e.\u0275cmp=h.Hb({type:e,selectors:[["app-settings"]],decls:28,vars:3,consts:[[1,"app-content"],["fxLayout","column"],["fxLayout","column",3,"formGroup"],[1,"mat-subheader"],["formControlName","openNewTab",1,"checkbox"],["formControlName","showImages",1,"checkbox"],["color","accent"],["formControlName","theme"],[3,"value",4,"ngFor","ngForOf"],["formControlName","notifyNewReleases",1,"checkbox"],["align","end"],["mat-button","","color","warn",3,"click"],["mat-button","","color","primary",3,"disabled","click"],[3,"value"]],template:function(e,t){1&e&&(h.Sb(0,"div",0),h.Sb(1,"mat-card"),h.Sb(2,"mat-card-title"),h.Ec(3,"Settings"),h.Rb(),h.Sb(4,"mat-card-content",1),h.Sb(5,"form",2),h.Sb(6,"h3",3),h.Ec(7,"General"),h.Rb(),h.Sb(8,"mat-checkbox",4),h.Ec(9,"Open posts in a new tab"),h.Rb(),h.Sb(10,"mat-checkbox",5),h.Ec(11,"Show images"),h.Rb(),h.Sb(12,"mat-form-field",6),h.Sb(13,"mat-label"),h.Ec(14,"Theme"),h.Rb(),h.Sb(15,"mat-select",7),h.Cc(16,R,2,2,"mat-option",8),h.Rb(),h.Sb(17,"mat-hint"),h.Ec(18,"Changes will be made on reload."),h.Rb(),h.Rb(),h.Sb(19,"h3",3),h.Ec(20,"Releases"),h.Rb(),h.Sb(21,"mat-checkbox",9),h.Ec(22,"Notify when new releases are out"),h.Rb(),h.Rb(),h.Rb(),h.Sb(23,"mat-card-actions",10),h.Sb(24,"button",11),h.ac("click",(function(){return t.reset()})),h.Ec(25,"Reset"),h.Rb(),h.Sb(26,"button",12),h.ac("click",(function(){return t.save()})),h.Ec(27,"Save"),h.Rb(),h.Rb(),h.Rb(),h.Rb()),2&e&&(h.Bb(5),h.lc("formGroup",t.settingsForm),h.Bb(11),h.lc("ngForOf",t.themes),h.Bb(10),h.lc("disabled",t.settingsForm.invalid))},directives:[r.a,r.h,r.c,f.b,a.r,a.k,a.e,i.a,a.j,a.d,b.d,b.h,m.a,n.l,b.g,r.b,c.b,S.i],encapsulation:2}),e})()}];let k=(()=>{class e{}return e.\u0275mod=h.Lb({type:e}),e.\u0275inj=h.Kb({factory:function(t){return new(t||e)},imports:[[u.f.forChild(w)],u.f]}),e})();const y=[c.c,r.f,i.b,b.f,l.b,m.b];let E=(()=>{class e{}return e.\u0275mod=h.Lb({type:e}),e.\u0275inj=h.Kb({factory:function(t){return new(t||e)},imports:[[n.c,a.o,s.a,y,k]]}),e})()}}]);