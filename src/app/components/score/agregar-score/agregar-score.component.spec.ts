import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarScoreComponent } from './agregar-score.component';

describe('AgregarScoreComponent', () => {
  let component: AgregarScoreComponent;
  let fixture: ComponentFixture<AgregarScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
