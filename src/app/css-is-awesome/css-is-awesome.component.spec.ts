import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssIsAwesomeComponent } from './css-is-awesome.component';

describe('CssIsAwesomeComponent', () => {
  let component: CssIsAwesomeComponent;
  let fixture: ComponentFixture<CssIsAwesomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CssIsAwesomeComponent]
    });
    fixture = TestBed.createComponent(CssIsAwesomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
