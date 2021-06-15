import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOnfieldRequestComponent } from './view-onfield-request.component';

describe('ViewOnfieldRequestComponent', () => {
  let component: ViewOnfieldRequestComponent;
  let fixture: ComponentFixture<ViewOnfieldRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOnfieldRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOnfieldRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
