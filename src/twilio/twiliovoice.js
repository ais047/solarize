// Twilio Credentials 
let vmail = require('./voice')
var accountSid = 'ACca5b7d9accca612e21697fde01d221a8'; 
var authToken = '1aaa373ba0aacedca82d4d67571b7b0c'; 

//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 

function voice(to, msg){
client.calls.create({ 
	url: vmail,
    to: to, 
    from: "+18582391142" 
}, function(err, message) { 
    console.log(message); 
});
};

module.exports = voice;