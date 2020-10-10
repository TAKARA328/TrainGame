const commandsStopjson = {
  type      : "Alexa.Presentation.APL.ExecuteCommands",
  version   : '1.1',
  token     : "PageToken",
  commands  : [
    {
      type: "SetValue",
      componentId: "TouchWrapper_Video",
      property: "disabled",
      value: true
    },
    {
      type: "ControlMedia",
      componentId: "Video_Main",
      command: "pause"
    },
    {
      type: "SendEvent",
      componentId: "masterContainer",
      arguments: [
          "result", "${videoEvent}"
      ]
    }
  ]
};
module.exports = commandsStopjson;