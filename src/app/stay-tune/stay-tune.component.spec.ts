import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StayTuneComponent } from './stay-tune.component';

describe('StayTuneComponent', () => {
  let component: StayTuneComponent;
  let fixture: ComponentFixture<StayTuneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StayTuneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StayTuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
