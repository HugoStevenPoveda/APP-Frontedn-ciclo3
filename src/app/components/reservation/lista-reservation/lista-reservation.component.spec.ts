import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaReservationComponent } from './lista-reservation.component';

describe('ListaReservationComponent', () => {
  let component: ListaReservationComponent;
  let fixture: ComponentFixture<ListaReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
