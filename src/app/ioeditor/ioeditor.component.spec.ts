import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IoeditorComponent } from './ioeditor.component';

describe('IoeditorComponent', () => {
  let component: IoeditorComponent;
  let fixture: ComponentFixture<IoeditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IoeditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IoeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
