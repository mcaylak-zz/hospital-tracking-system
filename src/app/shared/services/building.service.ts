import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import Building from "../models/building";
import building from "../models/building";
import user from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  private readonly URL = "http://localhost:8080//api/";

  constructor(private httpClient: HttpClient) { }

  public getBuildingsWithId(id: number): Observable<building> {
    // @ts-ignore
    return  this.httpClient.get(this.URL + 'building', {params: new HttpParams().append('id',String(id))});
  }

  public getAllUserCoordinates(): Observable<user[]>{
    // @ts-ignore
    return this.httpClient.get(this.URL + 'user/findAll');
  }

}
