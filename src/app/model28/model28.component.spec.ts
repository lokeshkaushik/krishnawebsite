import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Model28Component } from './model28.component';

describe('Model28Component', () => {
  let component: Model28Component;
  let fixture: ComponentFixture<Model28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Model28Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Model28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
