import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarScoreComponent } from './editar-score.component';

describe('EditarScoreComponent', () => {
  let component: EditarScoreComponent;
  let fixture: ComponentFixture<EditarScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
