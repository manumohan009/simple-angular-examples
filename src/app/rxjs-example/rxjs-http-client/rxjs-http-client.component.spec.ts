import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsHttpClientComponent } from './rxjs-http-client.component';

describe('RxjsHttpClientComponent', () => {
  let component: RxjsHttpClientComponent;
  let fixture: ComponentFixture<RxjsHttpClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsHttpClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsHttpClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
