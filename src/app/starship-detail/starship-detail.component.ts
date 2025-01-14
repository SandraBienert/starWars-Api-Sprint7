import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiStarshipsService } from '../services/api-starships.service';
import { CommonModule } from '@angular/common';
import {starship } from '../interfaces/starship.interface';

@Component({
  selector: 'app-starship-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './starship-detail.component.html',
  styleUrl: './starship-detail.component.scss'
})

export class StarshipDetailComponent implements OnInit {
  starship: any;
  @Input() Starship: any;
  
  constructor( private route: ActivatedRoute, private apiStarshipsService: ApiStarshipsService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); 
    this.apiStarshipsService.getStarshipDetail(id).subscribe((data) => { 
      this.starship = data; 
    });
  }

}
