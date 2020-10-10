const menujson = {
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
                "items": [
                    {
                        "type": "Image",
                        "source": "${payload.bodyTemplate7Data.backgroundImage.sources[2].url}",
                        "scale": "best-fill",
                        "position": "absolute",
                        "width": "100vw",
                        "height": "100vh"
                    },
                    {
                        "type": "Container",
                        "paddingLeft": "5vw",
                        "paddingRight": "5vw",
                        "paddingTop": "5vh",
                        "paddingBottom": "5vh",
                        "alignItems": "center",
                        "direction": "col",
                        "items": [
                            {
                                "type": "Image",
                                "source": "${payload.bodyTemplate7Data.image.sources[2].url}",
                                "scale": "best-fit",
                                "align": "bottom",
                                "width": "200",
                                "height": "50",
                            },
                            {
                                "type": "Image",
                                "id"  : "Image_Menu_01",
                                "source": "${payload.bodyTemplate7Data.image.sources[0].url}",
                                "scale": "best-fit",
                                "align": "bottom",
                                "width": "320",
                                "height": "240",
                            },
                            {
                                "type": "TouchWrapper",
                                "id"  : "TouchWrapper_Menu_Start",
                                "disabled": false,
                                "paddingBottom": 1,
                                "paddingLeft": 1,
                                "item": {
                                    "type": "Image",
                                    "id"  : "Image_Menu_Start",
                                    "source": "${payload.bodyTemplate7Data.image.sources[1].url}",
                                    "scale": "best-fit",
                                    "align": "bottom",
                                    "width": "200",
                                    "height": "50",
                                },
                                "onPress": [
                                    {
                                        "type": "SetValue",
                                        "componentId": "TouchWrapper_Menu_Start",
                                        "property": "disabled",
                                        "value": true
                                    },                         
                                    {
                                        "type": "SendEvent",
                                        "componentId": "Image_Menu_Start",
                                        "arguments": [
                                            "playmode" ,"start"
                                        ]        
                                    },
                                ],
                            }
                        ]
                    }
                ]
            },
            {
                "when": "${@viewportProfile == @hubLandscapeLarge}",
                "type": "Container",
                "height": "100vh",
                "width": "100vw",
                "alignItems": "center",
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
                        "type": "Container",
                        "paddingLeft": "5vw",
                        "paddingRight": "5vw",
                        "paddingTop": "5vh",
                        "paddingBottom": "5vh",
                        "alignItems": "center",
                        "direction": "col",
                        "items": [
                            {
                                "type": "Image",
                                "id"  : "Image_Menu_01",
                                "source": "${payload.bodyTemplate7Data.image.sources[2].url}",
                                "scale": "best-fit",
                                "align": "bottom",
                                "width": "400",
                                "height": "100",
                            },
                            {
                                "type": "Image",
                                "id"  : "Image_Menu_01",
                                "source": "${payload.bodyTemplate7Data.image.sources[0].url}",
                                "scale": "best-fit",
                                "align": "bottom",
                                "width": "640",
                                "height": "480",
                            },
                            {
                                "type": "Container",
                                "paddingLeft": "5vw",
                                "paddingRight": "5vw",
                                "paddingTop": "5vh",
                                "paddingBottom": "5vh",
                                "alignItems": "center",
                                "direction": "col",
                                "items": [
                                    {
                                        "type": "TouchWrapper",
                                        "id": "TouchWrapper_Menu_Start",
                                        "disabled": false,
                                        "paddingBottom": 1,
                                        "paddingLeft": 1,
                                        "item": {
                                            "type": "Image",
                                            "id"  : "Image_Menu_Start",
                                            "source": "${payload.bodyTemplate7Data.image.sources[1].url}",
                                            "scale": "best-fit",
                                            "align": "bottom",
                                            "width": "400",
                                            "height": "100",
                                        },
                                        "onPress": [
                                            {
                                                "type": "SetValue",
                                                "componentId": "TouchWrapper_Menu_Start",
                                                "property": "disabled",
                                                "value": true
                                            },                         
                                            {
                                                "type": "SendEvent",
                                                "componentId": "Image_Menu_Start",
                                                "arguments": [
                                                    "playmode" ,"start"
                                                ]        
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
};
module.exports = menujson;
