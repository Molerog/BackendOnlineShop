const nodemailer = require('nodemailer');

const {auth} = require('./config.json')['development']


let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth //Insert your email and password
    
});
module.exports = transporter;
