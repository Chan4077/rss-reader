function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{dGa1:function(e,n,t){"use strict";t.r(n),t.d(n,"ReleaseNotesModule",(function(){return M}));var r=t("2kYt"),c=t("S17y"),s=t("DgXe"),i=t("sEIs"),o=t("EM62"),a=t("+EvI"),l=t("AytR");function b(e,n){if(1&e&&(o.Sb(0,"p"),o.Ec(1,"Release date: "),o.Sb(2,"em"),o.Sb(3,"time",8),o.Ec(4),o.fc(5,"date"),o.Rb(),o.Rb(),o.Rb()),2&e){var t=n.ngIf;o.Bb(3),o.lc("dateTime",t),o.Bb(1),o.Fc(o.hc(5,2,t,"short"))}}function f(e,n){if(1&e&&(o.Sb(0,"p"),o.Ec(1,"Released by: "),o.Sb(2,"em"),o.Ec(3),o.Rb(),o.Rb()),2&e){var t=n.ngIf;o.Bb(3),o.Fc(t)}}function u(e,n){if(1&e&&(o.Qb(0),o.Sb(1,"p"),o.Ec(2,"See this "),o.Sb(3,"a",9),o.Ec(4,"link"),o.Rb(),o.Ec(5," for the release notes."),o.Rb(),o.Pb()),2&e){var t=o.ec().ngIf;o.Bb(3),o.lc("href",t,o.xc)}}function g(e,n){if(1&e&&(o.Qb(0),o.Ob(1,"p",10),o.fc(2,"markdown"),o.Pb()),2&e){var t=o.ec(2).ngIf,r=o.ec(2);o.Bb(1),o.lc("innerHTML",o.gc(2,1,r.joinReleaseNotes(t.summary)),o.vc)}}function p(e,n){if(1&e&&(o.Qb(0),o.Sb(1,"p"),o.Ec(2,"See this "),o.Sb(3,"a",9),o.Ec(4,"link"),o.Rb(),o.Ec(5," for more info."),o.Rb(),o.Pb()),2&e){var t=o.ec(2).ngIf;o.Bb(3),o.lc("href",t.summary,o.xc)}}function R(e,n){if(1&e&&(o.Qb(0),o.Cc(1,g,3,3,"ng-container",7),o.Cc(2,p,6,1,"ng-container",7),o.Pb()),2&e){var t=o.ec().ngIf,r=o.ec(2);o.Bb(1),o.lc("ngIf",r.isArray(t.summary)),o.Bb(1),o.lc("ngIf",!r.isArray(t.summary)&&r.isUrl(t.summary))}}function h(e,n){if(1&e&&(o.Qb(0),o.Ob(1,"p",10),o.fc(2,"markdown"),o.Pb()),2&e){var t=o.ec().ngIf,r=o.ec(2);o.Bb(1),o.lc("innerHTML",o.gc(2,1,r.joinReleaseNotes(t)),o.vc)}}function v(e,n){if(1&e&&(o.Qb(0),o.Cc(1,u,6,1,"ng-container",7),o.Cc(2,R,3,2,"ng-container",7),o.Cc(3,h,3,3,"ng-container",7),o.Pb()),2&e){var t=n.ngIf,r=o.ec(2);o.Bb(1),o.lc("ngIf",r.isStr(t)&&r.isUrl(t)),o.Bb(1),o.lc("ngIf",!r.isStr(t)&&r.isReleaseNotesObj(t)),o.Bb(1),o.lc("ngIf",!r.isStr(t)&&r.isArray(t))}}function m(e,n){if(1&e&&(o.Qb(0),o.Cc(1,b,6,5,"p",7),o.Cc(2,f,4,1,"p",7),o.Cc(3,v,4,3,"ng-container",7),o.Pb()),2&e){var t=o.ec();o.Bb(1),o.lc("ngIf",t.getReleaseDate(t.releaseNotes.latestVersion)),o.Bb(1),o.lc("ngIf",t.getReleaseAuthor(t.releaseNotes.latestVersion)),o.Bb(1),o.lc("ngIf",t.getReleaseNote(t.releaseNotes.latestVersion))}}function y(e,n){1&e&&(o.Sb(0,"h2",11),o.Ec(1,"All release notes"),o.Rb())}function I(e,n){1&e&&(o.Sb(0,"mat-chip",15),o.Ec(1,"Latest"),o.Rb())}function d(e,n){if(1&e&&(o.Sb(0,"p"),o.Ec(1,"Release date: "),o.Sb(2,"em"),o.Sb(3,"time",8),o.Ec(4),o.fc(5,"date"),o.Rb(),o.Rb(),o.Rb()),2&e){var t=n.ngIf;o.Bb(3),o.lc("dateTime",t),o.Bb(1),o.Fc(o.hc(5,2,t,"short"))}}function S(e,n){if(1&e&&(o.Sb(0,"p"),o.Ec(1,"Released by: "),o.Sb(2,"em"),o.Ec(3),o.Rb(),o.Rb()),2&e){var t=n.ngIf;o.Bb(3),o.Fc(t)}}function B(e,n){if(1&e&&(o.Qb(0),o.Sb(1,"p"),o.Ec(2,"See this "),o.Sb(3,"a",9),o.Ec(4,"link"),o.Rb(),o.Ec(5," for the release notes."),o.Rb(),o.Pb()),2&e){var t=o.ec().ngIf;o.Bb(3),o.lc("href",t,o.xc)}}function C(e,n){if(1&e&&(o.Qb(0),o.Ob(1,"p",10),o.fc(2,"markdown"),o.Pb()),2&e){var t=o.ec(2).ngIf,r=o.ec(3);o.Bb(1),o.lc("innerHTML",o.gc(2,1,r.joinReleaseNotes(t.summary)),o.vc)}}function E(e,n){if(1&e&&(o.Qb(0),o.Sb(1,"p"),o.Ec(2,"See this "),o.Sb(3,"a",9),o.Ec(4,"link"),o.Rb(),o.Ec(5," for more info."),o.Rb(),o.Pb()),2&e){var t=o.ec(2).ngIf;o.Bb(3),o.lc("href",t.summary,o.xc)}}function N(e,n){if(1&e&&(o.Qb(0),o.Cc(1,C,3,3,"ng-container",7),o.Cc(2,E,6,1,"ng-container",7),o.Pb()),2&e){var t=o.ec().ngIf,r=o.ec(3);o.Bb(1),o.lc("ngIf",r.isArray(t.summary)),o.Bb(1),o.lc("ngIf",!r.isArray(t.summary)&&r.isUrl(t.summary))}}function k(e,n){if(1&e&&(o.Qb(0),o.Ob(1,"p",10),o.fc(2,"markdown"),o.Pb()),2&e){var t=o.ec().ngIf,r=o.ec(3);o.Bb(1),o.lc("innerHTML",o.gc(2,1,r.joinReleaseNotes(t)),o.vc)}}function w(e,n){if(1&e&&(o.Qb(0),o.Cc(1,B,6,1,"ng-container",7),o.Cc(2,N,3,2,"ng-container",7),o.Cc(3,k,3,3,"ng-container",7),o.Pb()),2&e){var t=n.ngIf,r=o.ec(3);o.Bb(1),o.lc("ngIf",r.isStr(t)&&r.isUrl(t)),o.Bb(1),o.lc("ngIf",!r.isStr(t)&&r.isReleaseNotesObj(t)),o.Bb(1),o.lc("ngIf",!r.isStr(t)&&r.isArray(t))}}function P(e,n){if(1&e&&(o.Qb(0),o.Sb(1,"h3",13),o.Ec(2),o.Cc(3,I,2,0,"mat-chip",14),o.Rb(),o.Cc(4,d,6,5,"p",7),o.Cc(5,S,4,1,"p",7),o.Cc(6,w,4,3,"ng-container",7),o.Pb()),2&e){var t=n.$implicit,r=o.ec(2);o.Bb(1),o.nc("id","version-",t,""),o.Bb(1),o.Gc(" Version ",t," "),o.Bb(1),o.lc("ngIf",t===r.releaseNotes.latestVersion),o.Bb(1),o.lc("ngIf",r.getReleaseDate(t)),o.Bb(1),o.lc("ngIf",r.getReleaseAuthor(t)),o.Bb(1),o.lc("ngIf",r.getReleaseNote(t))}}function j(e,n){if(1&e&&(o.Qb(0),o.Cc(1,P,7,6,"ng-container",12),o.Pb()),2&e){var t=o.ec();o.Bb(1),o.lc("ngForOf",t.versions.slice().reverse())}}function A(e,n){1&e&&(o.Sb(0,"div",16),o.Sb(1,"h2",17),o.Ec(2,"No release notes available!"),o.Rb(),o.Sb(3,"p"),o.Ec(4,"Are you connected to the internet?"),o.Rb(),o.Rb())}var O,Q,G,_=new o.q("Release notes JSON file",{providedIn:"root",factory:function(){return a}}),T=new o.q("Custom Git repository"),L=[{path:"",component:(O=function(){function e(n,t){_classCallCheck(this,e),this.releaseNotesJson=n,this.customGitRepo=t}return _createClass(e,[{key:"createGitRepoUrl",value:function(e){return"object"==typeof e?"".concat(e.host,"/").concat(e.username,"/").concat(e.repo):e}},{key:"getReleaseNote",value:function(e){return this.releaseNotes.releases[e].releaseNotes}},{key:"getReleaseDate",value:function(e){return this.releaseNotes.releases[e].releaseDate}},{key:"getReleaseAuthor",value:function(e){return this.releaseNotes.releases[e].releaseAuthor}},{key:"getReleaseInfo",value:function(e){return this.releaseNotes.releases[e]}},{key:"joinReleaseNotes",value:function(e){return e.join("\n")}},{key:"isArray",value:function(e){return Array.isArray(e)}},{key:"isUrl",value:function(e){return/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(e)}},{key:"isStr",value:function(e){return"string"==typeof e}},{key:"isObj",value:function(e){return"object"==typeof e}},{key:"isReleaseNotesObj",value:function(e){return this.isObj(e)}},{key:"releaseNotes",get:function(){return this.releaseNotesJson}},{key:"versions",get:function(){return Object.keys(this.releaseNotes.releases)}},{key:"gitRepo",get:function(){return this.createGitRepoUrl(this.customGitRepo?this.customGitRepo:this.releaseNotes.gitRepo?this.releaseNotes.gitRepo:l.a.gitRepoDefaults)}}]),e}(),O.\u0275fac=function(e){return new(e||O)(o.Nb(_),o.Nb(T,8))},O.\u0275cmp=o.Hb({type:O,selectors:[["app-release-notes"]],decls:13,vars:7,consts:[[1,"app-content"],["id","app-header"],["id","current-version"],["id","current-version-release-notes"],[4,"ngIf","ngIfElse"],["id","all-release-notes",4,"ngIf"],["noReleaseNotes",""],[4,"ngIf"],[3,"dateTime"],[3,"href"],[3,"innerHTML"],["id","all-release-notes"],[4,"ngFor","ngForOf"],[3,"id"],["color","primary",4,"ngIf"],["color","primary"],[1,"center"],["id","no-release-notes-available"]],template:function(e,n){if(1&e&&(o.Sb(0,"div",0),o.Sb(1,"h1",1),o.Ec(2,"Release notes"),o.Rb(),o.Sb(3,"h2",2),o.Ec(4),o.Rb(),o.Sb(5,"h3",3),o.Ec(6),o.Rb(),o.Cc(7,m,4,3,"ng-container",4),o.Ob(8,"hr"),o.Cc(9,y,2,0,"h2",5),o.Cc(10,j,2,1,"ng-container",4),o.Rb(),o.Cc(11,A,5,0,"ng-template",null,6,o.Dc)),2&e){var t=o.sc(12);o.Bb(4),o.Gc("Current version: ",n.releaseNotes.latestVersion,""),o.Bb(2),o.Gc("Release notes for ",n.releaseNotes.latestVersion,""),o.Bb(1),o.lc("ngIf",n.versions)("ngIfElse",t),o.Bb(2),o.lc("ngIf",(null==n.versions?null:n.versions.length)>0),o.Bb(1),o.lc("ngIf",n.versions)("ngIfElse",t)}},directives:[r.m,r.l,c.a],pipes:[r.e,s.b],encapsulation:2}),O)}],D=((Q=function e(){_classCallCheck(this,e)}).\u0275mod=o.Lb({type:Q}),Q.\u0275inj=o.Kb({factory:function(e){return new(e||Q)},imports:[[i.f.forChild(L)],i.f]}),Q),F=[c.c],M=((G=function e(){_classCallCheck(this,e)}).\u0275mod=o.Lb({type:G}),G.\u0275inj=o.Kb({factory:function(e){return new(e||G)},imports:[[r.c,s.a.forChild(),F,D]]}),G)}}]);