// import { Component, Input } from '@angular/core';

// @Component({
//   selector: 'app-ticket-table',
//   templateUrl: './ticket-table.component.html',
//   styleUrls: ['./ticket-table.component.css']
// })
// export class TicketTableComponent {
//   @Input() searchTerm: string = '';
//   tickets = [
//     { 
//       username: 'أحمد محمود', 
//       ticketNumber: 'C-101', 
//       price: '$40', 
//       cinema: 'سينما مصر, مول العرب', 
//       people: 1, 
//       purchases: 'اربع مرات', 
//       avatar: 'path-to-avatar-image'
//     },
//     { 
//       username: 'أحمد محمود', 
//       ticketNumber: 'C-102', 
//       price: '$20', 
//       cinema: 'سينما مصر, مول العرب', 
//       people: 2, 
//       purchases: 'خمس مرات', 
      
//     },
//     { 
//       username: 'أحمد محمود', 
//       ticketNumber: 'C-103', 
//       price: '$42', 
//       cinema: 'سينما مصر, مول العرب', 
//       people: 3, 
//       purchases: 'مرة واحدة', 
      
//     },
//     { 
//       username: 'أحمد محمود', 
//       ticketNumber: 'C-104', 
//       price: '$36', 
//       cinema: 'سينما مصر, مول العرب', 
//       people: 4, 
//       purchases: 'مرتين', 
      
//     },
//     { 
//       username: 'أحمد محمود', 
//       ticketNumber: 'C-105', 
//       price: '$50', 
//       cinema: 'سينما مصر, مول العرب', 
//       people: 5, 
//       purchases: 'مرة واحدة', 
      
//     },
    
//   ];

//   // Define options for dropdown
//   options = [
//     { label: '5 rows', value: 5 },
//     { label: '10 rows', value: 10 },
//     { label: '20 rows', value: 20 }
//   ];
//   get filteredTickets() {
//     // Apply filtering based on search term
//     return this.tickets.filter(ticket => 
//       ticket.username.includes(this.searchTerm) ||
//       ticket.ticketNumber.includes(this.searchTerm) ||
//       ticket.cinema.includes(this.searchTerm) ||
//       ticket.price.includes(this.searchTerm)
//     );
//   }

// }
























import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ticket-table',
  templateUrl: './ticket-table.component.html',
  styleUrls: ['./ticket-table.component.css']
})
export class TicketTableComponent {
  @Input() searchTerm: string = '';
  tickets = [
    { 
      username: 'أحمد محمود', 
      ticketNumber: 'C-101', 
      price: '$40', 
      cinema: 'سينما مصر, مول العرب', 
      people: 1, 
      purchases: 'اربع مرات', 
      avatar: 'path-to-avatar-image'
    },
    { 
      username: 'أحمد محمود', 
      ticketNumber: 'C-102', 
      price: '$20', 
      cinema: 'سينما مصر, مول العرب', 
      people: 2, 
      purchases: 'خمس مرات', 
    },
    { 
      username: 'أحمد محمود', 
      ticketNumber: 'C-103', 
      price: '$42', 
      cinema: 'سينما مصر, مول العرب', 
      people: 3, 
      purchases: 'مرة واحدة', 
    },
    { 
      username: 'أحمد محمود', 
      ticketNumber: 'C-104', 
      price: '$36', 
      cinema: 'سينما مصر, مول العرب', 
      people: 4, 
      purchases: 'مرتين', 
    },
    { 
      username: 'أحمد محمود', 
      ticketNumber: 'C-105', 
      price: '$50', 
      cinema: 'سينما مصر, مول العرب', 
      people: 5, 
      purchases: 'مرة واحدة', 
    },
  ];

  options = [
    { label: '5 rows', value: 5 },
    { label: '10 rows', value: 10 },
    { label: '20 rows', value: 20 }
  ];

  get filteredTickets() {
    return this.tickets.filter(ticket => 
      ticket.username.includes(this.searchTerm) ||
      ticket.ticketNumber.includes(this.searchTerm) ||
      ticket.cinema.includes(this.searchTerm) ||
      ticket.price.includes(this.searchTerm)
    );
  }
}
