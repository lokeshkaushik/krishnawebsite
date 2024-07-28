import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Model19Component } from './model19.component';

describe('Model19Component', () => {
  let component: Model19Component;
  let fixture: ComponentFixture<Model19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Model19Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Model19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
