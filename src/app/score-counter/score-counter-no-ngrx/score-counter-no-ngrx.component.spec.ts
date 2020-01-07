import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreCounterNoNgrxComponent } from './score-counter-no-ngrx.component';

describe('ScoreCounterNoNgrxComponent', () => {
  let component: ScoreCounterNoNgrxComponent;
  let fixture: ComponentFixture<ScoreCounterNoNgrxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreCounterNoNgrxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreCounterNoNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
