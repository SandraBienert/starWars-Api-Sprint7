import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiStarshipsService } from '../services/api-starships.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Starship } from '../interfaces/starship.interface';

@Component({
  selector: 'app-star-ships-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './star-ships-list.component.html',
  styleUrls: ['./star-ships-list.component.scss']
})

export class StarShipsListComponent implements OnInit {
  starships: Starship[] = [];// Utilitza la interfície
  currentPage = 1;
  

  constructor(private apiStarshipsService: ApiStarshipsService, private router: Router) {} // Injecta Router
  
  ngOnInit(): void { 
    this.loadStarships(); 
  } 

  loadStarships(): void { 
    this.apiStarshipsService.getStarships(this.currentPage).subscribe({
      next: (data:Starship[]) => {
         this.starships = data; 
        }, 
        error: (err) => { 
          console.error('Error loading starships:', err); 
        }
      });
}
 
  getStarshipById(id:string): void { 
   this.router.navigate(['/starship', id]); // Navega a la ruta de detalls 
   }

   viewMore(): void {  
    this.currentPage++;  
    this.loadStarships();  
  } 
  }

