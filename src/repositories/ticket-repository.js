const CrudRepository = require("./crud-repository")
const {Ticket}=require('../models')

class TicketRepository extends CrudRepository{
    constructor(){
        super(Ticket)
    }
    
    async getPendingEmails() {
        return Ticket.findAll({
            where: {
                status: 'PENDING'
            }
        })
    }
}

module.exports=TicketRepository