import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IocreateComponent } from './iocreate.component';

describe('IocreateComponent', () => {
  let component: IocreateComponent;
  let fixture: ComponentFixture<IocreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IocreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IocreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
