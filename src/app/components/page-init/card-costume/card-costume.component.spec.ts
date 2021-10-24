import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCostumeComponent } from './card-costume.component';

describe('CardCostumeComponent', () => {
  let component: CardCostumeComponent;
  let fixture: ComponentFixture<CardCostumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCostumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCostumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
