import{j as a,r as h}from"./iframe-N9dek2qS.js";import"./preload-helper-PPVm8Dsz.js";const i="_checkbox_xmm9p_1",p="_checked_xmm9p_27",o={checkbox:i,checked:p};function s({id:t,checked:e=!1,onChange:c=()=>{}}){return a.jsx("div",{className:`${o.checkbox} ${e?o.checked:""}`,children:a.jsx("input",{type:"checkbox",id:t,checked:e,onChange:c})})}s.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{id:{required:!1,tsType:{name:"string"},description:"Optional id for the checkbox"},checked:{required:!1,tsType:{name:"boolean"},description:"Whether the checkbox is checked",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:"onChange event handler",defaultValue:{value:"() => {}",computed:!1}}}};const m={title:"Components/Checkbox",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"A simple checkbox component"}}}},n={render:t=>{const[e,c]=h.useState(!1),r=d=>{c(d.target.checked)};return a.jsx(s,{...t,checked:e,onChange:r})},args:{id:"default-checkbox"},parameters:{docs:{description:{story:"The default checkbox, initially unchecked."}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(false);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setChecked(e.target.checked);
    };
    return <Checkbox {...args} checked={checked} onChange={onChange} />;
  },
  args: {
    id: 'default-checkbox'
  },
  parameters: {
    docs: {
      description: {
        story: 'The default checkbox, initially unchecked.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};const k=["Default"];export{n as Default,k as __namedExportsOrder,m as default};
