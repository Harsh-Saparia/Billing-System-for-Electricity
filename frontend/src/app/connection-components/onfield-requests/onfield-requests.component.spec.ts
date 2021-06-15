import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnfieldRequestsComponent } from './onfield-requests.component';

describe('OnfieldRequestsComponent', () => {
  let component: OnfieldRequestsComponent;
  let fixture: ComponentFixture<OnfieldRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnfieldRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnfieldRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
