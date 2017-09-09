let email = require('./sendgrid');
let sms = require ('./twiliosms');
let voice = require('./twiliovoice')
//Email function format : email(Email TO, Subject Title, Body)
//SMS function format : (Phone number TO, Body)
//Voice function format : (Phone number TO, URL to voice message)

//Twilio Does not work right now, Need to purchase a number before being able to make calls and SMS

//Examples: 
// email("hursungwoo@yahoo.com", "Hi", "Hello");
// sms(8582263464, "Hi");
voice(8582263464)