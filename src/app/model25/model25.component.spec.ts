import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Model25Component } from './model25.component';

describe('Model25Component', () => {
  let component: Model25Component;
  let fixture: ComponentFixture<Model25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Model25Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Model25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
