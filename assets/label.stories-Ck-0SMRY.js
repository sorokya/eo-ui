import{j as e,r as i}from"./iframe-CAPa6XIx.js";import{T as c}from"./text-box-DiULvvEd.js";import"./preload-helper-PPVm8Dsz.js";const d="_label_1qvsa_1",m={label:d};function o({htmlFor:t,children:s,className:n=""}){return e.jsx("label",{htmlFor:t,className:`${m.label} ${n}`,children:s})}o.__docgenInfo={description:"",methods:[],displayName:"Label",props:{htmlFor:{required:!1,tsType:{name:"string"},description:"The id of the element this label is associated with"},children:{required:!0,tsType:{name:"ReactNode"},description:"The text content of the label"},className:{required:!1,tsType:{name:"string"},description:"Additional class name for the label",defaultValue:{value:"''",computed:!1}}}};const b={title:"Components/Label",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"A label component with customizable text, htmlFor attribute, and padding."}}}},a={args:{children:"Username:"},parameters:{docs:{description:{story:"The default label with no additional props."}}}},r={args:{htmlFor:"username-input",children:"Username:"},render:t=>{const[s,n]=i.useState("");return e.jsxs(e.Fragment,{children:[e.jsx(o,{...t}),e.jsx(c,{id:t.htmlFor,value:s,onChange:l=>n(l.target.value)})]})},parameters:{docs:{description:{story:"A label associated with an input element via the htmlFor attribute."}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Username:'
  },
  parameters: {
    docs: {
      description: {
        story: 'The default label with no additional props.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    htmlFor: 'username-input',
    children: 'Username:'
  },
  render: args => {
    const [value, setValue] = useState('');
    return <>
        <Label {...args} />
        <TextBox id={args.htmlFor} value={value} onChange={e => setValue(e.target.value)} />
      </>;
  },
  parameters: {
    docs: {
      description: {
        story: 'A label associated with an input element via the htmlFor attribute.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};const g=["Default","WithHtmlFor"];export{a as Default,r as WithHtmlFor,g as __namedExportsOrder,b as default};
