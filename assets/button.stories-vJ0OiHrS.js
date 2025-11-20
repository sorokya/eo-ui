import{j as t}from"./jsx-runtime-CpHMKOcv.js";import"./iframe-3a_gackF.js";import"./preload-helper-PPVm8Dsz.js";const m="_button_18pct_1",u="_large_18pct_43",r={button:m,large:u};function l({label:s,variant:n="small",type:o="button"}){return t.jsx("button",{type:o,className:`${r.button} ${n==="large"?r.large:""}`,children:t.jsx("span",{children:s})})}l.__docgenInfo={description:"",methods:[],displayName:"Button",props:{label:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'small' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:"",defaultValue:{value:"'button'",computed:!1}}}};const d={title:"Example/Button",component:l,tags:["autodocs"]},e={args:{label:"Play Game",variant:"large"}},a={args:{label:"OK!",variant:"small"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Play Game',
    variant: 'large'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'OK!',
    variant: 'small'
  }
}`,...a.parameters?.docs?.source}}};const g=["Large","Small"];export{e as Large,a as Small,g as __namedExportsOrder,d as default};
