import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './views/accueil/accueil.component';
import { InfosComponent } from './views/infos/infos.component';
import { CarteComponent } from './views/carte/carte.component';
import { NotfoundComponent } from './views/notfound/notfound.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'infos', component: InfosComponent },
  { path: 'carte', component: CarteComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
