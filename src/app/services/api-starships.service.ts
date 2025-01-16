import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core'; 
import { Observable, map } from 'rxjs'; 
import { Starship } from '../interfaces/starship.interface';

@Injectable({ 
  providedIn: 'root' 
})

export class ApiStarshipsService { 
  private apiUrl = 'https://swapi.dev/api/starships'; 
  
  constructor(private http: HttpClient) { }

  getStarships(currentPage: number): Observable<Starship[]> { 
    return this.http.get<{ results: Starship[] }>(`${this.apiUrl}?page=${currentPage}`).pipe(
      map(response => {
        return response.results.map(starship => {
          const id = starship.url.split('/')[5];
          return { ...starship, id };
        });
      })
    );
  } 
  getStarshipById(id: string): Observable<Starship> { 
    return this.http.get<Starship>(`${this.apiUrl}/${id}/`); }
}

  