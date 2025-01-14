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
      this.starships= data.results; 
    });
    
    // loadMore() { 
    //   this.currentPage++; 
    //   this.apiStarshipsService.getData(this.currentPage).subscribe(response => { 
    //     const newStarships = response.results.map((starship: any) => ({ 
    //       name: starship.name, model: starship.model })); 
    //       this.starships = [...this.starships, ...newStarships]; }); }
    
   }

  }