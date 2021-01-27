import Blockly from 'blockly';
import 'blockly/javascript';

Blockly.Blocks['startBlock'] = {
    init: function() {
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
    init: function() {
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
    init: function() {
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
init: function() {
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
    init: function() {
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
    var value_maintainer = Blockly.JavaScript.valueToCode(block, 'maintainer', Blockly.JavaScript.ORDER_ATOMIC);
    var value_mail = Blockly.JavaScript.valueToCode(block, 'mail', Blockly.JavaScript.ORDER_ATOMIC);
    var value_area = Blockly.JavaScript.valueToCode(block, 'area', Blockly.JavaScript.ORDER_ATOMIC);
    var value_xml = Blockly.JavaScript.valueToCode(block, 'xmlVersion', Blockly.JavaScript.ORDER_ATOMIC);
    var value_encoding = Blockly.JavaScript.valueToCode(block, 'encoding', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `
    <!--    
    Maintainer: ${value_maintainer}
    Mail: ${value_mail}
    ${value_area}
    -->
    <?xml version=${value_xml} encoding=${value_encoding}?>
    `;
    return code;
  };
Blockly.JavaScript['rawStartBlock'] = function(block) {
    var value_xml = Blockly.JavaScript.valueToCode(block, 'xmlVersion', Blockly.JavaScript.ORDER_ATOMIC);
    var value_encoding = Blockly.JavaScript.valueToCode(block, 'encoding', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `
    <?xml version=${value_xml} encoding=${value_encoding}?>
    `;
    return code;
};

Blockly.JavaScript['moves'] = function(block) {
    var value_time1 = Blockly.JavaScript.valueToCode(block, 'time1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_time2 = Blockly.JavaScript.valueToCode(block, 'time2', Blockly.JavaScript.ORDER_ATOMIC);
    var value_linear = Blockly.JavaScript.valueToCode(block, 'linear', Blockly.JavaScript.ORDER_ATOMIC);
    var value_angular = Blockly.JavaScript.valueToCode(block, 'angular', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `<action type='0' time_1='${value_time1}' time_2='${value_time2}' linear='${value_linear}' angular='${value_angular}'></action>\n`;
    return code;
};


Blockly.JavaScript['features'] = function(block) {
    var dropdown_feature = block.getFieldValue('feature');
    var value_time1 = Blockly.JavaScript.valueToCode(block, 'time1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_time2 = Blockly.JavaScript.valueToCode(block, 'time2', Blockly.JavaScript.ORDER_ATOMIC);
    var value_mode = Blockly.JavaScript.valueToCode(block, 'mode', Blockly.JavaScript.ORDER_ATOMIC);
    var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `<action type=${dropdown_feature} time_1='${value_time1}' time_2='${value_time2}' mode=${value_mode} value='${value_value}'></action>\n`;
    return code;
};

Blockly.JavaScript['routines'] = function(block) {
    var value_id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);
    var value_cycles = Blockly.JavaScript.valueToCode(block, 'cycles', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_routinelist = Blockly.JavaScript.statementToCode(block, 'routineList');
    var code = `
    <routine id ='${value_id}' cycles='${value_cycles}'>
    \t${statements_routinelist}
    </routine>
    `;
    return code;
  };