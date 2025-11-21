import{j as t}from"./iframe-CAPa6XIx.js";import"./preload-helper-PPVm8Dsz.js";const c="_button_l3s02_1",d="_large_l3s02_41",r={button:c,large:d};function n({children:s,variant:o="small",type:l="button",onClick:i=()=>{},className:u=""}){return t.jsx("button",{type:l,className:`${r.button} ${o==="large"?r.large:""} ${u}`,onClick:i,children:t.jsx("span",{children:s})})}n.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"string"},description:"The string content of the button"},variant:{required:!1,tsType:{name:"union",raw:"'small' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'large'"}]},description:`The variant of the button, either 'small' or 'large'
@default 'small'`,defaultValue:{value:"'small'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:`The HTML button type attribute
@default 'button'`,defaultValue:{value:"'button'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional click handler",defaultValue:{value:"() => {}",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name for the button",defaultValue:{value:"''",computed:!1}}}};const f={title:"Components/Button",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"A customizable button component with small and large variants."}}}},e={args:{children:"OK!"},parameters:{docs:{description:{story:"The small variant has a smaller font. Suitable for secondary actions."}}}},a={args:{children:"Play Game",variant:"large"},parameters:{docs:{description:{story:"The large variant has a larger font and is decorated with screws. Suitable for primary actions."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'OK!'
  },
  parameters: {
    docs: {
      description: {
        story: 'The small variant has a smaller font. Suitable for secondary actions.'
      }
    }
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Play Game',
    variant: 'large'
  },
  parameters: {
    docs: {
      description: {
        story: 'The large variant has a larger font and is decorated with screws. Suitable for primary actions.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};const g=["Default","Large"];export{e as Default,a as Large,g as __namedExportsOrder,f as default};
