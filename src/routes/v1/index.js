const express = require('express');
const router=express.Router();
const {InfoController}=require('../../controllers');
const ticketRoutes=require('./ticket-routes')

router.get('/info',InfoController.info)
router.use('/tickets',ticketRoutes)
module.exports=router