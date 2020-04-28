import { Component, OnInit } from '@angular/core';
import {$e} from "codelyzer/angular/styles/chars";
import {BuildingService} from "../../shared/services/building.service";
import building from "../../shared/models/building";

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.css']
})
export class FloorComponent implements OnInit {

  constructor(private buildingService: BuildingService) { }

  flood: number = 0;
  buildings: building ;
  isActive: boolean = true;
  userName: string = "";

  ngOnInit(): void {
    this.getCoordinatesDb();
  }

  getCoordinatesDb() {
    this.buildingService.getBuildingsWithId(1).subscribe(x=>{
      this.buildings = x;
    })
  }

  getFlood(flood: string) {
    this.flood = Number(flood);
  }

  floodClose($event: boolean) {
    console.log($event);
    this.isActive = $event;
  }
}
