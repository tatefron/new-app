(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{wbhx:function(e,t,n){"use strict";n.r(t),n.d(t,"SettingsModule",function(){return y});var a=n("ofXK"),c=n("Gtq9"),i=n("tyNb"),o=n("l7P3"),s=n("5A3p"),l=n("daY/"),b=n("KgoS"),g=n("fXoL"),r=n("NFeN"),m=n("6NWb"),d=n("kmnG"),h=n("d3UM"),u=n("3Pt+"),f=n("1jcm"),p=n("FKr1"),T=n("Qu3c"),S=n("sYmb");function C(e,t){if(1&e&&(g.Tb(0,"mat-option",21),g.Ac(1),g.Sb()),2&e){const e=t.$implicit,n=g.ec().$implicit;g.jc("value",n.value)("title",e!==n.label?e:""),g.Cb(1),g.Cc(" ",n.label," ")}}const v=function(e){return[e]};function A(e,t){if(1&e&&(g.Rb(0),g.yc(1,C,2,3,"mat-option",20),g.fc(2,"translate"),g.Qb()),2&e){const e=t.$implicit;g.Cb(1),g.jc("ngForOf",g.mc(3,v,g.gc(2,1,"anms.settings.general.language."+e.value)))}}function j(e,t){if(1&e&&(g.Tb(0,"mat-option",22),g.Ac(1),g.fc(2,"translate"),g.Sb()),2&e){const e=t.$implicit;g.jc("value",e.value),g.Cb(1),g.Cc(" ",g.gc(2,2,"anms.settings.themes."+e.label)," ")}}function M(e,t){1&e&&g.Pb(0,"mat-slide-toggle",23)}function O(e,t){if(1&e){const e=g.Ub();g.Tb(0,"mat-slide-toggle",11),g.ac("change",function(t){return g.rc(e),g.ec(2).onPageAnimationsToggle(t)}),g.Sb()}if(2&e){const e=g.ec().ngIf;g.jc("checked",e.pageAnimations)}}function P(e,t){if(1&e){const e=g.Ub();g.Rb(0),g.Tb(1,"div",1),g.Tb(2,"div",4),g.Tb(3,"h2"),g.Ac(4),g.fc(5,"translate"),g.Sb(),g.Tb(6,"div",5),g.Tb(7,"mat-icon",6),g.Pb(8,"fa-icon",7),g.Sb(),g.Tb(9,"mat-form-field"),g.Tb(10,"mat-select",8),g.ac("selectionChange",function(t){return g.rc(e),g.ec().onLanguageSelect(t)}),g.fc(11,"translate"),g.yc(12,A,3,5,"ng-container",9),g.Sb(),g.Sb(),g.Sb(),g.Tb(13,"div",5),g.Tb(14,"mat-icon",6),g.Pb(15,"fa-icon",10),g.Sb(),g.Tb(16,"mat-placeholder"),g.Ac(17),g.fc(18,"translate"),g.Sb(),g.Tb(19,"mat-slide-toggle",11),g.ac("change",function(t){return g.rc(e),g.ec().onStickyHeaderToggle(t)}),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Tb(20,"div",1),g.Tb(21,"div",4),g.Tb(22,"h2"),g.Ac(23),g.fc(24,"translate"),g.Sb(),g.Tb(25,"div",5),g.Tb(26,"mat-icon",6),g.Pb(27,"fa-icon",12),g.Sb(),g.Tb(28,"mat-form-field"),g.Tb(29,"mat-select",13),g.ac("selectionChange",function(t){return g.rc(e),g.ec().onThemeSelect(t)}),g.fc(30,"translate"),g.yc(31,j,3,4,"mat-option",14),g.Sb(),g.Sb(),g.Sb(),g.Tb(32,"div",5),g.Tb(33,"mat-icon",6),g.Pb(34,"fa-icon",15),g.Sb(),g.Tb(35,"mat-placeholder"),g.Ac(36),g.fc(37,"translate"),g.Sb(),g.Tb(38,"mat-slide-toggle",11),g.ac("change",function(t){return g.rc(e),g.ec().onAutoNightModeToggle(t)}),g.Sb(),g.Sb(),g.Sb(),g.Tb(39,"div",4),g.Tb(40,"h2"),g.Ac(41),g.fc(42,"translate"),g.Sb(),g.Tb(43,"div",5),g.Tb(44,"mat-icon",6),g.Tb(45,"mat-icon",6),g.Pb(46,"fa-icon",16),g.Sb(),g.Sb(),g.Tb(47,"mat-placeholder"),g.Ac(48),g.fc(49,"translate"),g.Sb(),g.yc(50,M,1,0,"mat-slide-toggle",17),g.yc(51,O,1,1,"mat-slide-toggle",18),g.Sb(),g.Tb(52,"div",5),g.Tb(53,"mat-icon",6),g.Pb(54,"fa-icon",19),g.Sb(),g.Tb(55,"mat-placeholder"),g.Ac(56),g.fc(57,"translate"),g.Sb(),g.Tb(58,"mat-slide-toggle",11),g.ac("change",function(t){return g.rc(e),g.ec().onElementsAnimationsToggle(t)}),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Qb()}if(2&e){const e=t.ngIf,n=g.ec();g.Cb(2),g.jc("ngClass",n.routeAnimationsElements),g.Cb(2),g.Bc(g.gc(5,21,"anms.settings.general.title")),g.Cb(6),g.jc("placeholder",g.gc(11,23,"anms.settings.general.placeholder"))("ngModel",e.language),g.Cb(2),g.jc("ngForOf",n.languages),g.Cb(5),g.Cc("",g.gc(18,25,"anms.settings.themes.sticky-header")," "),g.Cb(2),g.jc("checked",e.stickyHeader),g.Cb(2),g.jc("ngClass",n.routeAnimationsElements),g.Cb(2),g.Bc(g.gc(24,27,"anms.settings.themes.title")),g.Cb(6),g.jc("placeholder",g.gc(30,29,"anms.settings.themes.placeholder"))("ngModel",e.theme),g.Cb(2),g.jc("ngForOf",n.themes),g.Cb(5),g.Cc("",g.gc(37,31,"anms.settings.themes.night-mode")," "),g.Cb(2),g.jc("checked",e.autoNightMode),g.Cb(1),g.jc("ngClass",n.routeAnimationsElements),g.Cb(2),g.Bc(g.gc(42,33,"anms.settings.animations.title")),g.Cb(7),g.Cc("",g.gc(49,35,"anms.settings.animations.page")," "),g.Cb(2),g.jc("ngIf",e.pageAnimationsDisabled),g.Cb(1),g.jc("ngIf",!e.pageAnimationsDisabled),g.Cb(5),g.Cc("",g.gc(57,37,"anms.settings.animations.elements")," "),g.Cb(2),g.jc("checked",e.elementsAnimations)}}const k=[{path:"",component:(()=>{class e{constructor(e){this.store=e,this.routeAnimationsElements=s.e,this.themes=[{value:"DEFAULT-THEME",label:"blue"},{value:"LIGHT-THEME",label:"light"},{value:"NATURE-THEME",label:"nature"},{value:"BLACK-THEME",label:"dark"}],this.languages=[{value:"en",label:"English"},{value:"de",label:"Deutsch"},{value:"sk",label:"Sloven\u010dina"},{value:"fr",label:"Fran\xe7ais"},{value:"es",label:"Espa\xf1ol"},{value:"pt-br",label:"Portugu\xeas"},{value:"zh-cn",label:"\u7b80\u4f53\u4e2d\u6587"},{value:"he",label:"\u05e2\u05d1\u05e8\u05d9\u05ea"}]}ngOnInit(){this.settings$=this.store.pipe(Object(o.t)(b.d))}onLanguageSelect({value:e}){this.store.dispatch(Object(l.f)({language:e}))}onThemeSelect({value:e}){this.store.dispatch(Object(l.h)({theme:e}))}onAutoNightModeToggle({checked:e}){this.store.dispatch(Object(l.d)({autoNightMode:e}))}onStickyHeaderToggle({checked:e}){this.store.dispatch(Object(l.g)({stickyHeader:e}))}onPageAnimationsToggle({checked:e}){this.store.dispatch(Object(l.b)({pageAnimations:e}))}onElementsAnimationsToggle({checked:e}){this.store.dispatch(Object(l.a)({elementsAnimations:e}))}}return e.\u0275fac=function(t){return new(t||e)(g.Ob(o.h))},e.\u0275cmp=g.Ib({type:e,selectors:[["anms-settings"]],decls:9,vars:6,consts:[[1,"container"],[1,"row"],[1,"col-sm-12"],[4,"ngIf"],[1,"col-md-6","group",3,"ngClass"],[1,"icon-form-field"],["color","accent"],["icon","language","color","accent"],["name","language",3,"placeholder","ngModel","selectionChange"],[4,"ngFor","ngForOf"],["icon","bars","color","accent"],[3,"checked","change"],["icon","paint-brush","color","accent"],["name","themes",3,"placeholder","ngModel","selectionChange"],[3,"value",4,"ngFor","ngForOf"],["icon","lightbulb","color","accent"],["icon","window-maximize"],["matTooltip","Sorry, this feature is disabled in IE, EDGE and Safari","matTooltipPosition","before","disabled","",4,"ngIf"],[3,"checked","change",4,"ngIf"],["icon","stream","color","accent"],[3,"value","title",4,"ngFor","ngForOf"],[3,"value","title"],[3,"value"],["matTooltip","Sorry, this feature is disabled in IE, EDGE and Safari","matTooltipPosition","before","disabled",""]],template:function(e,t){1&e&&(g.Tb(0,"div",0),g.Tb(1,"div",1),g.Tb(2,"div",2),g.Tb(3,"h1"),g.Ac(4),g.fc(5,"translate"),g.Sb(),g.Sb(),g.Sb(),g.Pb(6,"br"),g.yc(7,P,59,39,"ng-container",3),g.fc(8,"async"),g.Sb()),2&e&&(g.Cb(4),g.Bc(g.gc(5,2,"anms.settings.title")),g.Cb(3),g.jc("ngIf",g.gc(8,4,t.settings$)))},directives:[a.k,a.i,r.a,m.a,d.c,h.a,u.m,u.p,a.j,d.g,f.a,p.k,T.a],pipes:[S.c,a.b],styles:[".container[_ngcontent-%COMP%]{margin-top:20px}h1[_ngcontent-%COMP%]{margin:0 0 20px}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{text-transform:uppercase}h2[_ngcontent-%COMP%]{margin:0 0 10px}.group[_ngcontent-%COMP%]{margin:0 0 40px}.icon-form-field[_ngcontent-%COMP%]{position:relative;display:flex;height:65.5px;align-items:center}.icon-form-field[_ngcontent-%COMP%]   mat-placeholder[_ngcontent-%COMP%]{flex:2 1 auto}mat-icon[_ngcontent-%COMP%]{margin:0 6px 6px 0;font-size:20px}mat-form-field[_ngcontent-%COMP%]{flex:1 0 auto}"],changeDetection:0}),e})(),data:{title:"anms.menu.settings"}}];let E=(()=>{class e{}return e.\u0275mod=g.Mb({type:e}),e.\u0275inj=g.Lb({factory:function(t){return new(t||e)},imports:[[i.k.forChild(k)],i.k]}),e})(),y=(()=>{class e{}return e.\u0275mod=g.Mb({type:e}),e.\u0275inj=g.Lb({factory:function(t){return new(t||e)},imports:[[a.c,c.a,E]]}),e})()}}]);