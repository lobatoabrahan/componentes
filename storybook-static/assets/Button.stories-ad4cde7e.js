import{r as y}from"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";var d={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b=y,v=Symbol.for("react.element"),E=Symbol.for("react.fragment"),O=Object.prototype.hasOwnProperty,g=b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,B={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,a){var t,n={},p=null,u=null;a!==void 0&&(p=""+a),r.key!==void 0&&(p=""+r.key),r.ref!==void 0&&(u=r.ref);for(t in r)O.call(r,t)&&!B.hasOwnProperty(t)&&(n[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps,r)n[t]===void 0&&(n[t]=r[t]);return{$$typeof:v,type:e,key:p,ref:u,props:n,_owner:g.current}}s.Fragment=E;s.jsx=l;s.jsxs=l;d.exports=s;var R=d.exports;const _=R.jsx,f=({children:e,onClick:r})=>_("button",{onClick:r,className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:e}),x=f;f.__docgenInfo={description:"",methods:[],displayName:"Button"};const S={title:"Components/Button",component:x},h=e=>_(x,{...e}),o=h.bind({});o.args={children:"Button"};var i,c,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:"args => <Button {...args} />",...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const k=["Primary"];export{o as Primary,k as __namedExportsOrder,S as default};
