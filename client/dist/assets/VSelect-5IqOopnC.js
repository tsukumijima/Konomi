import{l as St,V as bt,f as Ke,n as kt,o as Vt,b as Le}from"./VTextField-CrVL-eS9.js";import{z as K,cB as te,C as X,c8 as ne,D as S,c6 as Q,c3 as ce,b as m,b6 as j,aW as de,bw as N,a1 as ve,bC as q,$ as F,a3 as Ue,cC as He,bD as E,cD as $e,cE as wt,A as oe,B as ye,cF as se,w as je,v as Ct,cG as Be,cH as Ge,c7 as qe,cI as Ce,cu as ze,ct as We,cJ as It,ce as Xe,cK as Ye,R as Pt,cL as At,W as J,cf as Je,cM as Qe,cN as xt,c9 as Ze,cO as Ie,cy as et,cA as tt,cP as Tt,a as Ot,cQ as Lt,F as le,cR as me,c5 as Bt,cS as Dt,cT as Y,ca as Mt,cb as Et,cU as Se,cV as Ft,a5 as Pe,cW as De,cX as Rt,cY as nt,cZ as _t,bV as Me,be as at,cx as he,c_ as Nt,c$ as be,d0 as Kt,cc as fe,a2 as Ut,ch as Ht,d1 as $t,k as jt,cn as Gt,d2 as Ee}from"./index-CfJiLHux.js";import{M as qt,V as ke,m as zt}from"./VAvatar-CEfQlnus.js";import{e as Wt,f as Fe,g as Xt,h as lt,i as Yt,j as Re,d as _e,k as Jt,c as Qt}from"./VSwitch-DN1qehb_.js";import{u as Zt,c as it}from"./ssrBoot-CFKDKzIn.js";const en=K({indeterminate:Boolean,indeterminateIcon:{type:te,default:"$checkboxIndeterminate"},...Wt({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),tn=X()({name:"VCheckboxBtn",props:en(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,i){let{slots:t}=i;const n=ne(e,"indeterminate"),l=ne(e,"modelValue");function a(c){n.value&&(n.value=!1)}const u=S(()=>n.value?e.indeterminateIcon:e.falseIcon),o=S(()=>n.value?e.indeterminateIcon:e.trueIcon);return Q(()=>{const c=ce(Fe.filterProps(e),["modelValue"]);return m(Fe,j(c,{modelValue:l.value,"onUpdate:modelValue":[p=>l.value=p,a],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:u.value,trueIcon:o.value,"aria-checked":n.value?"mixed":void 0}),t)}),{}}}),Ve=Symbol.for("vuetify:list");function ot(){const e=de(Ve,{hasPrepend:N(!1),updateHasPrepend:()=>null}),i={hasPrepend:N(!1),updateHasPrepend:t=>{t&&(i.hasPrepend.value=t)}};return ve(Ve,i),e}function ut(){return de(Ve,null)}const Ae=e=>{const i={activate:t=>{let{id:n,value:l,activated:a}=t;return n=q(n),e&&!l&&a.size===1&&a.has(n)||(l?a.add(n):a.delete(n)),a},in:(t,n,l)=>{let a=new Set;for(const u of t||[])a=i.activate({id:u,value:!0,activated:new Set(a),children:n,parents:l});return a},out:t=>Array.from(t)};return i},st=e=>{const i=Ae(e);return{activate:n=>{let{activated:l,id:a,...u}=n;a=q(a);const o=l.has(a)?new Set([a]):new Set;return i.activate({...u,id:a,activated:o})},in:(n,l,a)=>{let u=new Set;return n!=null&&n.length&&(u=i.in(n.slice(0,1),l,a)),u},out:(n,l,a)=>i.out(n,l,a)}},nn=e=>{const i=Ae(e);return{activate:n=>{let{id:l,activated:a,children:u,...o}=n;return l=q(l),u.has(l)?a:i.activate({id:l,activated:a,children:u,...o})},in:i.in,out:i.out}},an=e=>{const i=st(e);return{activate:n=>{let{id:l,activated:a,children:u,...o}=n;return l=q(l),u.has(l)?a:i.activate({id:l,activated:a,children:u,...o})},in:i.in,out:i.out}},ln={open:e=>{let{id:i,value:t,opened:n,parents:l}=e;if(t){const a=new Set;a.add(i);let u=l.get(i);for(;u!=null;)a.add(u),u=l.get(u);return a}else return n.delete(i),n},select:()=>null},rt={open:e=>{let{id:i,value:t,opened:n,parents:l}=e;if(t){let a=l.get(i);for(n.add(i);a!=null&&a!==i;)n.add(a),a=l.get(a);return n}else n.delete(i);return n},select:()=>null},on={open:rt.open,select:e=>{let{id:i,value:t,opened:n,parents:l}=e;if(!t)return n;const a=[];let u=l.get(i);for(;u!=null;)a.push(u),u=l.get(u);return new Set(a)}},xe=e=>{const i={select:t=>{let{id:n,value:l,selected:a}=t;if(n=q(n),e&&!l){const u=Array.from(a.entries()).reduce((o,c)=>{let[p,b]=c;return b==="on"&&o.push(p),o},[]);if(u.length===1&&u[0]===n)return a}return a.set(n,l?"on":"off"),a},in:(t,n,l)=>{let a=new Map;for(const u of t||[])a=i.select({id:u,value:!0,selected:new Map(a),children:n,parents:l});return a},out:t=>{const n=[];for(const[l,a]of t.entries())a==="on"&&n.push(l);return n}};return i},ct=e=>{const i=xe(e);return{select:n=>{let{selected:l,id:a,...u}=n;a=q(a);const o=l.has(a)?new Map([[a,l.get(a)]]):new Map;return i.select({...u,id:a,selected:o})},in:(n,l,a)=>{let u=new Map;return n!=null&&n.length&&(u=i.in(n.slice(0,1),l,a)),u},out:(n,l,a)=>i.out(n,l,a)}},un=e=>{const i=xe(e);return{select:n=>{let{id:l,selected:a,children:u,...o}=n;return l=q(l),u.has(l)?a:i.select({id:l,selected:a,children:u,...o})},in:i.in,out:i.out}},sn=e=>{const i=ct(e);return{select:n=>{let{id:l,selected:a,children:u,...o}=n;return l=q(l),u.has(l)?a:i.select({id:l,selected:a,children:u,...o})},in:i.in,out:i.out}},rn=e=>{const i={select:t=>{let{id:n,value:l,selected:a,children:u,parents:o}=t;n=q(n);const c=new Map(a),p=[n];for(;p.length;){const V=p.shift();a.set(V,l?"on":"off"),u.has(V)&&p.push(...u.get(V))}let b=o.get(n);for(;b;){const V=u.get(b),h=V.every(d=>a.get(d)==="on"),r=V.every(d=>!a.has(d)||a.get(d)==="off");a.set(b,h?"on":r?"off":"indeterminate"),b=o.get(b)}return e&&!l&&Array.from(a.entries()).reduce((h,r)=>{let[d,s]=r;return s==="on"&&h.push(d),h},[]).length===0?c:a},in:(t,n,l)=>{let a=new Map;for(const u of t||[])a=i.select({id:u,value:!0,selected:new Map(a),children:n,parents:l});return a},out:(t,n)=>{const l=[];for(const[a,u]of t.entries())u==="on"&&!n.has(a)&&l.push(a);return l}};return i},re=Symbol.for("vuetify:nested"),dt={id:N(),root:{register:()=>null,unregister:()=>null,parents:F(new Map),children:F(new Map),open:()=>null,openOnSelect:()=>null,activate:()=>null,select:()=>null,activatable:F(!1),selectable:F(!1),opened:F(new Set),activated:F(new Set),selected:F(new Map),selectedValues:F([])}},cn=K({activatable:Boolean,selectable:Boolean,activeStrategy:[String,Function],selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,activated:Array,selected:Array,mandatory:Boolean},"nested"),dn=e=>{let i=!1;const t=F(new Map),n=F(new Map),l=ne(e,"opened",e.opened,r=>new Set(r),r=>[...r.values()]),a=S(()=>{if(typeof e.activeStrategy=="object")return e.activeStrategy;switch(e.activeStrategy){case"leaf":return nn(e.mandatory);case"single-leaf":return an(e.mandatory);case"independent":return Ae(e.mandatory);case"single-independent":default:return st(e.mandatory)}}),u=S(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return sn(e.mandatory);case"leaf":return un(e.mandatory);case"independent":return xe(e.mandatory);case"single-independent":return ct(e.mandatory);case"classic":default:return rn(e.mandatory)}}),o=S(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return on;case"single":return ln;case"multiple":default:return rt}}),c=ne(e,"activated",e.activated,r=>a.value.in(r,t.value,n.value),r=>a.value.out(r,t.value,n.value)),p=ne(e,"selected",e.selected,r=>u.value.in(r,t.value,n.value),r=>u.value.out(r,t.value,n.value));Ue(()=>{i=!0});function b(r){const d=[];let s=r;for(;s!=null;)d.unshift(s),s=n.value.get(s);return d}const V=He("nested"),h={id:N(),root:{opened:l,activatable:E(e,"activatable"),selectable:E(e,"selectable"),activated:c,selected:p,selectedValues:S(()=>{const r=[];for(const[d,s]of p.value.entries())s==="on"&&r.push(d);return r}),register:(r,d,s)=>{d&&r!==d&&n.value.set(r,d),s&&t.value.set(r,[]),d!=null&&t.value.set(d,[...t.value.get(d)||[],r])},unregister:r=>{if(i)return;t.value.delete(r);const d=n.value.get(r);if(d){const s=t.value.get(d)??[];t.value.set(d,s.filter(v=>v!==r))}n.value.delete(r),l.value.delete(r)},open:(r,d,s)=>{V.emit("click:open",{id:r,value:d,path:b(r),event:s});const v=o.value.open({id:r,value:d,opened:new Set(l.value),children:t.value,parents:n.value,event:s});v&&(l.value=v)},openOnSelect:(r,d,s)=>{const v=o.value.select({id:r,value:d,selected:new Map(p.value),opened:new Set(l.value),children:t.value,parents:n.value,event:s});v&&(l.value=v)},select:(r,d,s)=>{V.emit("click:select",{id:r,value:d,path:b(r),event:s});const v=u.value.select({id:r,value:d,selected:new Map(p.value),children:t.value,parents:n.value,event:s});v&&(p.value=v),h.root.openOnSelect(r,d,s)},activate:(r,d,s)=>{if(!e.activatable)return h.root.select(r,!0,s);V.emit("click:activate",{id:r,value:d,path:b(r),event:s});const v=a.value.activate({id:r,value:d,activated:new Set(c.value),children:t.value,parents:n.value,event:s});v&&(c.value=v)},children:t,parents:n}};return ve(re,h),h.root},vt=(e,i)=>{const t=de(re,dt),n=Symbol($e()),l=S(()=>e.value!==void 0?e.value:n),a={...t,id:l,open:(u,o)=>t.root.open(l.value,u,o),openOnSelect:(u,o)=>t.root.openOnSelect(l.value,u,o),isOpen:S(()=>t.root.opened.value.has(l.value)),parent:S(()=>t.root.parents.value.get(l.value)),activate:(u,o)=>t.root.activate(l.value,u,o),isActivated:S(()=>t.root.activated.value.has(q(l.value))),select:(u,o)=>t.root.select(l.value,u,o),isSelected:S(()=>t.root.selected.value.get(q(l.value))==="on"),isIndeterminate:S(()=>t.root.selected.value.get(l.value)==="indeterminate"),isLeaf:S(()=>!t.root.children.value.get(l.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(l.value,t.id.value,i),Ue(()=>{!t.isGroupActivator&&t.root.unregister(l.value)}),i&&ve(re,a),a},vn=()=>{const e=de(re,dt);ve(re,{...e,isGroupActivator:!0})},fn=wt({name:"VListGroupActivator",setup(e,i){let{slots:t}=i;return vn(),()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),mn=K({activeColor:String,baseColor:String,color:String,collapseIcon:{type:te,default:"$collapse"},expandIcon:{type:te,default:"$expand"},prependIcon:te,appendIcon:te,fluid:Boolean,subgroup:Boolean,title:String,value:null,...oe(),...ye()},"VListGroup"),Ne=X()({name:"VListGroup",props:mn(),setup(e,i){let{slots:t}=i;const{isOpen:n,open:l,id:a}=vt(E(e,"value"),!0),u=S(()=>`v-list-group--id-${String(a.value)}`),o=ut(),{isBooted:c}=Zt();function p(r){l(!n.value,r)}const b=S(()=>({onClick:p,class:"v-list-group__header",id:u.value})),V=S(()=>n.value?e.collapseIcon:e.expandIcon),h=S(()=>({VListItem:{active:n.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&V.value,appendIcon:e.appendIcon||!e.subgroup&&V.value,title:e.title,value:e.value}}));return Q(()=>m(e.tag,{class:["v-list-group",{"v-list-group--prepend":o==null?void 0:o.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":n.value},e.class],style:e.style},{default:()=>[t.activator&&m(se,{defaults:h.value},{default:()=>[m(fn,null,{default:()=>[t.activator({props:b.value,isOpen:n.value})]})]}),m(qt,{transition:{component:St},disabled:!c.value},{default:()=>{var r;return[je(m("div",{class:"v-list-group__items",role:"group","aria-labelledby":u.value},[(r=t.default)==null?void 0:r.call(t)]),[[Ct,n.value]])]}})]})),{isOpen:n}}}),gn=it("v-list-item-subtitle"),yn=it("v-list-item-title"),hn=K({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:te,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:te,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:Be(),onClickOnce:Be(),...Ge(),...oe(),...qe(),...Ce(),...ze(),...We(),...It(),...ye(),...Xe(),...Ye({variant:"text"})},"VListItem"),ge=X()({name:"VListItem",directives:{Ripple:Pt},props:hn(),emits:{click:e=>!0},setup(e,i){let{attrs:t,slots:n,emit:l}=i;const a=At(e,t),u=S(()=>e.value===void 0?a.href.value:e.value),{activate:o,isActivated:c,select:p,isSelected:b,isIndeterminate:V,isGroupActivator:h,root:r,parent:d,openOnSelect:s}=vt(u,!1),v=ut(),k=S(()=>{var g;return e.active!==!1&&(e.active||((g=a.isActive)==null?void 0:g.value)||(r.activatable.value?c.value:b.value))}),C=S(()=>e.link!==!1&&a.isLink.value),T=S(()=>!e.disabled&&e.link!==!1&&(e.link||a.isClickable.value||!!v&&(r.selectable.value||r.activatable.value||e.value!=null))),P=S(()=>e.rounded||e.nav),U=S(()=>e.color??e.activeColor),ae=S(()=>({color:k.value?U.value??e.baseColor:e.baseColor,variant:e.variant}));J(()=>{var g;return(g=a.isActive)==null?void 0:g.value},g=>{g&&d.value!=null&&r.open(d.value,!0),g&&s(g)},{immediate:!0});const{themeClasses:B}=Je(e),{borderClasses:Z}=Qe(e),{colorClasses:z,colorStyles:G,variantClasses:_}=xt(ae),{densityClasses:O}=Ze(e),{dimensionStyles:H}=Ie(e),{elevationClasses:ie}=et(e),{roundedClasses:W}=tt(P),ue=S(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),ee=S(()=>({isActive:k.value,select:p,isSelected:b.value,isIndeterminate:V.value}));function y(g){var A;l("click",g),!(h||!T.value)&&((A=a.navigate)==null||A.call(a,g),r.activatable.value?o(!c.value,g):(r.selectable.value||e.value!=null)&&p(!b.value,g))}function f(g){(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),y(g))}return Q(()=>{const g=C.value?"a":e.tag,A=n.title||e.title!=null,x=n.subtitle||e.subtitle!=null,w=!!(e.appendAvatar||e.appendIcon),L=!!(w||n.append),I=!!(e.prependAvatar||e.prependIcon),D=!!(I||n.prepend);return v==null||v.updateHasPrepend(D),e.activeColor&&Tt("active-color",["color","base-color"]),je(m(g,{class:["v-list-item",{"v-list-item--active":k.value,"v-list-item--disabled":e.disabled,"v-list-item--link":T.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!D&&(v==null?void 0:v.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&k.value},B.value,Z.value,z.value,O.value,ie.value,ue.value,W.value,_.value,e.class],style:[G.value,H.value,e.style],href:a.href.value,tabindex:T.value?v?-2:0:void 0,onClick:y,onKeydown:T.value&&!C.value&&f},{default:()=>{var R;return[Lt(T.value||k.value,"v-list-item"),D&&m("div",{key:"prepend",class:"v-list-item__prepend"},[n.prepend?m(se,{key:"prepend-defaults",disabled:!I,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var M;return[(M=n.prepend)==null?void 0:M.call(n,ee.value)]}}):m(le,null,[e.prependAvatar&&m(ke,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&m(me,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),m("div",{class:"v-list-item__spacer"},null)]),m("div",{class:"v-list-item__content","data-no-activator":""},[A&&m(yn,{key:"title"},{default:()=>{var M;return[((M=n.title)==null?void 0:M.call(n,{title:e.title}))??e.title]}}),x&&m(gn,{key:"subtitle"},{default:()=>{var M;return[((M=n.subtitle)==null?void 0:M.call(n,{subtitle:e.subtitle}))??e.subtitle]}}),(R=n.default)==null?void 0:R.call(n,ee.value)]),L&&m("div",{key:"append",class:"v-list-item__append"},[n.append?m(se,{key:"append-defaults",disabled:!w,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var M;return[(M=n.append)==null?void 0:M.call(n,ee.value)]}}):m(le,null,[e.appendIcon&&m(me,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&m(ke,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),m("div",{class:"v-list-item__spacer"},null)])]}}),[[Ot("ripple"),T.value&&e.ripple]])}),{isGroupActivator:h,isSelected:b,list:v,select:p}}}),pn=K({color:String,inset:Boolean,sticky:Boolean,title:String,...oe(),...ye()},"VListSubheader"),Sn=X()({name:"VListSubheader",props:pn(),setup(e,i){let{slots:t}=i;const{textColorClasses:n,textColorStyles:l}=Bt(E(e,"color"));return Q(()=>{const a=!!(t.default||e.title);return m(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},n.value,e.class],style:[{textColorStyles:l},e.style]},{default:()=>{var u;return[a&&m("div",{class:"v-list-subheader__text"},[((u=t.default)==null?void 0:u.call(t))??e.title])]}})}),{}}}),bn=K({items:Array,returnObject:Boolean},"VListChildren"),ft=X()({name:"VListChildren",props:bn(),setup(e,i){let{slots:t}=i;return ot(),()=>{var n,l;return((n=t.default)==null?void 0:n.call(t))??((l=e.items)==null?void 0:l.map(a=>{var h,r;let{children:u,props:o,type:c,raw:p}=a;if(c==="divider")return((h=t.divider)==null?void 0:h.call(t,{props:o}))??m(bt,o,null);if(c==="subheader")return((r=t.subheader)==null?void 0:r.call(t,{props:o}))??m(Sn,o,null);const b={subtitle:t.subtitle?d=>{var s;return(s=t.subtitle)==null?void 0:s.call(t,{...d,item:p})}:void 0,prepend:t.prepend?d=>{var s;return(s=t.prepend)==null?void 0:s.call(t,{...d,item:p})}:void 0,append:t.append?d=>{var s;return(s=t.append)==null?void 0:s.call(t,{...d,item:p})}:void 0,title:t.title?d=>{var s;return(s=t.title)==null?void 0:s.call(t,{...d,item:p})}:void 0},V=Ne.filterProps(o);return u?m(Ne,j({value:o==null?void 0:o.value},V),{activator:d=>{let{props:s}=d;const v={...o,...s,value:e.returnObject?p:o.value};return t.header?t.header({props:v}):m(ge,v,b)},default:()=>m(ft,{items:u},t)}):t.item?t.item({props:o}):m(ge,j(o,{value:e.returnObject?p:o.value}),b)}))}}}),mt=K({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:Dt}},"list-items");function we(e,i){const t=Y(i,e.itemTitle,i),n=Y(i,e.itemValue,t),l=Y(i,e.itemChildren),a=e.itemProps===!0?typeof i=="object"&&i!=null&&!Array.isArray(i)?"children"in i?ce(i,["children"]):i:void 0:Y(i,e.itemProps),u={title:t,value:n,...a};return{title:String(u.title??""),value:u.value,props:u,children:Array.isArray(l)?gt(e,l):void 0,raw:i}}function gt(e,i){const t=[];for(const n of i)t.push(we(e,n));return t}function kn(e){const i=S(()=>gt(e,e.items)),t=S(()=>i.value.some(a=>a.value===null));function n(a){return t.value||(a=a.filter(u=>u!==null)),a.map(u=>e.returnObject&&typeof u=="string"?we(e,u):i.value.find(o=>e.valueComparator(u,o.value))||we(e,u))}function l(a){return e.returnObject?a.map(u=>{let{raw:o}=u;return o}):a.map(u=>{let{value:o}=u;return o})}return{items:i,transformIn:n,transformOut:l}}function Vn(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function wn(e,i){const t=Y(i,e.itemType,"item"),n=Vn(i)?i:Y(i,e.itemTitle),l=Y(i,e.itemValue,void 0),a=Y(i,e.itemChildren),u=e.itemProps===!0?ce(i,["children"]):Y(i,e.itemProps),o={title:n,value:l,...u};return{type:t,title:o.title,value:o.value,props:o,children:t==="item"&&a?yt(e,a):void 0,raw:i}}function yt(e,i){const t=[];for(const n of i)t.push(wn(e,n));return t}function Cn(e){return{items:S(()=>yt(e,e.items))}}const In=K({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,expandIcon:String,collapseIcon:String,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,...cn({selectStrategy:"single-leaf",openStrategy:"list"}),...Ge(),...oe(),...qe(),...Ce(),...ze(),itemType:{type:String,default:"type"},...mt(),...We(),...ye(),...Xe(),...Ye({variant:"text"})},"VList"),Pn=X()({name:"VList",props:In(),emits:{"update:selected":e=>!0,"update:activated":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:activate":e=>!0,"click:select":e=>!0},setup(e,i){let{slots:t}=i;const{items:n}=Cn(e),{themeClasses:l}=Je(e),{backgroundColorClasses:a,backgroundColorStyles:u}=Mt(E(e,"bgColor")),{borderClasses:o}=Qe(e),{densityClasses:c}=Ze(e),{dimensionStyles:p}=Ie(e),{elevationClasses:b}=et(e),{roundedClasses:V}=tt(e),{children:h,open:r,parents:d,select:s}=dn(e),v=S(()=>e.lines?`v-list--${e.lines}-line`:void 0),k=E(e,"activeColor"),C=E(e,"baseColor"),T=E(e,"color");ot(),Et({VListGroup:{activeColor:k,baseColor:C,color:T,expandIcon:E(e,"expandIcon"),collapseIcon:E(e,"collapseIcon")},VListItem:{activeClass:E(e,"activeClass"),activeColor:k,baseColor:C,color:T,density:E(e,"density"),disabled:E(e,"disabled"),lines:E(e,"lines"),nav:E(e,"nav"),slim:E(e,"slim"),variant:E(e,"variant")}});const P=N(!1),U=F();function ae(O){P.value=!0}function B(O){P.value=!1}function Z(O){var H;!P.value&&!(O.relatedTarget&&((H=U.value)!=null&&H.contains(O.relatedTarget)))&&_()}function z(O){const H=O.target;if(!(!U.value||["INPUT","TEXTAREA"].includes(H.tagName))){if(O.key==="ArrowDown")_("next");else if(O.key==="ArrowUp")_("prev");else if(O.key==="Home")_("first");else if(O.key==="End")_("last");else return;O.preventDefault()}}function G(O){P.value=!0}function _(O){if(U.value)return Se(U.value,O)}return Q(()=>m(e.tag,{ref:U,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav,"v-list--slim":e.slim},l.value,a.value,o.value,c.value,b.value,v.value,V.value,e.class],style:[u.value,p.value,e.style],tabindex:e.disabled||P.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:ae,onFocusout:B,onFocus:Z,onKeydown:z,onMousedown:G},{default:()=>[m(ft,{items:n.value,returnObject:e.returnObject},t)]})),{open:r,select:s,focus:_,children:h,parents:d}}}),An=K({id:String,...ce(Xt({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:lt}}),["absolute"])},"VMenu"),xn=X()({name:"VMenu",props:An(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:t}=i;const n=ne(e,"modelValue"),{scopeId:l}=Yt(),a=$e(),u=S(()=>e.id||`v-menu-${a}`),o=F(),c=de(Re,null),p=N(0);ve(Re,{register(){++p.value},unregister(){--p.value},closeParents(s){setTimeout(()=>{!p.value&&(s==null||s&&!Ft(s,o.value.contentEl))&&(n.value=!1,c==null||c.closeParents())},40)}});async function b(s){var C,T,P;const v=s.relatedTarget,k=s.target;await Pe(),n.value&&v!==k&&((C=o.value)!=null&&C.contentEl)&&((T=o.value)!=null&&T.globalTop)&&![document,o.value.contentEl].includes(k)&&!o.value.contentEl.contains(k)&&((P=De(o.value.contentEl)[0])==null||P.focus())}J(n,s=>{s?(c==null||c.register(),document.addEventListener("focusin",b,{once:!0})):(c==null||c.unregister(),document.removeEventListener("focusin",b))});function V(s){c==null||c.closeParents(s)}function h(s){var v,k,C;e.disabled||(s.key==="Tab"||s.key==="Enter"&&!e.closeOnContentClick?(s.key==="Enter"&&s.preventDefault(),Rt(De((v=o.value)==null?void 0:v.contentEl,!1),s.shiftKey?"prev":"next",P=>P.tabIndex>=0)||(n.value=!1,(C=(k=o.value)==null?void 0:k.activatorEl)==null||C.focus())):["Enter"," "].includes(s.key)&&e.closeOnContentClick&&(n.value=!1,c==null||c.closeParents()))}function r(s){var k;if(e.disabled)return;const v=(k=o.value)==null?void 0:k.contentEl;v&&n.value?s.key==="ArrowDown"?(s.preventDefault(),Se(v,"next")):s.key==="ArrowUp"&&(s.preventDefault(),Se(v,"prev")):["ArrowDown","ArrowUp"].includes(s.key)&&(n.value=!0,s.preventDefault(),setTimeout(()=>setTimeout(()=>r(s))))}const d=S(()=>j({"aria-haspopup":"menu","aria-expanded":String(n.value),"aria-owns":u.value,onKeydown:r},e.activatorProps));return Q(()=>{const s=_e.filterProps(e);return m(_e,j({ref:o,id:u.value,class:["v-menu",e.class],style:e.style},s,{modelValue:n.value,"onUpdate:modelValue":v=>n.value=v,absolute:!0,activatorProps:d.value,"onClick:outside":V,onKeydown:h},l),{activator:t.activator,default:function(){for(var v=arguments.length,k=new Array(v),C=0;C<v;C++)k[C]=arguments[C];return m(se,{root:"VMenu"},{default:()=>{var T;return[(T=t.default)==null?void 0:T.call(t,...k)]}})}})}),Ke({id:u,ΨopenChildren:p},o)}}),Tn=K({renderless:Boolean,...oe()},"VVirtualScrollItem"),On=X()({name:"VVirtualScrollItem",inheritAttrs:!1,props:Tn(),emits:{"update:height":e=>!0},setup(e,i){let{attrs:t,emit:n,slots:l}=i;const{resizeRef:a,contentRect:u}=nt(void 0,"border");J(()=>{var o;return(o=u.value)==null?void 0:o.height},o=>{o!=null&&n("update:height",o)}),Q(()=>{var o,c;return e.renderless?m(le,null,[(o=l.default)==null?void 0:o.call(l,{itemRef:a})]):m("div",j({ref:a,class:["v-virtual-scroll__item",e.class],style:e.style},t),[(c=l.default)==null?void 0:c.call(l)])})}}),Ln=-1,Bn=1,pe=100,Dn=K({itemHeight:{type:[Number,String],default:null},height:[Number,String]},"virtual");function Mn(e,i){const t=_t(),n=N(0);Me(()=>{n.value=parseFloat(e.itemHeight||0)});const l=N(0),a=N(Math.ceil((parseInt(e.height)||t.height.value)/(n.value||16))||1),u=N(0),o=N(0),c=F(),p=F();let b=0;const{resizeRef:V,contentRect:h}=nt();Me(()=>{V.value=c.value});const r=S(()=>{var f;return c.value===document.documentElement?t.height.value:((f=h.value)==null?void 0:f.height)||parseInt(e.height)||0}),d=S(()=>!!(c.value&&p.value&&r.value&&n.value));let s=Array.from({length:i.value.length}),v=Array.from({length:i.value.length});const k=N(0);let C=-1;function T(f){return s[f]||n.value}const P=Nt(()=>{const f=performance.now();v[0]=0;const g=i.value.length;for(let A=1;A<=g-1;A++)v[A]=(v[A-1]||0)+T(A-1);k.value=Math.max(k.value,performance.now()-f)},k),U=J(d,f=>{f&&(U(),b=p.value.offsetTop,P.immediate(),W(),~C&&Pe(()=>{be&&window.requestAnimationFrame(()=>{ee(C),C=-1})}))});at(()=>{P.clear()});function ae(f,g){const A=s[f],x=n.value;n.value=x?Math.min(n.value,g):g,(A!==g||x!==n.value)&&(s[f]=g,P())}function B(f){return f=he(f,0,i.value.length-1),v[f]||0}function Z(f){return En(v,f)}let z=0,G=0,_=0;J(r,(f,g)=>{g&&(W(),f<g&&requestAnimationFrame(()=>{G=0,W()}))});function O(){if(!c.value||!p.value)return;const f=c.value.scrollTop,g=performance.now();g-_>500?(G=Math.sign(f-z),b=p.value.offsetTop):G=f-z,z=f,_=g,W()}function H(){!c.value||!p.value||(G=0,_=0,W())}let ie=-1;function W(){cancelAnimationFrame(ie),ie=requestAnimationFrame(ue)}function ue(){if(!c.value||!r.value)return;const f=z-b,g=Math.sign(G),A=Math.max(0,f-pe),x=he(Z(A),0,i.value.length),w=f+r.value+pe,L=he(Z(w)+1,x+1,i.value.length);if((g!==Ln||x<l.value)&&(g!==Bn||L>a.value)){const I=B(l.value)-B(x),D=B(L)-B(a.value);Math.max(I,D)>pe?(l.value=x,a.value=L):(x<=0&&(l.value=x),L>=i.value.length&&(a.value=L))}u.value=B(l.value),o.value=B(i.value.length)-B(a.value)}function ee(f){const g=B(f);!c.value||f&&!g?C=f:c.value.scrollTop=g}const y=S(()=>i.value.slice(l.value,a.value).map((f,g)=>({raw:f,index:g+l.value})));return J(i,()=>{s=Array.from({length:i.value.length}),v=Array.from({length:i.value.length}),P.immediate(),W()},{deep:!0}),{containerRef:c,markerRef:p,computedItems:y,paddingTop:u,paddingBottom:o,scrollToIndex:ee,handleScroll:O,handleScrollend:H,handleItemResize:ae}}function En(e,i){let t=e.length-1,n=0,l=0,a=null,u=-1;if(e[t]<i)return t;for(;n<=t;)if(l=n+t>>1,a=e[l],a>i)t=l-1;else if(a<i)u=l,n=l+1;else return a===i?l:n;return u}const Fn=K({items:{type:Array,default:()=>[]},renderless:Boolean,...Dn(),...oe(),...Ce()},"VVirtualScroll"),Rn=X()({name:"VVirtualScroll",props:Fn(),setup(e,i){let{slots:t}=i;const n=He("VVirtualScroll"),{dimensionStyles:l}=Ie(e),{containerRef:a,markerRef:u,handleScroll:o,handleScrollend:c,handleItemResize:p,scrollToIndex:b,paddingTop:V,paddingBottom:h,computedItems:r}=Mn(e,E(e,"items"));return Kt(()=>e.renderless,()=>{function d(){var k,C;const v=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?"addEventListener":"removeEventListener";a.value===document.documentElement?(document[v]("scroll",o,{passive:!0}),document[v]("scrollend",c)):((k=a.value)==null||k[v]("scroll",o,{passive:!0}),(C=a.value)==null||C[v]("scrollend",c))}Ut(()=>{a.value=Jt(n.vnode.el,!0),d(!0)}),at(d)}),Q(()=>{const d=r.value.map(s=>m(On,{key:s.index,renderless:e.renderless,"onUpdate:height":v=>p(s.index,v)},{default:v=>{var k;return(k=t.default)==null?void 0:k.call(t,{item:s.raw,index:s.index,...v})}}));return e.renderless?m(le,null,[m("div",{ref:u,class:"v-virtual-scroll__spacer",style:{paddingTop:fe(V.value)}},null),d,m("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:fe(h.value)}},null)]):m("div",{ref:a,class:["v-virtual-scroll",e.class],onScrollPassive:o,onScrollend:c,style:[l.value,e.style]},[m("div",{ref:u,class:"v-virtual-scroll__container",style:{paddingTop:fe(V.value),paddingBottom:fe(h.value)}},[d])])}),{scrollToIndex:b}}});function _n(e,i){const t=N(!1);let n;function l(o){cancelAnimationFrame(n),t.value=!0,n=requestAnimationFrame(()=>{n=requestAnimationFrame(()=>{t.value=!1})})}async function a(){await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>{if(t.value){const c=J(t,()=>{c(),o()})}else o()})}async function u(o){var b,V;if(o.key==="Tab"&&((b=i.value)==null||b.focus()),!["PageDown","PageUp","Home","End"].includes(o.key))return;const c=(V=e.value)==null?void 0:V.$el;if(!c)return;(o.key==="Home"||o.key==="End")&&c.scrollTo({top:o.key==="Home"?0:c.scrollHeight,behavior:"smooth"}),await a();const p=c.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(o.key==="PageDown"||o.key==="Home"){const h=c.getBoundingClientRect().top;for(const r of p)if(r.getBoundingClientRect().top>=h){r.focus();break}}else{const h=c.getBoundingClientRect().bottom;for(const r of[...p].reverse())if(r.getBoundingClientRect().bottom<=h){r.focus();break}}}return{onListScroll:l,onListKeydown:u}}const Nn=K({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,listProps:{type:Object},menu:Boolean,menuIcon:{type:te,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...mt({itemChildren:!1})},"Select"),Kn=K({...Nn(),...ce(kt({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...zt({transition:{component:lt}})},"VSelect"),qn=X()({name:"VSelect",props:Kn(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,i){let{slots:t}=i;const{t:n}=Ht(),l=F(),a=F(),u=F(),o=ne(e,"menu"),c=S({get:()=>o.value,set:y=>{var f;o.value&&!y&&((f=a.value)!=null&&f.ΨopenChildren)||(o.value=y)}}),{items:p,transformIn:b,transformOut:V}=kn(e),h=ne(e,"modelValue",[],y=>b(y===null?[null]:Gt(y)),y=>{const f=V(y);return e.multiple?f:f[0]??null}),r=S(()=>typeof e.counterValue=="function"?e.counterValue(h.value):typeof e.counterValue=="number"?e.counterValue:h.value.length),d=Vt(),s=S(()=>h.value.map(y=>y.value)),v=N(!1),k=S(()=>c.value?e.closeText:e.openText);let C="",T;const P=S(()=>e.hideSelected?p.value.filter(y=>!h.value.some(f=>f===y)):p.value),U=S(()=>e.hideNoData&&!P.value.length||e.readonly||(d==null?void 0:d.isReadonly.value)),ae=S(()=>{var y;return{...e.menuProps,activatorProps:{...((y=e.menuProps)==null?void 0:y.activatorProps)||{},"aria-haspopup":"listbox"}}}),B=F(),{onListScroll:Z,onListKeydown:z}=_n(B,l);function G(y){e.openOnClear&&(c.value=!0)}function _(){U.value||(c.value=!c.value)}function O(y){var w,L;if(!y.key||e.readonly||d!=null&&d.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(y.key)&&y.preventDefault(),["Enter","ArrowDown"," "].includes(y.key)&&(c.value=!0),["Escape","Tab"].includes(y.key)&&(c.value=!1),y.key==="Home"?(w=B.value)==null||w.focus("first"):y.key==="End"&&((L=B.value)==null||L.focus("last"));const f=1e3;function g(I){const D=I.key.length===1,R=!I.ctrlKey&&!I.metaKey&&!I.altKey;return D&&R}if(e.multiple||!g(y))return;const A=performance.now();A-T>f&&(C=""),C+=y.key.toLowerCase(),T=A;const x=p.value.find(I=>I.title.toLowerCase().startsWith(C));if(x!==void 0){h.value=[x];const I=P.value.indexOf(x);be&&window.requestAnimationFrame(()=>{var D;I>=0&&((D=u.value)==null||D.scrollToIndex(I))})}}function H(y){let f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!y.props.disabled)if(e.multiple){const g=h.value.findIndex(x=>e.valueComparator(x.value,y.value)),A=f??!~g;if(~g){const x=A?[...h.value,y]:[...h.value];x.splice(g,1),h.value=x}else A&&(h.value=[...h.value,y])}else{const g=f!==!1;h.value=g?[y]:[],Pe(()=>{c.value=!1})}}function ie(y){var f;(f=B.value)!=null&&f.$el.contains(y.relatedTarget)||(c.value=!1)}function W(){var y;v.value&&((y=l.value)==null||y.focus())}function ue(y){v.value=!0}function ee(y){if(y==null)h.value=[];else if(Ee(l.value,":autofill")||Ee(l.value,":-webkit-autofill")){const f=p.value.find(g=>g.title===y);f&&H(f)}else l.value&&(l.value.value="")}return J(c,()=>{if(!e.hideSelected&&c.value&&h.value.length){const y=P.value.findIndex(f=>h.value.some(g=>e.valueComparator(g.value,f.value)));be&&window.requestAnimationFrame(()=>{var f;y>=0&&((f=u.value)==null||f.scrollToIndex(y))})}}),J(()=>e.items,(y,f)=>{c.value||v.value&&!f.length&&y.length&&(c.value=!0)}),Q(()=>{const y=!!(e.chips||t.chip),f=!!(!e.hideNoData||P.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),g=h.value.length>0,A=Le.filterProps(e),x=g||!v.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return m(Le,j({ref:l},A,{modelValue:h.value.map(w=>w.props.value).join(", "),"onUpdate:modelValue":ee,focused:v.value,"onUpdate:focused":w=>v.value=w,validationValue:h.externalValue,counterValue:r.value,dirty:g,class:["v-select",{"v-select--active-menu":c.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":h.value.length,"v-select--selection-slot":!!t.selection},e.class],style:e.style,inputmode:"none",placeholder:x,"onClick:clear":G,"onMousedown:control":_,onBlur:ie,onKeydown:O,"aria-label":n(k.value),title:n(k.value)}),{...t,default:()=>m(le,null,[m(xn,j({ref:a,modelValue:c.value,"onUpdate:modelValue":w=>c.value=w,activator:"parent",contentClass:"v-select__content",disabled:U.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:W},ae.value),{default:()=>[f&&m(Pn,j({ref:B,selected:s.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:w=>w.preventDefault(),onKeydown:z,onFocusin:ue,onScrollPassive:Z,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},e.listProps),{default:()=>{var w,L,I;return[(w=t["prepend-item"])==null?void 0:w.call(t),!P.value.length&&!e.hideNoData&&(((L=t["no-data"])==null?void 0:L.call(t))??m(ge,{title:n(e.noDataText)},null)),m(Rn,{ref:u,renderless:!0,items:P.value},{default:D=>{var Oe;let{item:R,index:M,itemRef:$}=D;const Te=j(R.props,{ref:$,key:M,onClick:()=>H(R,null)});return((Oe=t.item)==null?void 0:Oe.call(t,{item:R,index:M,props:Te}))??m(ge,j(Te,{role:"option"}),{prepend:ht=>{let{isSelected:pt}=ht;return m(le,null,[e.multiple&&!e.hideSelected?m(tn,{key:R.value,modelValue:pt,ripple:!1,tabindex:"-1"},null):void 0,R.props.prependAvatar&&m(ke,{image:R.props.prependAvatar},null),R.props.prependIcon&&m(me,{icon:R.props.prependIcon},null)])}})}}),(I=t["append-item"])==null?void 0:I.call(t)]}})]}),h.value.map((w,L)=>{function I($){$.stopPropagation(),$.preventDefault(),H(w,!1)}const D={"onClick:close":I,onKeydown($){$.key!=="Enter"&&$.key!==" "||($.preventDefault(),$.stopPropagation(),I($))},onMousedown($){$.preventDefault(),$.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},R=y?!!t.chip:!!t.selection,M=R?$t(y?t.chip({item:w,index:L,props:D}):t.selection({item:w,index:L})):void 0;if(!(R&&!M))return m("div",{key:w.value,class:"v-select__selection"},[y?t.chip?m(se,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:w.title}}},{default:()=>[M]}):m(Qt,j({key:"chip",closable:e.closableChips,size:"small",text:w.title,disabled:w.props.disabled},D),null):M??m("span",{class:"v-select__selection-text"},[w.title,e.multiple&&L<h.value.length-1&&m("span",{class:"v-select__selection-comma"},[jt(",")])])])})]),"append-inner":function(){var D;for(var w=arguments.length,L=new Array(w),I=0;I<w;I++)L[I]=arguments[I];return m(le,null,[(D=t["append-inner"])==null?void 0:D.call(t,...L),e.menuIcon?m(me,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),Ke({isFocused:v,menu:c,select:H},l)}});export{Pn as V,ge as a,yn as b,qn as c};