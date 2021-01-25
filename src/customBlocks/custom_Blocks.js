import Blockly from 'blockly';
import 'blockly/javascript';

Blockly.Blocks['startBlock'] = {
    init: () => {
        this.appendValueInput("maintainer")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Maintainer:");
        this.appendValueInput("mail")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Mail:");
        this.appendValueInput("area")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Area:");
        this.appendValueInput("xmlVersion")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("xml version:");
        this.appendValueInput("encoding")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("encoding:");
        this.setNextStatement(true, 'Routine');
        this.setColour(240);
    this.setTooltip("Set initial parameters");
    this.setHelpUrl("");
    }
};

Blockly.Blocks['rawStartBlock'] = {
    init: () => {
        this.appendValueInput("xmlVersion")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("xml version:");
        this.appendValueInput("encoding")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("encoding:");
        this.setNextStatement(true, null);
        this.setColour(120);
    this.setTooltip("Set initial parameters");
    this.setHelpUrl("");
    }
};
// type 0 movement block
Blockly.Blocks['moves'] = {
    init: () => {
      this.appendDummyInput()
          .appendField("Set moves");
      this.appendValueInput("time1")
          .setCheck("Number")
          .appendField("time1>");
      this.appendValueInput("time2")
          .setCheck("Number")
          .appendField("time2>");
      this.appendValueInput("linear")
          .setCheck("Number")
          .appendField("linear>");
      this.appendValueInput("angular")
          .setCheck("Number")
          .appendField("angular>");
      this.setInputsInline(true);
      this.setColour(230);
      this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   this.setTooltip("Set Time, linear & angular speed");
   this.setHelpUrl("");
    }
};
// features blocks
Blockly.Blocks['features'] = {
init: () => {
    this.appendDummyInput()
        .appendField("Feature Settings >")
        .appendField(new Blockly.FieldDropdown([["Screen","1"], ["Speaker","2"], ["Lights","3"]]), "feature");
    this.appendValueInput("time1")
        .setCheck("Number")
        .appendField("time1");
    this.appendValueInput("time2")
        .setCheck("Number")
        .appendField("time2");
    this.appendValueInput("mode")
        .setCheck("String")
        .appendField("mode");
    this.appendValueInput("value")
        .setCheck("Number")
        .appendField("value");
    this.setInputsInline(true);
    this.setColour(240);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
this.setTooltip("Set feature, timing, mode & value");
this.setHelpUrl("");
}
};
// routine blocks
Blockly.Blocks['routines'] = {
    init: () => {
      this.appendDummyInput()
          .appendField("Routine");
      this.appendValueInput("id")
          .setCheck("Number")
          .appendField("id >");
      this.appendValueInput("cycles")
          .setCheck("Number")
          .appendField("cycles >");
      this.appendStatementInput("routineList")
          .setCheck(["features", "moves"])
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, "Routine");
      this.setColour(0);
      this.setTooltip("Set a new routine");
      this.setHelpUrl("");
    }
  };

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
Blockly.JavaScript['rawStartBlock'] = function(block) {
    var valueXml = Blockly.JavaScript.valueToCode(block, 'xmlVersion', Blockly.JavaScript.ORDER_ATOMIC);
    var valueEncoding = Blockly.JavaScript.valueToCode(block, 'encoding', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `
    <?xml version=${valueXml} encoding=${valueEncoding}?>
    `;
    return code;
};

Blockly.JavaScript['moves'] = function(block) {
    var valueTime1 = Blockly.JavaScript.valueToCode(block, 'time1', Blockly.JavaScript.ORDER_ATOMIC);
    var valueTime2 = Blockly.JavaScript.valueToCode(block, 'time2', Blockly.JavaScript.ORDER_ATOMIC);
    var valueLinear = Blockly.JavaScript.valueToCode(block, 'linear', Blockly.JavaScript.ORDER_ATOMIC);
    var valueAngular = Blockly.JavaScript.valueToCode(block, 'angular', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `<action type='0' time_1='${valueTime1}' time_2='${valueTime2}' linear='${valueLinear}' angular='${valueAngular}'></action>\n`;
    return code;
};


Blockly.JavaScript['features'] = function(block) {
    var dropdownFeature = block.getFieldValue('feature');
    var valueTime1 = Blockly.JavaScript.valueToCode(block, 'time1', Blockly.JavaScript.ORDER_ATOMIC);
    var valueTime2 = Blockly.JavaScript.valueToCode(block, 'time2', Blockly.JavaScript.ORDER_ATOMIC);
    var valueMode = Blockly.JavaScript.valueToCode(block, 'mode', Blockly.JavaScript.ORDER_ATOMIC);
    var valueValue = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `<action type=${dropdownFeature} time_1='${valueTime1}' time_2='${valueTime2}' mode=${valueMode} value='${valueValue}'></action>\n`;
    return code;
};

Blockly.JavaScript['routines'] = function(block) {
    var valueId = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);
    var valueCycles = Blockly.JavaScript.valueToCode(block, 'cycles', Blockly.JavaScript.ORDER_ATOMIC);
    var statementsRoutinelist = Blockly.JavaScript.statementToCode(block, 'routineList');
    var code = `
    <routine id ='${valueId}' cycles='${valueCycles}'>
    \t${statementsRoutinelist}
    </routine>
    `;
    return code;
  };