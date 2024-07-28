import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EeoFormComponent } from './eeo-form.component';

describe('EeoFormComponent', () => {
  let component: EeoFormComponent;
  let fixture: ComponentFixture<EeoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EeoFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EeoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
