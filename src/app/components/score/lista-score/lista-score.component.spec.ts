import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaScoreComponent } from './lista-score.component';

describe('ListaScoreComponent', () => {
  let component: ListaScoreComponent;
  let fixture: ComponentFixture<ListaScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
