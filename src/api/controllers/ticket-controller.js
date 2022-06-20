const model = require("../models/model");

class TicketController {
  getTickets(req,res){
    const response = model.getTickets();
    //console.log(response);
    res.send(response);
  }

  deleteTicket(req,res){
    res.send(model.deleteTicket(parseInt(req.params.id)));    
  }

  createTicket(req,res){
    /*
    const flightnumber = req.body.flightnumber;
    const price = req.body.price;
    console.log(price);
*/
    const ticket = req.body;
    model.addTicket(ticket);
    res.send(ticket);
  }

  updateTicket(req, res) {    
    const id = parseInt(req.params.id);
    if (!model.getTicket(id)){
        res.status(404).send ('No ticket with id ${id} exists. Update not possible.');
        }else {
          const ticket = req.body;
          
              model.updateTicket(id, ticket);
              res.sendStatus(200);
        }        
  }

  getTicket(req, res) {    
    res.send(model.getTicket(parseInt(req.params.id)));
  }
}
 module.exports = new TicketController();