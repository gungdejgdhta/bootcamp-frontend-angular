import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProdukModel} from "./produk.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProdukService {

  constructor(private http: HttpClient) {
  }

  list() {
    return this.http.get<ProdukModel[]>(`${environment.baseUrl}/produk`);
  }

  create(value: ProdukModel) {
    return this.http.post(`${environment.baseUrl}/produk/create`, value, {observe: "response"});
  }
}
