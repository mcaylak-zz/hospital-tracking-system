import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BuildingComponent} from "./building/building.component";

const routes: Routes = [
  {
    path: '',
    component: BuildingComponent,
    loadChildren: () => import('./building/building.module').then(module => module.BuildingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
