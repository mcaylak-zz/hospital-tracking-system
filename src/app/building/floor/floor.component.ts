import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.css']
})
export class FloorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'hospital-tracking-system';
  coordinates = [
    {x: 10, y: 50,name:"Ahmet"},
    {x: 50, y: 20,name:"Aytekin"},
    {x: 90, y: 100,name:"Mehmet"},
    {x: 500, y: 300,name:"Muhammed"},
    {x: 600, y: 66,name:"zaa"},
  ];

  floorCoordinate = [
    {x: 0, y:0 , witdh: 500, height:200,color: "#DDBFB9",floodName: "A odası"},
    {x: 550, y:0 , witdh: 300, height:150, color: "#DCD48A",floodName: "B odası"},
    {x: 0, y:250 , witdh: 250, height:80, color: "#9FC6DC",floodName: "C odası"},
    {x: 300, y:250 , witdh: 250, height:80, color: "#9FC6DC",floodName: "D odası"},
    {x: 600, y:200 , witdh: 250, height:130, color: "#9FC6DC",floodName: "E odası"},
  ]

  getUserName(userName: any) {
    console.log(userName);
  }

}
