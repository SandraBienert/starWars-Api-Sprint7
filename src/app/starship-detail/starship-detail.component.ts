import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiStarshipsService } from '../services/api-starships.service';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import {Starship } from '../interfaces/starship.interface';
import { Subject } from 'rxjs';  
import { takeUntil } from 'rxjs/operators';  

@Component({
  selector: 'app-starship-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.scss']
})

export class StarshipDetailComponent implements OnInit, OnDestroy {

  starship: Starship | undefined;  
  errorMessage: string | undefined;  
  private destroy$ = new Subject<void>();
  
  constructor( private route: ActivatedRoute, private apiStarshipsService: ApiStarshipsService, private router: Router ) { }
 
  ngOnInit(): void {  
    const id = this.route.snapshot.paramMap.get('id');  
    if (id) {  
      this.apiStarshipsService.getStarshipById(id).pipe(  
        takeUntil(this.destroy$) // Fa servir el Subject per gestionar la subscripció  
      ).subscribe(  
        (starship) => {  
          this.starship = starship;  
          this.errorMessage = undefined;  
        },  
        (error) => {  
          console.error('Error obtent les dades de la nau:', error);  
          this.errorMessage = 'No es poden carregar les dades de la nau. Intenta-ho més tard.';  
        }  
      );  
    }  
  }  

  ngOnDestroy(): void {  
    this.destroy$.next();
    this.destroy$.complete();  
  }  

  goBack() {  
    this.router.navigate(['/starships']); 
  }  

}
