import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Model14Component } from './model14.component';

describe('Model14Component', () => {
  let component: Model14Component;
  let fixture: ComponentFixture<Model14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Model14Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Model14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
