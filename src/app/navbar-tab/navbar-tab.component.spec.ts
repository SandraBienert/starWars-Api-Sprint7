import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarTabComponent } from './navbar-tab.component';

describe('NavbarTabComponent', () => {
  let component: NavbarTabComponent;
  let fixture: ComponentFixture<NavbarTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
