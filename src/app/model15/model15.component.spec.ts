import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Model15Component } from './model15.component';

describe('Model15Component', () => {
  let component: Model15Component;
  let fixture: ComponentFixture<Model15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Model15Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Model15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
