import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuildingRoutingModule } from './building-routing.module';
import { BuildingComponent } from './building.component';
import { FloorComponent } from './floor/floor.component';
import {NgxSvgModule} from "ngx-svg";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { HomePageComponent } from './home-page/home-page.component';
import { SaveBuildingComponent } from './save-building/save-building.component';
import {MatTabsModule} from "@angular/material/tabs";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import { AreaComponent } from './area/area.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import {DxVectorMapModule} from "devextreme-angular";


@NgModule({
  declarations: [BuildingComponent, FloorComponent, HomePageComponent, SaveBuildingComponent, AreaComponent],
    imports: [
        CommonModule,
        BuildingRoutingModule,
        NgxSvgModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatButtonModule,
        MatTabsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatTooltipModule,
        DxVectorMapModule
    ]
})
export class BuildingModule { }
