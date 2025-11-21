import{j as m}from"./iframe-BBoqb6mz.js";import"./preload-helper-PPVm8Dsz.js";const u="_panel_kv33y_1",h="_medium_kv33y_10",b="_bold_kv33y_14",r={panel:u,medium:h,bold:b};function i({children:s,borderStyle:o="thin",padding:d="4px",backgroundOpacity:l=.5,bold:p=!1}){const c=o==="medium"?r.medium:"";return m.jsx("div",{className:`${r.panel} ${c} ${p?r.bold:""}`,style:{"--eo-ui-panel-padding":d,"--eo-ui-panel-background-opacity":l},children:s})}i.__docgenInfo={description:"",methods:[],displayName:"Panel",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content to be displayed inside the panel."},borderStyle:{required:!1,tsType:{name:"union",raw:"'thin' | 'medium'",elements:[{name:"literal",value:"'thin'"},{name:"literal",value:"'medium'"}]},description:`Style of the panel border, either 'thin' or 'medium'
@default 'thin'`,defaultValue:{value:"'thin'",computed:!1}},padding:{required:!1,tsType:{name:"string"},description:`Padding inside the panel
@default '4px'`,defaultValue:{value:"'4px'",computed:!1}},backgroundOpacity:{required:!1,tsType:{name:"number"},description:`Background opacity of the panel
@default 0.5`,defaultValue:{value:"0.5",computed:!1}},bold:{required:!1,tsType:{name:"boolean"},description:`Whether the panel text should be bold
@default false`,defaultValue:{value:"false",computed:!1}}}};const f={title:"Components/Panel",component:i,tags:["autodocs"],parameters:{docs:{description:{component:"A panel component with a decorative border and semi-transparent background."}}}},e={args:{children:"This is a panel with a thin border"},parameters:{docs:{description:{story:"The default panel with thin border styling."}}}},a={args:{borderStyle:"medium",children:"This is a panel with a medium border"},parameters:{docs:{description:{story:"A panel variant with a medium border style. Looks best with a taller aspect ratio."}}}},t={args:{padding:"20px 10px",backgroundOpacity:.8,children:"This panel has custom padding and background opacity for better content visibility."},parameters:{docs:{description:{story:"A panel with increased padding and higher background opacity to enhance content visibility."}}}},n={args:{bold:!0,children:"This panel has bold text"},parameters:{docs:{description:{story:"A panel variant that displays its text in bold font weight."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'This is a panel with a thin border'
  },
  parameters: {
    docs: {
      description: {
        story: 'The default panel with thin border styling.'
      }
    }
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    borderStyle: 'medium',
    children: 'This is a panel with a medium border'
  },
  parameters: {
    docs: {
      description: {
        story: 'A panel variant with a medium border style. Looks best with a taller aspect ratio.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    padding: '20px 10px',
    backgroundOpacity: 0.8,
    children: 'This panel has custom padding and background opacity for better content visibility.'
  },
  parameters: {
    docs: {
      description: {
        story: 'A panel with increased padding and higher background opacity to enhance content visibility.'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    bold: true,
    children: 'This panel has bold text'
  },
  parameters: {
    docs: {
      description: {
        story: 'A panel variant that displays its text in bold font weight.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};const v=["Default","MediumBorder","CustomPaddingAndOpacity","BoldText"];export{n as BoldText,t as CustomPaddingAndOpacity,e as Default,a as MediumBorder,v as __namedExportsOrder,f as default};
