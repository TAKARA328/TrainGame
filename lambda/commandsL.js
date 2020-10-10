const commandsLjson = {
  type      : "Alexa.Presentation.APL.ExecuteCommands",
  version   : '1.1',
  token     : "PageToken",
  commands  : [
    {
      type: "SetValue",
      componentId: "Image_Left",
      property: "source",
      value: "https://dl.dropboxusercontent.com/s/dpibiaixvd875qi/chara07.png"
    },
    {
      type: "SetValue",
      componentId: "Image_Left_FUKIDASHI",
      property: "source",
      value: "https://dl.dropboxusercontent.com/s/ykjtwt2p6nhwemw/iine.png"
    },
    {
      type: "AnimateItem",
      componentId : "Image_Left",
      easing: "ease-in-out",
      duration: 3000,
      value:[
        {
          property: "opacity",
          to: 1
        },
        {
          property: "transform",
          from: [
            {translateX: -100},
          ],
          to: [
            {translateX: 0},
          ]
        }
      ]
    },
    {
      type: "AnimateItem",
      componentId : "Image_Left_FUKIDASHI",
      easing: "ease-in-out",
      duration: 1000,
      value:[
        {
          property: "opacity",
          to: 1
        },
        {
          property: "transform",
          from: [
            {translateY: 0},
          ],
          to: [
            {translateY: 50},
          ]
        }
      ]
    },
    {
      type: "SendEvent",
      arguments: [
        "next"
      ]
    },          
  ]
};
module.exports = commandsLjson;