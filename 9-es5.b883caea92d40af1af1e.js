!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{wbhx:function(t,a,c){"use strict";c.r(a),c.d(a,"SettingsModule",function(){return _});var i=c("ofXK"),o=c("Gtq9"),l=c("tyNb"),s=c("l7P3"),r=c("5A3p"),b=c("daY/"),g=c("KgoS"),m=c("fXoL"),u=c("NFeN"),f=c("6NWb"),d=c("kmnG"),h=c("d3UM"),p=c("3Pt+"),v=c("1jcm"),T=c("FKr1"),C=c("Qu3c"),S=c("sYmb");function y(e,n){if(1&e&&(m.Tb(0,"mat-option",21),m.Ac(1),m.Sb()),2&e){var t=n.$implicit,a=m.ec().$implicit;m.jc("value",a.value)("title",t!==a.label?t:""),m.Cb(1),m.Cc(" ",a.label," ")}}var k=function(e){return[e]};function A(e,n){if(1&e&&(m.Rb(0),m.yc(1,y,2,3,"mat-option",20),m.fc(2,"translate"),m.Qb()),2&e){var t=n.$implicit;m.Cb(1),m.jc("ngForOf",m.mc(3,k,m.gc(2,1,"anms.settings.general.language."+t.value)))}}function j(e,n){if(1&e&&(m.Tb(0,"mat-option",22),m.Ac(1),m.fc(2,"translate"),m.Sb()),2&e){var t=n.$implicit;m.jc("value",t.value),m.Cb(1),m.Cc(" ",m.gc(2,2,"anms.settings.themes."+t.label)," ")}}function M(e,n){1&e&&m.Pb(0,"mat-slide-toggle",23)}function O(e,n){if(1&e){var t=m.Ub();m.Tb(0,"mat-slide-toggle",11),m.ac("change",function(e){return m.rc(t),m.ec(2).onPageAnimationsToggle(e)}),m.Sb()}if(2&e){var a=m.ec().ngIf;m.jc("checked",a.pageAnimations)}}function P(e,n){if(1&e){var t=m.Ub();m.Rb(0),m.Tb(1,"div",1),m.Tb(2,"div",4),m.Tb(3,"h2"),m.Ac(4),m.fc(5,"translate"),m.Sb(),m.Tb(6,"div",5),m.Tb(7,"mat-icon",6),m.Pb(8,"fa-icon",7),m.Sb(),m.Tb(9,"mat-form-field"),m.Tb(10,"mat-select",8),m.ac("selectionChange",function(e){return m.rc(t),m.ec().onLanguageSelect(e)}),m.fc(11,"translate"),m.yc(12,A,3,5,"ng-container",9),m.Sb(),m.Sb(),m.Sb(),m.Tb(13,"div",5),m.Tb(14,"mat-icon",6),m.Pb(15,"fa-icon",10),m.Sb(),m.Tb(16,"mat-placeholder"),m.Ac(17),m.fc(18,"translate"),m.Sb(),m.Tb(19,"mat-slide-toggle",11),m.ac("change",function(e){return m.rc(t),m.ec().onStickyHeaderToggle(e)}),m.Sb(),m.Sb(),m.Sb(),m.Sb(),m.Tb(20,"div",1),m.Tb(21,"div",4),m.Tb(22,"h2"),m.Ac(23),m.fc(24,"translate"),m.Sb(),m.Tb(25,"div",5),m.Tb(26,"mat-icon",6),m.Pb(27,"fa-icon",12),m.Sb(),m.Tb(28,"mat-form-field"),m.Tb(29,"mat-select",13),m.ac("selectionChange",function(e){return m.rc(t),m.ec().onThemeSelect(e)}),m.fc(30,"translate"),m.yc(31,j,3,4,"mat-option",14),m.Sb(),m.Sb(),m.Sb(),m.Tb(32,"div",5),m.Tb(33,"mat-icon",6),m.Pb(34,"fa-icon",15),m.Sb(),m.Tb(35,"mat-placeholder"),m.Ac(36),m.fc(37,"translate"),m.Sb(),m.Tb(38,"mat-slide-toggle",11),m.ac("change",function(e){return m.rc(t),m.ec().onAutoNightModeToggle(e)}),m.Sb(),m.Sb(),m.Sb(),m.Tb(39,"div",4),m.Tb(40,"h2"),m.Ac(41),m.fc(42,"translate"),m.Sb(),m.Tb(43,"div",5),m.Tb(44,"mat-icon",6),m.Tb(45,"mat-icon",6),m.Pb(46,"fa-icon",16),m.Sb(),m.Sb(),m.Tb(47,"mat-placeholder"),m.Ac(48),m.fc(49,"translate"),m.Sb(),m.yc(50,M,1,0,"mat-slide-toggle",17),m.yc(51,O,1,1,"mat-slide-toggle",18),m.Sb(),m.Tb(52,"div",5),m.Tb(53,"mat-icon",6),m.Pb(54,"fa-icon",19),m.Sb(),m.Tb(55,"mat-placeholder"),m.Ac(56),m.fc(57,"translate"),m.Sb(),m.Tb(58,"mat-slide-toggle",11),m.ac("change",function(e){return m.rc(t),m.ec().onElementsAnimationsToggle(e)}),m.Sb(),m.Sb(),m.Sb(),m.Sb(),m.Qb()}if(2&e){var a=n.ngIf,c=m.ec();m.Cb(2),m.jc("ngClass",c.routeAnimationsElements),m.Cb(2),m.Bc(m.gc(5,21,"anms.settings.general.title")),m.Cb(6),m.jc("placeholder",m.gc(11,23,"anms.settings.general.placeholder"))("ngModel",a.language),m.Cb(2),m.jc("ngForOf",c.languages),m.Cb(5),m.Cc("",m.gc(18,25,"anms.settings.themes.sticky-header")," "),m.Cb(2),m.jc("checked",a.stickyHeader),m.Cb(2),m.jc("ngClass",c.routeAnimationsElements),m.Cb(2),m.Bc(m.gc(24,27,"anms.settings.themes.title")),m.Cb(6),m.jc("placeholder",m.gc(30,29,"anms.settings.themes.placeholder"))("ngModel",a.theme),m.Cb(2),m.jc("ngForOf",c.themes),m.Cb(5),m.Cc("",m.gc(37,31,"anms.settings.themes.night-mode")," "),m.Cb(2),m.jc("checked",a.autoNightMode),m.Cb(1),m.jc("ngClass",c.routeAnimationsElements),m.Cb(2),m.Bc(m.gc(42,33,"anms.settings.animations.title")),m.Cb(7),m.Cc("",m.gc(49,35,"anms.settings.animations.page")," "),m.Cb(2),m.jc("ngIf",a.pageAnimationsDisabled),m.Cb(1),m.jc("ngIf",!a.pageAnimationsDisabled),m.Cb(5),m.Cc("",m.gc(57,37,"anms.settings.animations.elements")," "),m.Cb(2),m.jc("checked",a.elementsAnimations)}}var E,w,x,F=[{path:"",component:(E=function(){function t(n){e(this,t),this.store=n,this.routeAnimationsElements=r.e,this.themes=[{value:"DEFAULT-THEME",label:"blue"},{value:"LIGHT-THEME",label:"light"},{value:"NATURE-THEME",label:"nature"},{value:"BLACK-THEME",label:"dark"}],this.languages=[{value:"en",label:"English"},{value:"de",label:"Deutsch"},{value:"sk",label:"Sloven\u010dina"},{value:"fr",label:"Fran\xe7ais"},{value:"es",label:"Espa\xf1ol"},{value:"pt-br",label:"Portugu\xeas"},{value:"zh-cn",label:"\u7b80\u4f53\u4e2d\u6587"},{value:"he",label:"\u05e2\u05d1\u05e8\u05d9\u05ea"}]}var a,c,i;return a=t,(c=[{key:"ngOnInit",value:function(){this.settings$=this.store.pipe(Object(s.t)(g.d))}},{key:"onLanguageSelect",value:function(e){var n=e.value;this.store.dispatch(Object(b.f)({language:n}))}},{key:"onThemeSelect",value:function(e){var n=e.value;this.store.dispatch(Object(b.h)({theme:n}))}},{key:"onAutoNightModeToggle",value:function(e){var n=e.checked;this.store.dispatch(Object(b.d)({autoNightMode:n}))}},{key:"onStickyHeaderToggle",value:function(e){var n=e.checked;this.store.dispatch(Object(b.g)({stickyHeader:n}))}},{key:"onPageAnimationsToggle",value:function(e){var n=e.checked;this.store.dispatch(Object(b.b)({pageAnimations:n}))}},{key:"onElementsAnimationsToggle",value:function(e){var n=e.checked;this.store.dispatch(Object(b.a)({elementsAnimations:n}))}}])&&n(a.prototype,c),i&&n(a,i),t}(),E.\u0275fac=function(e){return new(e||E)(m.Ob(s.h))},E.\u0275cmp=m.Ib({type:E,selectors:[["anms-settings"]],decls:9,vars:6,consts:[[1,"container"],[1,"row"],[1,"col-sm-12"],[4,"ngIf"],[1,"col-md-6","group",3,"ngClass"],[1,"icon-form-field"],["color","accent"],["icon","language","color","accent"],["name","language",3,"placeholder","ngModel","selectionChange"],[4,"ngFor","ngForOf"],["icon","bars","color","accent"],[3,"checked","change"],["icon","paint-brush","color","accent"],["name","themes",3,"placeholder","ngModel","selectionChange"],[3,"value",4,"ngFor","ngForOf"],["icon","lightbulb","color","accent"],["icon","window-maximize"],["matTooltip","Sorry, this feature is disabled in IE, EDGE and Safari","matTooltipPosition","before","disabled","",4,"ngIf"],[3,"checked","change",4,"ngIf"],["icon","stream","color","accent"],[3,"value","title",4,"ngFor","ngForOf"],[3,"value","title"],[3,"value"],["matTooltip","Sorry, this feature is disabled in IE, EDGE and Safari","matTooltipPosition","before","disabled",""]],template:function(e,n){1&e&&(m.Tb(0,"div",0),m.Tb(1,"div",1),m.Tb(2,"div",2),m.Tb(3,"h1"),m.Ac(4),m.fc(5,"translate"),m.Sb(),m.Sb(),m.Sb(),m.Pb(6,"br"),m.yc(7,P,59,39,"ng-container",3),m.fc(8,"async"),m.Sb()),2&e&&(m.Cb(4),m.Bc(m.gc(5,2,"anms.settings.title")),m.Cb(3),m.jc("ngIf",m.gc(8,4,n.settings$)))},directives:[i.k,i.i,u.a,f.a,d.c,h.a,p.m,p.p,i.j,d.g,v.a,T.k,C.a],pipes:[S.c,i.b],styles:[".container[_ngcontent-%COMP%]{margin-top:20px}h1[_ngcontent-%COMP%]{margin:0 0 20px}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{text-transform:uppercase}h2[_ngcontent-%COMP%]{margin:0 0 10px}.group[_ngcontent-%COMP%]{margin:0 0 40px}.icon-form-field[_ngcontent-%COMP%]{position:relative;display:flex;height:65.5px;align-items:center}.icon-form-field[_ngcontent-%COMP%]   mat-placeholder[_ngcontent-%COMP%]{flex:2 1 auto}mat-icon[_ngcontent-%COMP%]{margin:0 6px 6px 0;font-size:20px}mat-form-field[_ngcontent-%COMP%]{flex:1 0 auto}"],changeDetection:0}),E),data:{title:"anms.menu.settings"}}],I=((x=function n(){e(this,n)}).\u0275mod=m.Mb({type:x}),x.\u0275inj=m.Lb({factory:function(e){return new(e||x)},imports:[[l.k.forChild(F)],l.k]}),x),_=((w=function n(){e(this,n)}).\u0275mod=m.Mb({type:w}),w.\u0275inj=m.Lb({factory:function(e){return new(e||w)},imports:[[i.c,o.a,I]]}),w)}}])}();