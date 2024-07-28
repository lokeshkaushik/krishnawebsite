import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Model24Component } from './model24.component';

describe('Model24Component', () => {
  let component: Model24Component;
  let fixture: ComponentFixture<Model24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Model24Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Model24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
