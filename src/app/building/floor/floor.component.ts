import { Component, OnInit } from '@angular/core';
import {$e} from "codelyzer/angular/styles/chars";
import {BuildingService} from "../../shared/services/building.service";
import building from "../../shared/models/building";
import User from "../../shared/models/user";

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
  users: User[] ;

  ngOnInit(): void {
    this.getCoordinatesDb();
    this.getAllUserCoordinates();
  }

  getCoordinatesDb() {
    this.buildingService.getBuildingsWithId(1).subscribe(x=>{
      console.log(x);
      this.buildings = x;
    })
  }

  getAllUserCoordinates(){
    this.buildingService.getAllUserCoordinates().subscribe(x=>{
      this.users = x;
    })
  }

  getFlood(flood: string) {
    this.flood = Number(flood);
  }

  floodClose($event: boolean) {
    this.isActive = $event;
  }
}
