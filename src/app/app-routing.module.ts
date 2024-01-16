import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HousingListComponent } from './pages/housing-list/housing-list.component';
import { HousingDetailsComponent } from './pages/housing-details/housing-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/housing-list', pathMatch: 'full' },
  { path: 'housing-list', component: HousingListComponent },
  { path: 'housing-details/:id', component: HousingDetailsComponent }, // Use a parameter to identify the selected location
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }