import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPendingConnectionsComponent } from './view-pending-connections.component';

describe('ViewPendingConnectionsComponent', () => {
  let component: ViewPendingConnectionsComponent;
  let fixture: ComponentFixture<ViewPendingConnectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPendingConnectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPendingConnectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
