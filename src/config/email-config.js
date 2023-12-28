const nodemailer = require("nodemailer");
const {MAIL_ADDRESS,MAIL_PASSWORD}=require('./server-config')

const mailSender = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: MAIL_ADDRESS,
    pass: MAIL_PASSWORD,
  },
});

module.exports=mailSender