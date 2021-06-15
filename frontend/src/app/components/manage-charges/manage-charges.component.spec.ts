import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageChargesComponent } from './manage-charges.component';

describe('ManageChargesComponent', () => {
  let component: ManageChargesComponent;
  let fixture: ComponentFixture<ManageChargesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageChargesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageChargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
