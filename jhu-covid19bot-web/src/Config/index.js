export default {
    gateway: 'https://covid-19-v-02-susjcd.core.ushaflow.io', // <- enter your gateway URL here
    muted: false, // <- mute microphone at start
    start_suggestions: ["What is the coronavirus?", "What is social distancing?", "How can I protect myself and my family from coronavirus?"], // <- array of suggestions, displayed at the start screen
    fallback_lang: 'en', // <- fallback language code, if history mode or network is unavailable
    voice: 'native' // <- voice of Text-To-Speech; for reference, see: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisVoice/voiceURI
}