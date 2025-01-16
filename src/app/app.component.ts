import { Component } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [CommonModule, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'starWars-Apis';
}
