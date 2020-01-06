import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableExampleComponent } from './reusable-example.component';

describe('ReusableExampleComponent', () => {
  let component: ReusableExampleComponent;
  let fixture: ComponentFixture<ReusableExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReusableExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
