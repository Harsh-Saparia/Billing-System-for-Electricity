import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeniedConnectionsComponent } from './denied-connections.component';

describe('DeniedConnectionsComponent', () => {
  let component: DeniedConnectionsComponent;
  let fixture: ComponentFixture<DeniedConnectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeniedConnectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeniedConnectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
