import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Model29Component } from './model29.component';

describe('Model29Component', () => {
  let component: Model29Component;
  let fixture: ComponentFixture<Model29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Model29Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Model29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
