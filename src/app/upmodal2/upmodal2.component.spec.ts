import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Upmodal2Component } from './upmodal2.component';

describe('Upmodal2Component', () => {
  let component: Upmodal2Component;
  let fixture: ComponentFixture<Upmodal2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Upmodal2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Upmodal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
