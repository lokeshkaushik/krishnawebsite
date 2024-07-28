import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentModelComponent } from './recent-model.component';

describe('RecentModelComponent', () => {
  let component: RecentModelComponent;
  let fixture: ComponentFixture<RecentModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentModelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
