import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpmodalComponent } from './upmodal.component';

describe('UpmodalComponent', () => {
  let component: UpmodalComponent;
  let fixture: ComponentFixture<UpmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpmodalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
