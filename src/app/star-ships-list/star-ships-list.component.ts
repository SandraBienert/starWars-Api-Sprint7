import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiStarshipsService } from '../services/api-starships.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-star-ships-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star-ships-list.component.html',
  styleUrls: ['./star-ships-list.component.scss']
})

export class StarShipsListComponent implements OnInit {
  starships: any[] = [];
  currentPage = 1;

  constructor(private apiStarshipsService: ApiStarshipsService, private http: HttpClient) {}
  
  ngOnInit(): void { 
    this.loadStarships(); 
  } 

  loadStarships(): void { 
    this.apiStarshipsService.getData().subscribe((data: any) => {
      this.starships= [...this.starships, ...data.results]; 
    });
    
  }

  viewMore(): void {  
    this.currentPage++;  
    this.loadStarships();  
  }  
    
   }



