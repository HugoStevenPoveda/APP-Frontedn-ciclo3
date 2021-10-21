import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarReservationComponent } from './agregar-reservation.component';

describe('AgregarReservationComponent', () => {
  let component: AgregarReservationComponent;
  let fixture: ComponentFixture<AgregarReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
