const express =require('express');
const amqplib=require('amqplib')

const {TicketService}=require('./services')
const queue='Notification-Queue'
async function connectToQueue(){
    try {
        const connection = await amqplib.connect('amqp://localhost');
        const channel = await connection.createChannel();
        channel.consume(queue, async (data)=>{
            const object=JSON.parse(`${Buffer.from(data.content)}`);
            await TicketService.sendEmail('notificationservice@gmail.com',object.recepientEmail,object.subject,object.text);
            channel.ack(data)
        })
    } catch (error) {
        console.log(error)
        throw error
    }
}

const {ServerConfig, Logger}=require('./config');
const apiRoutes = require('./routes');

const app=express()
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/api',apiRoutes)

app.listen(ServerConfig.PORT,async ()=>{
    console.log(`successfully started server at ${ServerConfig.PORT}`);
    Logger.info({
        level: 'info',
        message: 'Hello distributed log files!'
    });
    await connectToQueue()
})