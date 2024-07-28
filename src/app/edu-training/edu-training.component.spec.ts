import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduTrainingComponent } from './edu-training.component';

describe('EduTrainingComponent', () => {
  let component: EduTrainingComponent;
  let fixture: ComponentFixture<EduTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EduTrainingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EduTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
