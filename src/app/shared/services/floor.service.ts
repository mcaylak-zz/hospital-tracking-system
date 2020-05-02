import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import Floor from "../models/floor";

@Injectable({
  providedIn: 'root'
})
export class FloorService {

  private readonly URL = "http://localhost:8080//api/";

  constructor(private httpClient: HttpClient) { }


  public getFloorById(id: number): Observable<Floor>{
    // @ts-ignore
    return  this.httpClient.get(this.URL + 'floor/getById/', {params: new HttpParams().append('floorId',String(id))});
  }
}
