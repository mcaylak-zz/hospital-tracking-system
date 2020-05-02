import {Component, Input, OnInit} from '@angular/core';
import {$e} from "codelyzer/angular/styles/chars";
import {BuildingService} from "../../shared/services/building.service";
import building from "../../shared/models/building";
import User from "../../shared/models/user";
import Floor from "../../shared/models/floor";

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.css']
})
export class FloorComponent implements OnInit {
  floor: Floor = new Floor();

  constructor(private buildingService: BuildingService) { }

  floorId: number = 0;
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

  getFlood(id: number,floor: Floor) {
    this.floor = floor;
    this.floorId = id;
  }

  floodClose($event: boolean) {
    this.isActive = $event;
  }
}
