import Blockly from 'blockly';
import 'blockly/javascript';

Blockly.defineBlocksWithJsonArray([
    {
        "type": "startBlock",
        "message0": "Maintainer: %1 Mail: %2 Area: %3 XML Version: %4 Encoding: %5",
        "args0": [
          {
            "type": "input_value",
            "name": "maintainer",
            "check": "String"
          },
          {
            "type": "input_value",
            "name": "mail",
            "check": "String"
          },
          {
            "type": "input_value",
            "name": "area",
            "check": "String"
          },
          {
            "type": "input_value",
            "name": "xmlVersion",
            "check": "String"
          },
          {
            "type": "input_value",
            "name": "encoding",
            "check": "String"
          }
        ],
        "nextStatement": "Routine",
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      }
])

// FUNCTIONS
Blockly.JavaScript['startBlock'] = function(block) {
    var valueMaintainer = Blockly.JavaScript.valueToCode(block, 'maintainer', Blockly.JavaScript.ORDER_ATOMIC);
    var valueMail = Blockly.JavaScript.valueToCode(block, 'mail', Blockly.JavaScript.ORDER_ATOMIC);
    var valueArea = Blockly.JavaScript.valueToCode(block, 'area', Blockly.JavaScript.ORDER_ATOMIC);
    var valueXml = Blockly.JavaScript.valueToCode(block, 'xmlVersion', Blockly.JavaScript.ORDER_ATOMIC);
    var valueEncoding = Blockly.JavaScript.valueToCode(block, 'encoding', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `
    <!--    
    Maintainer: ${valueMaintainer}
    Mail: ${valueMail}
    ${valueArea}
    -->
    <?xml version=${valueXml} encoding=${valueEncoding}?>
    `;
    return code;
  };