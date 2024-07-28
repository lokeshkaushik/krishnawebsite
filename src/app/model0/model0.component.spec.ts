import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Model0Component } from './model0.component';

describe('Model0Component', () => {
  let component: Model0Component;
  let fixture: ComponentFixture<Model0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Model0Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Model0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
