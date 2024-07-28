import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuReventsComponent } from './menu-revents.component';

describe('MenuReventsComponent', () => {
  let component: MenuReventsComponent;
  let fixture: ComponentFixture<MenuReventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuReventsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuReventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
