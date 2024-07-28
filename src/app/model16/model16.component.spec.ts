import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Model16Component } from './model16.component';

describe('Model16Component', () => {
  let component: Model16Component;
  let fixture: ComponentFixture<Model16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Model16Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Model16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
