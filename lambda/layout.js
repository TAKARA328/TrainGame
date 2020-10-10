const layoutjson = {
    "type"     : "APL",
    "version"  : "1.1",
    "settings" : {
        "idleTimeout": 120000
    },
    "theme"  : "dark",
    "import" : [
        {
            "name"    : "alexa-layouts",
            "version" : "1.1.0"
        }
    ],
    "resources": [
        {
            "description" : "Stock color for the light theme",
            "colors"      : {
                "colorTextPrimary": "#151920"
            }
        },
        {
            "description" : "Stock color for the dark theme",
            "when"        : "${viewport.theme == 'dark'}",
            "colors"      : {
                "colorTextPrimary": "#f0f1ef"
            }
        },
        {
            "description" : "Standard font sizes",
            "dimensions"  : {
                "textSizeBody"         : 48,
                "textSizePrimary"      : 27,
                "textSizeSecondary"    : 23,
                "textSizeSecondaryHint": 25
            }
        },
        {
            "description" : "Common spacing values",
            "dimensions"  : {
                "spacingThin"          : 6,
                "spacingSmall"         : 12,
                "spacingMedium"        : 24,
                "spacingLarge"         : 48,
                "spacingExtraLarge"    : 72
            }
        },
        {
            "description" : "Common margins and padding",
            "dimensions"  : {
                "marginTop"            : 40,
                "marginLeft"           : 60,
                "marginRight"          : 60,
                "marginBottom"         : 40
            }
        }
    ],
    "styles": {
        "textStyleBase"     : {
            "description"   : "Base font description; set color",
            "values"        : [
                {
                    "color"   : "@colorTextPrimary"
                }
            ]
        },
        "textStyleBase0"    : {
            "description"   : "Thin version of basic font",
            "extend"        : "textStyleBase",
            "values"        : {
                "fontWeight"  : "100"
            }
        },
        "textStyleBase1"    : {
            "description"   : "Light version of basic font",
            "extend"        : "textStyleBase",
            "values"        : {
                "fontWeight"  : "300"
            }
        },
        "mixinBody"         : {
            "values"        : {
                "fontSize"    : "@textSizeBody"
            }
        },
        "mixinPrimary"      : {
            "values"        : {
                "fontSize"    : "@textSizePrimary"
            }
        },
        "mixinSecondary"    : {
            "values"        : {
                "fontSize"    : "@textSizeSecondary"
            }
        },
        "textStylePrimary"  : {
            "extend"        : [
                "textStyleBase1",
                "mixinPrimary"
            ]
        },
        "textStyleSecondary": {
            "extend"        : [
                "textStyleBase0",
                "mixinSecondary"
            ]
        },
        "textStyleBody": {
            "extend": [
                "textStyleBase1",
                "mixinBody"
            ]
        },
        "textStyleSecondaryHint": {
            "values": {
                "fontFamily": "Bookerly",
                "fontStyle": "italic",
                "fontSize": "@textSizeSecondaryHint",
                "color": "@colorTextPrimary"
            }
        }
    },
    "graphics": {},
    "layouts": {},
    "mainTemplate": {
        "parameters": [
            "payload"
        ],
        "items": [
            {
                "when": "${@viewportSizeClass == @viewportClassMediumSmall}",
                "type": "Container",
                "height": "100vh",
                "width": "100vw",
                "alignItems": "center",
                "id": "masterContainer",
                "bind": [
                    {
                      "name": "videoEvent",
                      "value": {}
                    }
                  ],
                "items": [
                    {
                        "type": "Image",
                        "source": "${payload.bodyTemplate7Data.backgroundImage.sources[0].url}",
                        "scale": "best-fill",
                        "position": "absolute",
                        "width": "100vw",
                        "height": "100vh"
                    },
                    {
                        "type": "Image",
                        "id": "Image_Menu_01",
                        "source": "${payload.bodyTemplate7Data.image.sources[2].url}",
                        "scale": "best-fit",
                        "align": "bottom",
                        "width": "200",
                        "height": "50",
                    },
                    {
                        "type": "Container",
                        "paddingLeft": "5vw",
                        "paddingRight": "5vw",
                        "paddingBottom": "5vh",
                        "alignItems": "center",
                        "direction": "row",
                        "items": [
                            {
                                "type": "Container",
                                "direction": "column",
                                "items": [
                                    {
                                        "type": "Image",
                                        "id": "Image_Left_FUKIDASHI",
                                        "source": "https://dl.dropboxusercontent.com/s/ykjtwt2p6nhwemw/iine.png",
                                        "scale": "best-fit",
                                        "align": "bottom",
                                        "width": "113",
                                        "height": "195",
                                        "opacity": 0
                                    },
                                    {
                                        "type": "Image",
                                        "id": "Image_Left",
                                        "source": "https://dl.dropboxusercontent.com/s/mqgpy7chbm3tqiz/chara06.png",
                                        "scale": "best-fit",
                                        "align": "bottom",
                                        "width": "225",
                                        "height": "225",
                                        "opacity": 0
                                    }
                                ]
                            },
                            {
                                "type": "Container",
                                "direction": "column",
                                "items": [
                                    {
                                        "type": "TouchWrapper",
                                        "id": "TouchWrapper_Video",
                                        "disabled": false,
                                        "paddingLeft": 1,
                                        "paddingBottom": 1,
                                        "item": {
                                            "type": "Video",
                                            "id": "Video_Main",
                                            "source": "${payload.bodyTemplate7Data.movie.sources[0].url}",
                                            "autoplay": true,
                                            "scale": "best-fit",
                                            "width": 320,
                                            "height": 240,
                                            "onPause": [
                                                {
                                                    "type": "SetValue",
                                                    "description": "Set event info",
                                                    "componentId": "masterContainer",
                                                    "property": "videoEvent",
                                                    "value": "${event.currentTime}"
                                                }
                                            ],
                                            "onEnd": [
                                                {
                                                    "type": "SetValue",
                                                    "componentId": "TouchWrapper_Video",
                                                    "property": "disabled",
                                                    "value": true
                                                },                         
                                                {
                                                    "type": "SendEvent",
                                                    "componentId": "Video_Main",
                                                    "arguments": [
                                                        "result", "${event.currentTime}"
                                                    ]        
                                                },
                                            ]
                                        },
                                        "onPress": [
                                            {
                                                "type": "SetValue",
                                                "componentId": "TouchWrapper_Video",
                                                "property": "disabled",
                                                "value": true
                                            },                         
                                            {
                                                "type": "ControlMedia",
                                                "componentId": "Video_Main",
                                                "command": "pause"
                                            },
                                            {
                                                "type": "SendEvent",
                                                "componentId": "Video_Main",
                                                "arguments": [
                                                  "result", "${videoEvent}"
                                                ]        
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "type": "Container",
                                "direction": "column",
                                "items": [
                                    {
                                        "type": "Image",
                                        "id": "Image_Right_FUKIDASHI",
                                        "source": "https://dl.dropboxusercontent.com/s/ykjtwt2p6nhwemw/iine.png",
                                        "scale": "best-fit",
                                        "align": "bottom",
                                        "width": "113",
                                        "height": "195",
                                        "opacity": 0
                                    },
                                    {
                                        "type": "Image",
                                        "id": "Image_Right",
                                        "source": "https://dl.dropboxusercontent.com/s/mqgpy7chbm3tqiz/chara06.png",
                                        "scale": "best-fit",
                                        "align": "bottom",
                                        "width": "225",
                                        "height": "225",
                                        "opacity": 0
                                    }
                                ]
                            },
                        ]
                    },
                ]
            },
            {
                "when": "${@viewportProfile == @hubLandscapeLarge}",
                "type": "Container",
                "height": "100vh",
                "width": "100vw",
                "alignItems": "center",
                "id": "masterContainer",
                "bind": [
                    {
                      "name": "videoEvent",
                      "value": {}
                    }
                  ],
                "items": [
                    {
                        "type": "Image",
                        "source": "${payload.bodyTemplate7Data.backgroundImage.sources[0].url}",
                        "scale": "best-fill",
                        "position": "absolute",
                        "width": "100vw",
                        "height": "100vh"
                    },
                    {
                        "type": "Image",
                        "id": "Image_Title_01",
                        "source": "${payload.bodyTemplate7Data.image.sources[2].url}",
                        "scale": "best-fit",
                        "align": "bottom",
                        "width": "400",
                        "height": "100",
                    },
                    {
                        "type": "Container",
                        "paddingLeft": "5vw",
                        "paddingRight": "5vw",
                        "paddingBottom": "5vh",
                        "alignItems": "center",
                        "direction": "row",
                        "items": [
                            {
                                "type": "Container",
                                "direction": "column",
                                "items": [
                                    {
                                        "type": "Image",
                                        "id": "Image_Left_FUKIDASHI",
                                        "source": "https://dl.dropboxusercontent.com/s/ykjtwt2p6nhwemw/iine.png",
                                        "scale": "none",
                                        "align": "bottom",
                                        "width": "150",
                                        "height": "260",
                                        "opacity": 0
                                    },
                                    {
                                        "type": "Image",
                                        "id": "Image_Left",
                                        "source": "https://dl.dropboxusercontent.com/s/mqgpy7chbm3tqiz/chara06.png",
                                        "scale": "none",
                                        "align": "bottom",
                                        "width": "300",
                                        "height": "300",
                                        "opacity": 0
                                    }
                                ]
                            },
                            {
                                "type": "Container",
                                "direction": "column",
                                "items": [
                                    {
                                        "type": "TouchWrapper",
                                        "id": "TouchWrapper_Video",
                                        "disabled": false,
                                        "paddingLeft": 1,
                                        "paddingBottom": 1,
                                        "item": {
                                            "type": "Video",
                                            "id": "Video_Main",
                                            "source": "${payload.bodyTemplate7Data.movie.sources[0].url}",
                                            "autoplay": true,
                                            "width": 640,
                                            "height": 480,
                                            "onPause": [
                                                {
                                                    "type": "SetValue",
                                                    "description": "Set event info",
                                                    "componentId": "masterContainer",
                                                    "property": "videoEvent",
                                                    "value": "${event.currentTime}"
                                                }
                                            ],
                                            "onEnd": [
                                                {
                                                    "type": "SetValue",
                                                    "componentId": "TouchWrapper_Video",
                                                    "property": "disabled",
                                                    "value": true
                                                },                         
                                                {
                                                    "type": "SendEvent",
                                                    "componentId": "Video_Main",
                                                    "arguments": [
                                                        "result", "${event.currentTime}"
                                                    ]        
                                                },
                                            ]
                                        },
                                        "onPress": [
                                            {
                                                "type": "SetValue",
                                                "componentId": "TouchWrapper_Video",
                                                "property": "disabled",
                                                "value": true
                                            },              
                                            {
                                                "type": "ControlMedia",
                                                "componentId": "Video_Main",
                                                "command": "pause"
                                            },
                                            {
                                                "type": "SendEvent",
                                                "componentId": "Video_Main",
                                                "arguments": [
                                                    "result", "${videoEvent}"
                                                ]        
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "type": "Container",
                                "direction": "column",
                                "items": [
                                    {
                                        "type": "Image",
                                        "id": "Image_Right_FUKIDASHI",
                                        "source": "https://dl.dropboxusercontent.com/s/ykjtwt2p6nhwemw/iine.png",
                                        "scale": "none",
                                        "align": "bottom",
                                        "width": "150",
                                        "height": "260",
                                        "opacity": 0
                                    },
                                    {
                                        "type": "Image",
                                        "id": "Image_Right",
                                        "source": "https://dl.dropboxusercontent.com/s/mqgpy7chbm3tqiz/chara06.png",
                                        "scale": "none",
                                        "align": "bottom",
                                        "width": "300",
                                        "height": "300",
                                        "opacity": 0
                                    }
                                ]
                            },
                        ]
                    },
                ]
            }
        ]
    }
};
module.exports = layoutjson;
