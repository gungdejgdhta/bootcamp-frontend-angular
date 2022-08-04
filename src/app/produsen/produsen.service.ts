import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProdusenModel} from "./produsen.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProdusenService {

  constructor(private http: HttpClient) {
  }

  list() {
    return this.http.get<ProdusenModel[]>(`${environment.baseUrl}/produsen`)
  }

  create(value: ProdusenModel) {
    return this.http.post(`${environment.baseUrl}/produsen/create`, value, {observe: "response"})
  }
}
