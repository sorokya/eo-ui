import{r as p,j as d}from"./iframe-CAPa6XIx.js";import{T as u}from"./text-box-DiULvvEd.js";import"./preload-helper-PPVm8Dsz.js";const m={title:"Components/TextBox",component:u,tags:["autodocs"],parameters:{docs:{description:{component:"A text box component with customizable type, value, and background opacity."}}}},o={render:e=>{const[t,a]=p.useState("I'm a text box!"),r=s=>{a(s.target.value)};return d.jsx(u,{...e,value:t,onChange:r})},args:{type:"text",backgroundOpacity:.4},parameters:{docs:{description:{story:'The default text box with type "text" and semi-transparent background.'}}}},n={render:e=>{const[t,a]=p.useState("password"),r=s=>{a(s.target.value)};return d.jsx(u,{...e,value:t,onChange:r})},args:{type:"password",backgroundOpacity:.4},parameters:{docs:{description:{story:'A text box of type "password" that masks the input value for privacy.'}}}},c={render:e=>{const[t,a]=p.useState("I have a custom background opacity!"),r=s=>{a(s.target.value)};return d.jsx(u,{...e,value:t,onChange:r})},args:{type:"text",backgroundOpacity:.7},parameters:{docs:{description:{story:"A text box with increased background opacity for better visibility."}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("I'm a text box!");
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };
    return <TextBox {...args} value={value} onChange={onChange} />;
  },
  args: {
    type: 'text',
    backgroundOpacity: 0.4
  },
  parameters: {
    docs: {
      description: {
        story: 'The default text box with type "text" and semi-transparent background.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('password');
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };
    return <TextBox {...args} value={value} onChange={onChange} />;
  },
  args: {
    type: 'password',
    backgroundOpacity: 0.4
  },
  parameters: {
    docs: {
      description: {
        story: 'A text box of type "password" that masks the input value for privacy.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('I have a custom background opacity!');
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };
    return <TextBox {...args} value={value} onChange={onChange} />;
  },
  args: {
    type: 'text',
    backgroundOpacity: 0.7
  },
  parameters: {
    docs: {
      description: {
        story: 'A text box with increased background opacity for better visibility.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};const x=["Default","PasswordType","CustomBackgroundOpacity"];export{c as CustomBackgroundOpacity,o as Default,n as PasswordType,x as __namedExportsOrder,m as default};
