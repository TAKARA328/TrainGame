// This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
// Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
// session persistence, api calls, and more.
const Alexa = require('ask-sdk-core');

const datajson         = require('./data.js');
const apljson          = require('./apl.js');
const layoutjson       = require('./layout.js');
const menujson         = require('./menu.js');
const commandsRjson    = require('./commandsR.js');
const commandsLjson    = require('./commandsL.js');
const commandsStopjson = require('./commandsStop.js');

const stages = [
    {
        token:'001', 
        author: '足立小台',
        url: 'https://dl.dropboxusercontent.com/s/3fx3k94dwqu0o1f/tn.mp4',
        image: 'https://dl.dropboxusercontent.com/s/8fpf0q1zoul0gci/bg.jpg',
        correct: 43800,
    }
];
let CORRECTTIME = 0;

/* Launch */
const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const viewportProfile = Alexa.getViewportProfile(handlerInput.requestEnvelope);
        if (viewportProfile === "UNKNOWN-VIEWPORT-PROFILE") {
            return handlerInput.responseBuilder
                .speak('画面付きデバイス専用です。')
                .withShouldEndSession(true)
                .getResponse();
        }
        apljson.datasources = datajson;
        apljson.document    = menujson;
        return handlerInput.responseBuilder
            .speak('電車ゲームはじめますか？')
            .reprompt('はじめますか？')
            .addDirective(apljson)
            .getResponse();
    }
};

/* Game Play */
const PlayIntentHandler = {
    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.YesIntent';
    },
    handle(handlerInput) {
        let l_stageno = Math.floor( Math.random() * stages.length );
        CORRECTTIME = stages[l_stageno].correct;
        datajson.bodyTemplate7Data.movie.sources[0].url = stages[l_stageno].url;
        apljson.datasources = datajson;
        apljson.document    = layoutjson;
        return handlerInput.responseBuilder
            .speak('')
            .reprompt('')
            .addDirective(apljson)
            .getResponse();
    },
};

/* APL Video Stop Commands */
const StopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent'
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder
            .speak('')
            .addDirective(commandsStopjson)
            .getResponse();
    }
};

/* APL User Event */
const UserEventHandler = {
    canHandle(handlerInput) {
      return (handlerInput.requestEnvelope.request.type === 'Alexa.Presentation.APL.UserEvent');
    },
    handle(handlerInput) {
        // Game Start
        if (handlerInput.requestEnvelope.request.arguments[0] === 'playmode'){
            return PlayIntentHandler.handle(handlerInput);
        }
        // Next Game
        if (handlerInput.requestEnvelope.request.arguments[0] === 'next'){
            return handlerInput.responseBuilder
                .speak("もう１回やりますか？")
                .reprompt("やりますか？")
                .getResponse();
        }
        // Result
        console.log('arguments: ' + JSON.stringify(handlerInput.requestEnvelope.request.arguments[1]));
        if (handlerInput.requestEnvelope.request.arguments[0] === 'result'){
            let resulttime = CORRECTTIME - handlerInput.requestEnvelope.request.arguments[1];
            if (resulttime > -10 && resulttime < 50) {
                commandsRjson.commands[0].value = 'https://dl.dropboxusercontent.com/s/m68dw6b1y0g4beo/chara01.png';
                commandsLjson.commands[0].value = 'https://dl.dropboxusercontent.com/s/m68dw6b1y0g4beo/chara01.png';
                commandsRjson.commands[1].value = 'https://dl.dropboxusercontent.com/s/ykjtwt2p6nhwemw/iine.png';
                commandsLjson.commands[1].value = 'https://dl.dropboxusercontent.com/s/ykjtwt2p6nhwemw/iine.png';
            } else if (resulttime > -10 && resulttime < 200) {
                commandsRjson.commands[0].value = 'https://dl.dropboxusercontent.com/s/dpibiaixvd875qi/chara07.png';
                commandsLjson.commands[0].value = 'https://dl.dropboxusercontent.com/s/dpibiaixvd875qi/chara07.png';
                commandsRjson.commands[1].value = 'https://dl.dropboxusercontent.com/s/ykjtwt2p6nhwemw/iine.png';
                commandsLjson.commands[1].value = 'https://dl.dropboxusercontent.com/s/ykjtwt2p6nhwemw/iine.png';
            } else if (resulttime > -10 && resulttime < 500) {
                commandsRjson.commands[0].value = 'https://dl.dropboxusercontent.com/s/ghzsi88i8ap1c3x/chara05.png';
                commandsLjson.commands[0].value = 'https://dl.dropboxusercontent.com/s/ghzsi88i8ap1c3x/chara05.png';
                commandsRjson.commands[1].value = 'https://dl.dropboxusercontent.com/s/ud2xn8kbnkoaya9/warau.png';
                commandsLjson.commands[1].value = 'https://dl.dropboxusercontent.com/s/ud2xn8kbnkoaya9/warau.png';
            } else {
                commandsRjson.commands[0].value = 'https://dl.dropboxusercontent.com/s/nyr25cbhx9pl024/chara04.png';
                commandsLjson.commands[0].value = 'https://dl.dropboxusercontent.com/s/nyr25cbhx9pl024/chara04.png';
                commandsRjson.commands[1].value = 'https://dl.dropboxusercontent.com/s/n13btdijdwkxe4y/hatena.png';
                commandsLjson.commands[1].value = 'https://dl.dropboxusercontent.com/s/n13btdijdwkxe4y/hatena.png';
            }
            // Set APL Commands
            if ( Math.floor( Math.random() * 2 ) === 0){
                handlerInput.responseBuilder
                    .addDirective(commandsRjson)
            } else {
                handlerInput.responseBuilder
                    .addDirective(commandsLjson)
            }
        }
    return handlerInput.responseBuilder
        .speak('')
        .getResponse();
    },
};

/* Help Intent Handler */
const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder
            .speak('電車ゲームです。続けますか')
            .reprompt('電車ゲームです。続けますか')
            .getResponse();
    }
};

/* Help Intent Handle */
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
            ||  Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.NoIntent');
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder
            .speak('また、あそんでね。!')
            .withShouldEndSession(true)
            .getResponse();
    }
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};

// The intent reflector is used for interaction model testing and debugging.
// It will simply repeat the intent the user said. You can create custom handlers
// for your intents by defining them above, then also adding them to the request
// handler chain below.
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

// Generic error handling to capture any syntax or routing errors. If you receive an error
// stating the request handler chain is not found, you have not implemented a handler for
// the intent being invoked or included it in the skill builder below.
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${error.stack}`);
        const speakOutput = `Sorry, I had trouble doing what you asked. Please try again.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

// The SkillBuilder acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        PlayIntentHandler,
        UserEventHandler,
        StopIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler, // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers
        ) 
    .addErrorHandlers(
        ErrorHandler,
        )
    .lambda();
