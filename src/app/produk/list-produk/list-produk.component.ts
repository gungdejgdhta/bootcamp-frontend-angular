import {Component, OnInit} from '@angular/core';
import {ProdukModel} from "../produk.model";
import {ProdukService} from "../produk.service";
import {ProdusenService} from "../../produsen/produsen.service";

@Component({
  selector: 'app-list-produk',
  templateUrl: './list-produk.component.html',
  styleUrls: ['./list-produk.component.css']
})
export class ListProdukComponent implements OnInit {

  listProduk!: ProdukModel[];

  constructor(private _produkService: ProdukService) {
  }

  ngOnInit(): void {
    this.getListProduk();
  }

  getListProduk() {
    this._produkService.list().subscribe({
      next: value => {
        console.log(value);
        this.listProduk = value;
      },
      error: err => {
        console.log(err)
      },
      complete: () => {
        console.log("Service Telah Dijalankan")
      }
    })
  }

  delete(id: number) {
    this._produkService.delete(id).subscribe(value => {
      if (value.status === 200) {
        console.log(value.body)
        this.getListProduk()
      } else {
        console.log(value.body)
        alert("Gagal Hapus Data")
      }
    })
  }
}
