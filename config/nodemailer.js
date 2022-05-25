const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'fullstacktesting0@gmail.com',
        pass: 'Turrican1234'
    }
});
module.exports = transporter;
