import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarReservationComponent } from './editar-reservation.component';

describe('EditarReservationComponent', () => {
  let component: EditarReservationComponent;
  let fixture: ComponentFixture<EditarReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
