import { Component, OnInit } from '@angular/core';
import {FeatureCollection, HomePageService} from "../../shared/services/home-page.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  ngOnInit(): void {
  }

  projection: any;
  roomsData: FeatureCollection;
  buildingData: FeatureCollection;

  constructor(service: HomePageService) {
    this.roomsData = service.getRoomsData();
    this.buildingData = service.getBuildingData();
    this.projection = {
      to(coordinates) {
        return [coordinates[0] / 100, coordinates[1] / 100];
      },
      from(coordinates) {
        return [coordinates[0] * 100, coordinates[1] * 100];
      }
    };
  }

  customizeTooltip(arg) {
    if(arg.layer.name === "rooms")
      return {
        text: "Square: " + arg.attribute("square") + " ft&#178"
      };
  }
}
