import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyConnectionsComponent } from './my-connections.component';

describe('MyConnectionsComponent', () => {
  let component: MyConnectionsComponent;
  let fixture: ComponentFixture<MyConnectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyConnectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyConnectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
