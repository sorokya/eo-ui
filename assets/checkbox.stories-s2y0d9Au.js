import{j as s,r as h}from"./iframe-CAPa6XIx.js";import"./preload-helper-PPVm8Dsz.js";const i="_checkbox_xmm9p_1",l="_checked_xmm9p_27",r={checkbox:i,checked:l};function o({id:t,checked:e=!1,onChange:c=()=>{},className:a=""}){return s.jsx("div",{className:`${r.checkbox} ${e?r.checked:""} ${a}`,children:s.jsx("input",{type:"checkbox",id:t,checked:e,onChange:c})})}o.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{id:{required:!1,tsType:{name:"string"},description:"Optional id for the checkbox"},checked:{required:!1,tsType:{name:"boolean"},description:"Whether the checkbox is checked",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:"onChange event handler",defaultValue:{value:"() => {}",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name for the checkbox",defaultValue:{value:"''",computed:!1}}}};const m={title:"Components/Checkbox",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"A simple checkbox component"}}}},n={render:t=>{const[e,c]=h.useState(!1),a=d=>{c(d.target.checked)};return s.jsx(o,{...t,checked:e,onChange:a})},args:{id:"default-checkbox"},parameters:{docs:{description:{story:"The default checkbox, initially unchecked."}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
