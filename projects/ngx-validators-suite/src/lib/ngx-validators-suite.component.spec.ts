import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxValidatorsSuiteComponent } from './ngx-validators-suite.component';

describe('NgxValidatorsSuiteComponent', () => {
  let component: NgxValidatorsSuiteComponent;
  let fixture: ComponentFixture<NgxValidatorsSuiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxValidatorsSuiteComponent]
    });
    fixture = TestBed.createComponent(NgxValidatorsSuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
