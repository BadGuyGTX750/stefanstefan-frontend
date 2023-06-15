import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router:Router) {}

  public navigateToHomePage():void {
    this.router.navigate(['']);
  }
  public navigateToContactPage():void {
    this.router.navigate(['/contact']);
  }
}
