import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketTableComponent } from './ticket-table.component';

describe('TicketTableComponent', () => {
  let component: TicketTableComponent;
  let fixture: ComponentFixture<TicketTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketTableComponent]
    });
    fixture = TestBed.createComponent(TicketTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
