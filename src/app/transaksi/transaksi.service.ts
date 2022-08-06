import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Produk, TransaksiModel} from "./transaksi.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TransaksiService {

  constructor(private http: HttpClient) {
  }

  list() {
    return this.http.get<TransaksiModel[]>(`${environment.baseUrl}/transaksi`)
  }

  findId(id: number) {
    return this.http.get<TransaksiModel>(`${environment.baseUrl}/transaksi/${id}`)
  }

  create(value: TransaksiModel) {
    return this.http.post(`${environment.baseUrl}/transaksi/create`, value, {observe: "response"})
  }

  update(value: TransaksiModel) {
    return this.http.put(`${environment.baseUrl}/transaksi/update`, value, {observe: "response"})
  }

  delete(id: number) {
    return this.http.delete(`${environment.baseUrl}/transaksi/delete/${id}`, {observe: "response"})
  }
}
