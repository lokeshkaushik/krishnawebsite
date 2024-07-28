import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduRouteComponent } from './edu-route.component';

describe('EduRouteComponent', () => {
  let component: EduRouteComponent;
  let fixture: ComponentFixture<EduRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EduRouteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EduRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
