import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Upmodal3Component } from './upmodal3.component';

describe('Upmodal3Component', () => {
  let component: Upmodal3Component;
  let fixture: ComponentFixture<Upmodal3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Upmodal3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Upmodal3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
