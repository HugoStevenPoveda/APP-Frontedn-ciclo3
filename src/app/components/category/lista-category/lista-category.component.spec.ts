import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCategoryComponent } from './lista-category.component';

describe('ListaCategoryComponent', () => {
  let component: ListaCategoryComponent;
  let fixture: ComponentFixture<ListaCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
