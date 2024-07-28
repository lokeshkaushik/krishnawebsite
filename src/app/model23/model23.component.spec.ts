import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Model23Component } from './model23.component';

describe('Model23Component', () => {
  let component: Model23Component;
  let fixture: ComponentFixture<Model23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Model23Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Model23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
