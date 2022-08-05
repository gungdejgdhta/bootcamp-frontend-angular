import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TransaksiModel} from "./transaksi.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TransaksiService {

  constructor(private http: HttpClient) {
  }

  list() {
    this.http.get<TransaksiModel[]>(`${environment.baseUrl}/transaksi`)
  }
}
