import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  htmlToAdd = "www.tazkty.com/4755";

  constructor(private clipboard: Clipboard) {}

  copyContent() {
    this.clipboard.copy(this.htmlToAdd); 
    alert('Content copied to clipboard!');
  }
}

