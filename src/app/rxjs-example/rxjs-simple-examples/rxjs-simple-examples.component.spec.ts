import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsSimpleExamplesComponent } from './rxjs-simple-examples.component';

describe('RxjsSimpleExamplesComponent', () => {
  let component: RxjsSimpleExamplesComponent;
  let fixture: ComponentFixture<RxjsSimpleExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsSimpleExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsSimpleExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
