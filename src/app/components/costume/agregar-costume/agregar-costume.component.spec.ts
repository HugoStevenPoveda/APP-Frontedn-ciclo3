import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCostumeComponent } from './agregar-costume.component';

describe('AgregarCostumeComponent', () => {
  let component: AgregarCostumeComponent;
  let fixture: ComponentFixture<AgregarCostumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarCostumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarCostumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
