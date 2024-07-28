import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Model12Component } from './model12.component';

describe('Model12Component', () => {
  let component: Model12Component;
  let fixture: ComponentFixture<Model12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Model12Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Model12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
