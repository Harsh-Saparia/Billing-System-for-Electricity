import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningConnectionsComponent } from './running-connections.component';

describe('RunningConnectionsComponent', () => {
  let component: RunningConnectionsComponent;
  let fixture: ComponentFixture<RunningConnectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunningConnectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunningConnectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
