import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BuildingService} from "../../shared/services/building.service";
import building from "../../shared/models/building";
import Building from "../../shared/models/building";
import area from "../../shared/models/area";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  @Input('master') flood: number;
  @Input('area') areasCoordinates: area[] = [];
  @Output() isActive = new EventEmitter<boolean>();
  @Output() userName = new EventEmitter<string>();

  constructor(private buildingService: BuildingService) { }

  ngOnInit(): void {
    console.log(this.areasCoordinates);
    this.isActive.emit(false);
  }

  coordinates = [
    {x: 10, y: 50,name:"Ahmet"},
    {x: 50, y: 20,name:"Aytekin"},
    {x: 90, y: 100,name:"Mehmet"},
    {x: 500, y: 300,name:"Muhammed"},
    {x: 600, y: 66,name:"zaa"},
  ];

  coordinates2 = [
    {x: 80, y: 50,name:"Aytekin"},
    {x: 100, y: 20,name:"Aytekin"},
    {x: 90, y: 100,name:"Aytekin"},
    {x: 350, y: 300,name:"Aytekin"},
    {x: 400, y: 66,name:"Aytekin"},
  ];

  coordinates3 = [
    {x: 19, y: 50,name:"Muhammed"},
    {x: 66, y: 20,name:"Muhammed"},
    {x: 90, y: 100,name:"Muhammed"},
    {x: 480, y: 300,name:"Muhammed"},
    {x: 250, y: 66,name:"Muhammed"},
  ];



  getArrayOne(){

    if(this.flood == 1){
      return this.coordinates;
    }
    if(this.flood == 2){
      return this.coordinates2;
    }
    if(this.flood == 3){
      return this.coordinates3;
    }
  }

  getUserName(userName: any) {
    console.log(userName);
    this.userName.emit(userName);
  }

  getColor() {
    return '#DCD48A';
  }
}

