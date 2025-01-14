import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
  
export class ApiStarshipsService {
  
  private apiUrl = 'https://swapi.py4e.com/api/starships';

constructor(private http: HttpClient) { }

getData(page: number = 1): Observable<any> {
 return this.http.get<any>(`${this.apiUrl}?page=${page}`);
 }

getStarshipDetail(id: any): Observable<any> { 
  return this.http.get<any>(`${this.apiUrl}/${id}`); 
}
}
