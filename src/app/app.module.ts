import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ChartComponent } from './components/chart/chart.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { QrCodeModule } from 'ng-qrcode';
import { QrComponent } from './components/qr/qr.component';
import { TicketTableComponent } from './components/ticket-table/ticket-table.component';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ChartComponent,
    TicketComponent,
    QrComponent,
    TicketTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QrCodeModule ,
    BrowserModule,
    TableModule,
    PaginatorModule,
    ButtonModule,
    FormsModule // Include FormsModule

    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
