import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMesageComponent } from './lista-mesage.component';

describe('ListaMesageComponent', () => {
  let component: ListaMesageComponent;
  let fixture: ComponentFixture<ListaMesageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaMesageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMesageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
