const {TicketRepository}=require('../repositories')
const {Mailer}=require('../config')

const ticketRepository=new TicketRepository()

async function sendEmail(mailFrom, mailTo, subject, content){
    try {
        const response = await Mailer.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: subject,
            text: content
        });
        console.log(response);
    } catch(error) {
        console.log(error);
        throw error
    }
}

async function createTicket(data){
    try {
        const ticket =await ticketRepository.create(data)
        return ticket
    } catch (error) {
        console.log(error)
        throw error
    }
}

async function getPendingEmails(){
    try {
        const tickets=await ticketRepository.getAll()
        return tickets     
    } catch (error) {
        console.log(error)
        throw error
    }
}

module.exports={
    getPendingEmails,
    sendEmail,
    createTicket
}