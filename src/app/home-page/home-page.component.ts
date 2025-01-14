import { Component } from '@angular/core';
import { NavbarLogoComponent } from "../navbar-logo/navbar-logo.component";
import { CommonModule } from '@angular/common';
import { NavbarTabComponent } from "../navbar-tab/navbar-tab.component";
import { StarShipsListComponent } from "../star-ships-list/star-ships-list.component";



@Component({
  selector: 'app-home-page',
  standalone:true,
  imports: [CommonModule, NavbarLogoComponent, NavbarTabComponent, StarShipsListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})

export class HomePageComponent {

}
