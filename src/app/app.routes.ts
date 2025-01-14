import { Routes, RouterModule } from '@angular/router';  
import { StarShipsListComponent } from './star-ships-list/star-ships-list.component';  
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [  
  { path: '', component: HomePageComponent},  
  { path: 'starships', component: StarShipsListComponent },  
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Redirigeix a la pàgina de benvinguda per defecte  
];  

// Exports routes i RouterModule  

export { routes }; 