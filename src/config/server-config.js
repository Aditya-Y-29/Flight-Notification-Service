const dotenv = require('dotenv');
const path = require('path');

const envPath = path.resolve(__dirname, '../../.env');
dotenv.config({path: envPath})


module.exports={
    PORT: process.env.PORT,
    MAIL_PASSWORD: process.env.MAIL_PASSWORD,
    MAIL_ADDRESS: process.env.MAIL_ADDRESS
}