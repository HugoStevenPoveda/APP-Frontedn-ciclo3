import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCategoryComponent } from './editar-category.component';

describe('EditarCategoryComponent', () => {
  let component: EditarCategoryComponent;
  let fixture: ComponentFixture<EditarCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
