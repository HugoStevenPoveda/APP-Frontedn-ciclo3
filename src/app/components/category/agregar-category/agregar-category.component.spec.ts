import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCategoryComponent } from './agregar-category.component';

describe('AgregarCategoryComponent', () => {
  let component: AgregarCategoryComponent;
  let fixture: ComponentFixture<AgregarCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
