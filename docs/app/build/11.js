webpackJsonp([11],{712:function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),o.d(n,"BookmarkPopoverModuleNgFactory",function(){return P});var e=o(1),i=o(721),l=o(391),r=o(392),u=o(393),s=o(394),a=o(395),c=o(396),p=o(397),f=o(398),h=o(399),m=o(725),_=o(729),d=o(18),v=o(28),b=o(88),g=o(89),y=o(91),w=o(90),T=o(39),x=o(130),C=o(199),k=o(34),O=o(720),j=o(716),E=o(63),S=o(723),P=e.W(i.a,[],function(t){return e._10([e._11(512,e.i,e.S,[[8,[l.a,r.a,u.a,s.a,a.a,c.a,p.a,f.a,h.a,m.a,_.a]],[3,e.i],e.s]),e._11(4608,d.l,d.k,[e.r,[2,d.t]]),e._11(4608,v.r,v.r,[]),e._11(4608,v.d,v.d,[]),e._11(4608,b.b,b.a,[]),e._11(4608,g.a,g.b,[]),e._11(4608,y.b,y.a,[]),e._11(4608,w.b,w.a,[]),e._11(4608,T.a,T.a,[x.a,b.b,g.a,y.b,w.b,T.b,T.c]),e._11(512,d.b,d.b,[]),e._11(512,v.p,v.p,[]),e._11(512,v.g,v.g,[]),e._11(512,v.n,v.n,[]),e._11(512,C.a,C.a,[]),e._11(512,C.b,C.b,[]),e._11(512,k.a,k.a,[]),e._11(512,O.a,O.a,[]),e._11(512,j.a,j.a,[]),e._11(512,j.f,j.f,[]),e._11(512,j.c,j.c,[]),e._11(512,j.b,j.b,[]),e._11(512,j.d,j.d,[]),e._11(512,j.e,j.e,[]),e._11(512,i.a,i.a,[]),e._11(256,E.a,S.a,[]),e._11(256,T.c,void 0,[]),e._11(256,T.b,void 0,[])])})},716:function(t,n,o){"use strict";function e(t){return void 0===t}function i(t){return"string"==typeof t}function l(t,n){var o=n.split("."),i=o.shift();return o.reduce(function(t,n){return e(t)||e(t[n])?void 0:t[n]},t[i||""])}o.d(n,"e",function(){return m}),o.d(n,"a",function(){return s}),o.d(n,"g",function(){return u}),o.d(n,"d",function(){return a}),o.d(n,"f",function(){return p}),o.d(n,"h",function(){return c}),o.d(n,"c",function(){return f}),o.d(n,"b",function(){return h});var r=o(0),u=function(){function t(){}return t.prototype.transform=function(n,o){if(!Array.isArray(n))return n;var e=Object(r.__spread)(n);if(Array.isArray(o))return e.sort(function(n,e){for(var i=o.length,l=0;l<i;++l){var u=Object(r.__read)(t.extractFromConfig(o[l]),2),s=t.orderCompare(u[0],u[1],n,e);if(0!==s)return s}return 0});if(i(o)){var l=Object(r.__read)(t.extractFromConfig(o),3),u=l[0],s=l[1];if(1===o.length)switch(l[2]){case"+":return e.sort(t.simpleSort.bind(this));case"-":return e.sort(t.simpleSort.bind(this)).reverse()}return e.sort(t.orderCompare.bind(this,u,s))}return e.sort(t.simpleSort.bind(this))},t.simpleSort=function(t,n){return i(t)&&i(n)?t.toLowerCase().localeCompare(n.toLowerCase()):t-n},t.orderCompare=function(t,n,o,r){var u=l(o,t),s=l(r,t);if(u===s)return 0;if(e(u)||""===u)return 1;if(e(s)||""===s)return-1;if(i(u)&&i(s)){var a=u.toLowerCase().localeCompare(s.toLowerCase());return n?a:-a}return n?u-s:s-u},t.extractFromConfig=function(t){var n=t.substr(0,1);return[t.replace(/^[-+]/,""),"-"!==n,n]},t}(),s=function(){return function(){}}(),a=function(){return function(){}}(),c=function(){function t(){}return t.prototype.transform=function(t,n,o){if(void 0===n&&(n=1),void 0===o&&(o=""),n<=0)throw new RangeError;return 1===n?t:this.repeat(t,n-1,o)},t.prototype.repeat=function(t,n,o){return i(t)?0===n?t:t+o+this.repeat(t,n-1,o):t},t}(),p=function(){return function(){}}(),f=function(){return function(){}}(),h=function(){return function(){}}(),m=function(){return function(){}}()},717:function(t,n,o){"use strict";o.d(n,"a",function(){return i});o(44);var e=o(718),i=function(){function t(t,n,o,e){this.el=t,this.appRef=n,this.platform=o,this._componentFactoryResolver=e,this.event="click",this.duration=3e3,this._arrow=!1,this._navTooltip=!1,this._canShow=!0,this._active=!1}return Object.defineProperty(t.prototype,"navTooltip",{get:function(){return this._navTooltip},set:function(t){this._navTooltip="boolean"!=typeof t||!1!==t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"arrow",{get:function(){return this._arrow},set:function(t){this._arrow="boolean"!=typeof t||!1!==t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"active",{get:function(){return this._active},set:function(t){this._active="boolean"!=typeof t||!1!==t,this._active?this.canShow&&this.showTooltip():this._removeTooltip()},enumerable:!0,configurable:!0}),t.prototype.ngAfterViewInit=function(){this._active&&this.trigger()},Object.defineProperty(t.prototype,"canShow",{get:function(){return this._canShow&&""!==this.tooltip},set:function(t){this._canShow=t},enumerable:!0,configurable:!0}),t.prototype.trigger=function(){this.canShow&&(this.tooltipElement?this._resetTimer():this.showTooltip())},t.prototype.showTooltip=function(){var t=this;this._createTooltipComponent();var n=this.tooltipElement.instance;n.text=this.tooltip,n.init.then(function(){var o=t._getTooltipPosition();if(n.posLeft=o.left,n.posTop=o.top,n.fadeState="visible",t.arrow){n.arrow="top"===t.positionV?"bottom":"bottom"===t.positionV?"top":"left"===t.positionH?"right":"left"}t._active||(t.tooltipTimeout=setTimeout(t._removeTooltip.bind(t),t.duration))})},t.prototype.onClick=function(){"click"===this.event&&this.trigger()},t.prototype.onPress=function(){"press"===this.event&&this.trigger()},t.prototype.onMouseEnter=function(){"hover"===this.event&&(this.active=!0)},t.prototype.onMouseLeave=function(){"hover"===this.event&&(this.active=!1)},t.prototype._createTooltipComponent=function(){var t=this.appRef.components[0]._component._viewport,n=this._componentFactoryResolver.resolveComponentFactory(e.a);this.tooltipElement=t.createComponent(n)},t.prototype._getTooltipPosition=function(){var t,n,o=this.tooltipElement.instance.getNativeElement(),e=this.el.nativeElement,i=e.getBoundingClientRect(),l=10;return this.navTooltip&&(this.positionV="bottom",this.arrow=!1,l=20),t="right"===this.positionH?i.right+l:"left"===this.positionH?i.left-l-o.offsetWidth:this.navTooltip?i.left+e.offsetWidth/2:i.left,n="top"===this.positionV?i.top-l-o.offsetHeight:"bottom"===this.positionV?i.bottom+l:i.top+e.offsetHeight/2-o.offsetHeight/2,t+o.offsetWidth+l>this.platform.width()?t=this.platform.width()-o.offsetWidth-l:t+o.offsetWidth-l<0&&(t=l),{left:t,top:n}},t.prototype._removeTooltip=function(){var t=this;if(!this.tooltipElement)return this.tooltipElement=void 0,void(this.tooltipTimeout=void 0);this.tooltipElement.instance.fadeState="invisible",this.canShow=!1,setTimeout(function(){t.tooltipElement&&"function"==typeof t.tooltipElement.destroy&&t.tooltipElement.destroy(),t.tooltipElement=t.tooltipTimeout=void 0,t.canShow=!0},300)},t.prototype._resetTimer=function(){this.active=!1,clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(this._removeTooltip.bind(this),this.duration)},t}()},718:function(t,n,o){"use strict";o.d(n,"a",function(){return e});o(136);var e=function(){function t(t,n){var o=this;this.elementRef=t,this.rnd=n,this.fadeState="invisible",this.init=new Promise(function(t){o.initResolve=t})}return Object.defineProperty(t.prototype,"arrow",{set:function(t){this.rnd.setAttribute(this.getNativeElement(),"class","has-arrow arrow-"+t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"posTop",{set:function(t){this.rnd.setStyle(this.getNativeElement(),"top",t+"px")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"posLeft",{set:function(t){this.rnd.setStyle(this.getNativeElement(),"left",t+"px")},enumerable:!0,configurable:!0}),t.prototype.getNativeElement=function(){return this.elementRef.nativeElement},t.prototype.ngAfterViewInit=function(){this.initResolve()},t}()},719:function(t,n,o){"use strict";o(717),o(720)},720:function(t,n,o){"use strict";o.d(n,"a",function(){return e});o(44),o(717);var e=function(){return function(){}}()},721:function(t,n,o){"use strict";o.d(n,"a",function(){return e});o(0),o(44),o(34),o(719);var e=function(){return function(){}}()},723:function(t,n,o){"use strict";o.d(n,"a",function(){return e});o(0),o(44),o(129);var e=function(){function t(t,n,o,e){var i=this;this.platform=n,this.viewCtrl=o,this.l=e,this.story=t.get("story"),this.l.onReady().then(function(){i.l.query().subscribe(function(t){t&&(i.alllists=t)})})}return t.prototype.ionViewDidEnter=function(){var t=this;this.unregister=this.platform.registerBackButtonAction(function(){t.viewCtrl.dismiss(),t.unregister()})},t.prototype.ionViewDidLeave=function(){this.unregister()},t.prototype.toggleFromList=function(t){t.stories?t.stories.indexOf(this.story)>-1?this.l.removeStory(t,this.story):this.l.addStory(t,this.story):this.l.getById(t.urlname).subscribe()},t}()},725:function(t,n,o){"use strict";function e(t){return i._22(2,[(t()(),i._20(0,null,["",""]))],null,function(t,n){t(n,0,0,n.component.text)})}o.d(n,"a",function(){return u});var i=o(1),l=o(718),r=i.X({encapsulation:0,styles:["[_nghost-%COMP%] {\n              background-color: rgba(0,0,0,0.8);\n              color: white;\n              display: inline-block;\n              position: fixed;\n              padding: 15px 25px;\n              font-size: 15px;\n          }",".has-arrow[_nghost-%COMP%]:before {\n              content: '';\n              border: 5px solid transparent;\n              position: absolute;\n              width: 0;\n              height: 0;\n          }",".has-arrow.arrow-top[_nghost-%COMP%]:before { border-bottom: 5px solid rgba(0,0,0,0.8); top: -10px; }",".has-arrow.arrow-left[_nghost-%COMP%]:before { border-right: 5px solid rgba(0,0,0,0.8); left: -10px; }",".has-arrow.arrow-right[_nghost-%COMP%]:before { border-left: 5px solid rgba(0,0,0,0.8); right: -10px; }",".has-arrow.arrow-bottom[_nghost-%COMP%]:before { border-top: 5px solid rgba(0,0,0,0.8); bottom: -10px; }"],data:{animation:[{type:7,name:"fade",definitions:[{type:0,name:"visible",styles:{type:6,styles:{opacity:1},offset:null},options:void 0},{type:0,name:"invisible",styles:{type:6,styles:{opacity:0},offset:null},options:void 0},{type:1,expr:"visible <=> invisible",animation:{type:4,styles:null,timings:"300ms linear"},options:null}],options:{}}]}}),u=i.V("tooltip-box",l.a,function(t){return i._22(0,[(t()(),i.Z(0,0,null,null,1,"tooltip-box",[],[[40,"@fade",0]],null,null,e,r)),i.Y(1,4243456,null,0,l.a,[i.j,i.A],null,null)],null,function(t,n){t(n,0,0,i._13(n,1).fadeState)})},{text:"text",arrow:"arrow",posTop:"posTop",posLeft:"posLeft"},{},[])},729:function(t,n,o){"use strict";function e(t){return u._22(0,[(t()(),u.Z(0,0,null,null,1,"ion-icon",[["name","lock"],["role","img"]],[[2,"hide",null]],null,null,null,null)),u.Y(1,147456,[[6,4]],0,s.a,[a.a,u.j,u.z],{name:[0,"name"]},null)],function(t,n){t(n,1,0,"lock")},function(t,n){t(n,0,0,u._13(n,1)._hidden)})}function i(t){return u._22(0,[(t()(),u.Z(0,0,null,null,4,null,null,null,null,null,null,null)),(t()(),u._20(-1,null,["\n          "])),(t()(),u.Z(2,0,null,null,1,"ion-icon",[["role","img"]],[[2,"hide",null]],null,null,null,null)),u.Y(3,147456,null,0,s.a,[a.a,u.j,u.z],{name:[0,"name"]},null),(t()(),u._20(-1,null,["\n        "]))],function(t,n){t(n,3,0,(null==n.parent.context.$implicit?null:null==n.parent.context.$implicit.stories?null:n.parent.context.$implicit.stories.indexOf(n.component.story))>-1?"star":"star-outline")},function(t,n){t(n,2,0,u._13(n,3)._hidden)})}function l(t){return u._22(0,[(t()(),u.Z(0,0,null,null,24,"ion-item",[["class","item item-block"]],null,[[null,"click"]],function(t,n,o){var e=!0;if("click"===n){e=!1!==t.component.toggleFromList(t.context.$implicit)&&e}return e},c.b,c.a)),u.Y(1,1097728,null,3,p.a,[f.a,a.a,u.j,u.z,[2,h.a]],null,null),u._18(335544320,4,{contentLabel:0}),u._18(603979776,5,{_buttons:1}),u._18(603979776,6,{_icons:1}),u.Y(5,16384,null,0,m.a,[],null,null),(t()(),u._20(-1,2,["\n    "])),(t()(),u.Z(7,0,null,2,3,"h2",[],null,null,null,null,null)),(t()(),u.U(16777216,null,null,1,null,e)),u.Y(9,16384,null,0,_.j,[u.I,u.F],{ngIf:[0,"ngIf"]},null),(t()(),u._20(10,null,[" ",""])),(t()(),u._20(-1,2,["\n    "])),(t()(),u.Z(12,0,null,4,11,"ion-note",[["item-end",""]],null,null,null,null,null)),u.Y(13,16384,null,0,d.a,[a.a,u.j,u.z],null,null),(t()(),u._20(-1,null,["\n      "])),(t()(),u.Z(15,0,null,null,7,"button",[["clear","true"],["event","press"],["icon-only",""],["ion-button",""],["navTooltip",""]],null,[[null,"click"],[null,"press"],[null,"mouseenter"],[null,"mouseleave"]],function(t,n,o){var e=!0;if("click"===n){e=!1!==u._13(t,17).onClick()&&e}if("press"===n){e=!1!==u._13(t,17).onPress()&&e}if("mouseenter"===n){e=!1!==u._13(t,17).onMouseEnter()&&e}if("mouseleave"===n){e=!1!==u._13(t,17).onMouseLeave()&&e}return e},v.b,v.a)),u.Y(16,1097728,null,0,b.a,[[8,""],a.a,u.j,u.z],{clear:[0,"clear"]},null),u.Y(17,4210688,null,0,g.a,[u.j,u.f,y.a,u.i],{tooltip:[0,"tooltip"],event:[1,"event"],navTooltip:[2,"navTooltip"]},null),u._14(131072,w.a,[T.a,u.g]),(t()(),u._20(-1,0,["\n        "])),(t()(),u.U(16777216,null,0,1,null,i)),u.Y(21,16384,null,0,_.j,[u.I,u.F],{ngIf:[0,"ngIf"]},null),(t()(),u._20(-1,0,["\n      "])),(t()(),u._20(-1,null,["\n    "])),(t()(),u._20(-1,2,["\n  "]))],function(t,n){t(n,9,0,!(null!=n.context.$implicit&&n.context.$implicit.visibility));t(n,16,0,"true");t(n,17,0,u._21(n,17,0,u._13(n,18).transform("BOOKMARK_BUTTON")),"press","");t(n,21,0,null==n.context.$implicit?null:n.context.$implicit.stories)},function(t,n){t(n,10,0,null==n.context.$implicit?null:n.context.$implicit.name)})}function r(t){return u._22(0,[u._14(0,x.g,[]),(t()(),u.Z(1,0,null,null,15,"ion-list",[["class","bookmarks"]],null,null,null,null,null)),u.Y(2,16384,null,0,C.a,[a.a,u.j,u.z,y.a,k.l,O.a],null,null),(t()(),u._20(-1,null,["\n  "])),(t()(),u.Z(4,0,null,null,7,"ion-list-header",[["class","item"]],null,null,null,c.b,c.a)),u.Y(5,1097728,null,3,p.a,[f.a,a.a,u.j,u.z,[2,h.a]],null,null),u._18(335544320,1,{contentLabel:0}),u._18(603979776,2,{_buttons:1}),u._18(603979776,3,{_icons:1}),u.Y(9,16384,null,0,j.a,[a.a,u.z,u.j,[8,null]],null,null),(t()(),u._20(10,2,["",""])),u._14(131072,w.a,[T.a,u.g]),(t()(),u._20(-1,null,["\n  "])),(t()(),u.U(16777216,null,null,2,null,l)),u.Y(14,802816,null,0,_.i,[u.I,u.F,u.p],{ngForOf:[0,"ngForOf"]},null),u._16(15,2),(t()(),u._20(-1,null,["\n"])),(t()(),u._20(-1,null,["\n"]))],function(t,n){var o=n.component;t(n,14,0,u._21(n,14,0,t(n,15,0,u._13(n,0),o.alllists,"id")))},function(t,n){t(n,10,0,u._21(n,10,0,u._13(n,11).transform("LISTLIST_TITLE")))})}o.d(n,"a",function(){return F});var u=o(1),s=o(66),a=o(3),c=o(198),p=o(26),f=o(23),h=o(62),m=o(87),_=o(18),d=o(200),v=o(61),b=o(29),g=o(717),y=o(6),w=o(86),T=o(39),x=o(716),C=o(67),k=o(10),O=o(12),j=o(132),E=o(723),S=o(15),P=o(7),L=o(137),Y=u.X({encapsulation:2,styles:[],data:{}}),F=u.V("bookmark-popover",E.a,function(t){return u._22(0,[(t()(),u.Z(0,0,null,null,1,"bookmark-popover",[],null,null,null,r,Y)),u.Y(1,49152,null,0,E.a,[S.a,y.a,P.a,L.a],null,null)],null,null)},{},{},[])}});