import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingConnectionsComponent } from './pending-connections.component';

describe('PendingConnectionsComponent', () => {
  let component: PendingConnectionsComponent;
  let fixture: ComponentFixture<PendingConnectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingConnectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingConnectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
