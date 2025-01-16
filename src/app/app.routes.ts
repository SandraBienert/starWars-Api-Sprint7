import { Route, Routes } from '@angular/router';  
import { StarShipsListComponent } from './star-ships-list/star-ships-list.component'; 
import { StarshipDetailComponent } from './starship-detail/starship-detail.component';

export const routes: Routes = [  // Exports routes i RouterModule  
  { path: '', redirectTo: '/starships', pathMatch: 'full' }, // Redirigeix a la llista de naus per defecte  
  { path: 'starships', component: StarShipsListComponent }, // Ruta per la llista de naus
  { path: 'starship/:id', component: StarshipDetailComponent }, // Ruta per als detalls de la nau  
  { path: '**', redirectTo: '/starships' } // Redirigeix qualsevol camí desconegut a la llista de naus  
];  



