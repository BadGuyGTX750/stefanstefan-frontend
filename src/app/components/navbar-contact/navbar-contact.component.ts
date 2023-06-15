import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-contact',
  templateUrl: './navbar-contact.component.html',
  styleUrls: ['./navbar-contact.component.css']
})
export class NavbarContactComponent {
  constructor(private router:Router) {}

  public navigateToHomePage():void {
    this.router.navigate(['']);
  }
  public navigateToContactPage():void {
    this.router.navigate(['/contact']);
  }

  @Output() onRefreshNotification: EventEmitter<any> = new EventEmitter();
  public sendRefreshNotification():void {
    this.onRefreshNotification.emit();
  }
}
