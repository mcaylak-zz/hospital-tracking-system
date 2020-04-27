import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FloorComponent} from "./floor/floor.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {SaveBuildingComponent} from "./save-building/save-building.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'floor', component: FloorComponent},
  {path: 'save-building', component: SaveBuildingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuildingRoutingModule { }
