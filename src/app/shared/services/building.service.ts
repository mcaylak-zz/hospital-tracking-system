import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import Building from "../models/building";
import building from "../models/building";

@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  private readonly URL = "http://localhost:8080//api/building";

  constructor(private httpClient: HttpClient) { }

  public getBuildingsWithId(id: number): Observable<building> {
    // @ts-ignore
    return  this.httpClient.get(this.URL, {params: new HttpParams().append('id',String(id))});
  }

}
