class Ticket {
    constructor( flightnumber, price) {      
     this.flightnumber=flightnumber;      
        this.price = price;
        
    }
  }

class TicketModel{
    static TICKET_ID = 1;

    constructor() {
      this.tickets= new Map();
    }

  addTicket(ticket) {
    ticket.id =TicketModel.TICKET_ID;
    this.tickets.set(ticket.id, ticket);
    TicketModel.TICKET_ID++;  
    return ticket; 
  }

  updateTicket(id, ticket) {    
    const target = this.getTicket(id);
    if (!target) {
        throw new Error ('Ticket with $ {id}does not exist')

    }
    Object.assign(target,ticket);
    return target;
}


  getTickets() {
    return Array.from(this.tickets.values());
  }

  getTicket(id) {    
    return this.tickets.get(id);
  }

  deleteTicket(id) {
    this.tickets.delete(id);    
    TicketModel.TICKET_ID--;
    return 'deleted';
  }
}

const model = new TicketModel();
model.addTicket(new Ticket("lh2022",20));
model.addTicket(new Ticket("mh2023",30));
model.addTicket(new Ticket("th2024",40));

module.exports = model;