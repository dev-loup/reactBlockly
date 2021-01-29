import './App.css';
import './customBlocks/preblocks';
import { initialXml } from './tools/xmlFiles';
import { toolboxCategories } from './tools/toolbox';
import React from 'react'
import ReactBlockly from 'react-blockly'
import Blockly from 'blockly';

export default function App() {
  function download() {
    const code = document.getElementById('code').value;
    console.log(code)
    const blob = new Blob([ code ], {type: "text/plain"});
    const getFile = (blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = 'filename.xml';
      a.click();
    }
    getFile(blob);
  }
  function workspaceDidChange(workspace) {
    workspace.addChangeListener(Blockly.Events.disableOrphans);
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    document.getElementById('code').value = code;
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
      <label htmlFor="code">Gazeebo XML Viewer</label>
      <textarea id="code"></textarea>
      <button onClick={download}>Download</button>
    </>
  )
}
