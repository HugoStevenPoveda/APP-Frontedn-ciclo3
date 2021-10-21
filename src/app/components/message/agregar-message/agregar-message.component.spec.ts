import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarMessageComponent } from './agregar-message.component';

describe('AgregarMessageComponent', () => {
  let component: AgregarMessageComponent;
  let fixture: ComponentFixture<AgregarMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
