import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCostumeComponent } from './lista-costume.component';

describe('ListaCostumeComponent', () => {
  let component: ListaCostumeComponent;
  let fixture: ComponentFixture<ListaCostumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCostumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCostumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
