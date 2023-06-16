import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarContactComponent } from './navbar-contact.component';
import { CustomButtonComponent } from '../custom-button/custom-button.component';

describe('NavbarContactComponent', () => {
  let component: NavbarContactComponent;
  let fixture: ComponentFixture<NavbarContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarContactComponent, CustomButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
