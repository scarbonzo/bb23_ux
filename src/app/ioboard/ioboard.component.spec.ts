import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IoboardComponent } from './ioboard.component';

describe('IoboardComponent', () => {
  let component: IoboardComponent;
  let fixture: ComponentFixture<IoboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IoboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IoboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
