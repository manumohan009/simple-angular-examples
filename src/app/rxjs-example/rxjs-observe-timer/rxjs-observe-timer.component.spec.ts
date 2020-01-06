import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsObserveTimerComponent } from './rxjs-observe-timer.component';

describe('RxjsObserveTimerComponent', () => {
  let component: RxjsObserveTimerComponent;
  let fixture: ComponentFixture<RxjsObserveTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsObserveTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsObserveTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
