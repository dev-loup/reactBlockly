import './App.css';
import './customBlocks/preblocks'
import React from 'react'
import ReactBlockly from 'react-blockly'
import Blockly from 'blockly';

export default function App() {
  const initialXml = 
    `<xml xmlns="http://www.w3.org/1999/xhtml">
      <block type="rawStartBlock" x="3" y="3">
        <value name="xmlVersion">
            <block type="text">
                <field name="TEXT">1.0</field>
            </block>
        </value>
        <value name="encoding">
            <block type="text">
                <field name="TEXT">utf-8</field>
            </block>
        </value>
      </block>
    </xml>
    `;
  const toolboxCategories = [
    {
      name: 'Headers',
      colour: '#5CA699',
      blocks: [
        {
          type: 'startBlock',
          values: {
            maintainer: {
              type: 'text',
              fields: {
                TEXT: 'abc'
              },
            },
            mail: {
              type: 'text',
              fields: {
                TEXT: 'mail@kiwibot.com'
              },
            },
            area: {
              type: 'text',
              fields: {
                TEXT: 'the Kiwi Campus: AI and Robotics Team'
              },
            },
            xmlVersion: {
              type: 'text',
              fields: {
                TEXT: '1.0'
              },
            },
            encoding: {
              type: 'text',
              fields: {
                TEXT: 'utf-8'
              },
            },
          }
        },
        {
          type: 'rawStartBlock',
          values: {
            xmlVersion: {
              type: 'text',
              fields: {
                TEXT: '1.0'
              },
            },
            encoding: {
              type: 'text',
              fields: {
                TEXT: 'utf-8'
              },
            },
          }
        }
      ]
    },
    {
      name: 'Routines',
      colour: '#5CA699',
      blocks: [
        {
          type: 'routines',
          values: {
            id: {
              type: 'math_number',
              fields: {
                NUM: 1
              }
            },
            cycles: {
              type: 'math_number',
              fields: {
                NUM: 1
              }
            },
          }
        },
        {
          type: 'moves',
          values: {
            time1: {
              type: 'math_number',
              fields: {
                NUM: 1
              }
            },
            time2: {
              type: 'math_number',
              fields: {
                NUM: 1
              }
            },
            linear: {
              type: 'math_number',
              fields: {
                NUM: 1
              }
            },
            angular: {
              type: 'math_number',
              fields: {
                NUM: 1
              }
            },
          }
        },
        {
          type: 'features',
          values: {
            time1: {
              type: 'math_number',
              fields: {
                NUM: 1
              }
            },
            time2: {
              type: 'math_number',
              fields: {
                NUM: 1
              }
            },
            mode: {
              type: 'text',
              fields: {
                TEXT: 1
              }
            },
            value: {
              type: 'math_number',
              fields: {
                NUM: 1
              }
            },
          }
        }
      ]
    }
    ];
 
  function workspaceDidChange(workspace) {
    const newXml = Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace));
    document.getElementById('generated-xml').innerText = newXml;

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
          renderer: 'zelos',
        }}
        workspaceDidChange={workspaceDidChange}
      />
      <pre id="generated-xml">
      </pre>
      <textarea id="code" style={{ height: "200px", width: "400px" }}></textarea>
    </>
  )
}
