import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BuildingService} from "../../shared/services/building.service";
import area from "../../shared/models/area";
import User from "../../shared/models/user";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  @Input('master') flood: number;
  @Input('area') areasCoordinates: area[] = [];
  @Input('userCoordinates') userCoordinates: User[] = [];
  @Output() isActive = new EventEmitter<boolean>();
  @Output() userName = new EventEmitter<string>();

  userColors: userColor[] = [];

  constructor(private buildingService: BuildingService) { }

  ngOnInit(): void {
    console.log(this.userCoordinates);
    this.setPointColors();
    this.isActive.emit(false);
  }

  getUserName(userName: any) {
    console.log(userName);
    this.userName.emit(userName);
  }

  getColor() {
    return '#DCD48A';
  }

  getPointColor(name: string): string {
    let color = "red";
    this.userColors.forEach(x=>{
      if(x.name == name){
        color = x.color;
      }
    })
    return color;
  }

  private setPointColors() {
    let status = true;
    this.userCoordinates.forEach(x=>{
      this.userColors.forEach(y=>{
        if(x.name == y.name)
          status = false;
      })
      if(status){
        let item = new userColor();
        item.name = x.name;
        item.color = this.getRandomColor();
        this.userColors.push(item);
      }
      status = true;
    })
  }
  private getRandomColor(): string {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}

export class userColor {
  name: string;
  color: string;
}

