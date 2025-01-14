import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarTabComponent } from "../navbar-tab/navbar-tab.component";  

@Component({
  selector: 'app-navbar-logo',
  standalone:true,
  imports: [CommonModule, NavbarTabComponent],
  templateUrl: './navbar-logo.component.html',
  styleUrl: './navbar-logo.component.scss'
})
export class NavbarLogoComponent {

}
