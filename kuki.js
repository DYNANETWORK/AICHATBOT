const Slimbot = require('slimbot');
const slimbot = new Slimbot(process.env.token);
const Kukibot  =  require("./Kuki.js");
const kukiai  =  new  Kukibot({name: (process.env.name), owner: (process.env.owner)});



slimbot.on('message', message => {
var text = message.text
  kukiai.moe(text)
 .then(reply => {
  slimbot.sendMessage(message.chat.id, reply);
 })
if (message.text.toLowerCase()=='/start'){
        slimbot.sendMessage(message.chat.id, "I am kuki");
if (message.text.toLowerCase()=='hello'){
        slimbot.sendMessage(message.chat.id, "Hi Dear how are you");
if (message.text.toLowerCase()=='I am cool"){
        slimbot.sendMessage(message.chat.id, "Wow Dear nyc to hear");
if (message.text.toLowerCase()== 'Where are you from'){
        slimbot.sendMessage(message.chat.id, "DEAR FIRSTLY I AM A PROGRAM. I AM NOT HUMAN.I AM A ARTIFICIAL INTELLIGENCE BOT AND I AM PROGRAMMED BY OUR OWNER @SUKHPAL_KHERERA.");
  
                          
    }
});


slimbot.startPolling();
