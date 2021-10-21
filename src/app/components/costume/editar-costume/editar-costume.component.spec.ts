import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCostumeComponent } from './editar-costume.component';

describe('EditarCostumeComponent', () => {
  let component: EditarCostumeComponent;
  let fixture: ComponentFixture<EditarCostumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarCostumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCostumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
