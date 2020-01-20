import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputThreeWaysComponent } from './input-three-ways.component';

describe('InputThreeWaysComponent', () => {
  let component: InputThreeWaysComponent;
  let fixture: ComponentFixture<InputThreeWaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputThreeWaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputThreeWaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
