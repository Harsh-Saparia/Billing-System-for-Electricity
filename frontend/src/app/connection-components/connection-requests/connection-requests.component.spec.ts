import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionRequestsComponent } from './connection-requests.component';

describe('ConnectionRequestsComponent', () => {
  let component: ConnectionRequestsComponent;
  let fixture: ComponentFixture<ConnectionRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectionRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
