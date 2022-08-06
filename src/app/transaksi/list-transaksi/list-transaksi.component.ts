import {Component, OnInit} from '@angular/core';
import {TransaksiModel} from "../transaksi.model";
import {TransaksiService} from "../transaksi.service";

@Component({
  selector: 'app-list-transaksi',
  templateUrl: './list-transaksi.component.html',
  styleUrls: ['./list-transaksi.component.css']
})
export class ListTransaksiComponent implements OnInit {

  listTransaksi!: TransaksiModel[];

  constructor(private _transaksiService: TransaksiService) {
  }

  ngOnInit(): void {
    this.getTransaksiList()
  }

  getTransaksiList() {
    this._transaksiService.list().subscribe({
      next: value => {
        console.log(value)
        this.listTransaksi = value
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
    this._transaksiService.delete(id).subscribe(value => {
      if (value.status === 200) {
        console.log(value.body)
        this.getTransaksiList()
      } else {
        console.log(value.body)
        alert("Gagal Hapus Data")
      }
    })
  }
}
