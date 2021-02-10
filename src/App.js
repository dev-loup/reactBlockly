import './App.css';
import './customBlocks/preblocks';
import { initialXml } from './tools/xmlFiles';
import { toolboxCategories } from './tools/toolbox';
import React from 'react'
import ReactBlockly from 'react-blockly'
import Blockly from 'blockly';

const Download = (text, filename) => {
  const blob = new Blob([ text ], {type: "text/plain"});
  const getFile = (blob) => {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
  }
  getFile(blob);
}
const TextArea = ({label, children}) => {
  return (
  <>
    <label htmlFor={label}>{children}</label>
    <textarea id={label}></textarea>
  </>
  )
}
export default function App() {
  function workspaceDidChange(workspace) {
    workspace.addChangeListener(Blockly.Events.disableOrphans);
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    document.getElementById('code').value = code;
    const xmlDOM = Blockly.Xml.workspaceToDom(workspace)
    document.getElementById('XML').value = Blockly.Xml.domToPrettyText(xmlDOM);
  }

  return (
    <>
      <ReactBlockly
        toolboxCategories={toolboxCategories}
        initialXml={initialXml}
        wrapperDivClassName="fill-height"
        workspaceConfiguration={{
          grid: {
            spacing: 20,
            length: 3,
            colour: '#ccc',
            snap: true,
          },
          zoom: {
            controls: true,
            wheel: true,
            startScale: 1.0,
            minScale: 0.3,
            scaleSpeed: 1.2,
            pinch:true
          },
          renderer: 'zelos',
        }}
        workspaceDidChange={workspaceDidChange}
      />
      <TextArea label="code">Gazeebo XML Code</TextArea>
      <TextArea label="XML">Blockly code</TextArea>
      <button onClick={() => Download(document.getElementById('code').value, 'gazeebo.xml')}>Download</button>
      <button onClick={() => Download(document.getElementById('XML').value, 'blockly.xml')}>Download Blockly XML</button>
    </>
  )
}
