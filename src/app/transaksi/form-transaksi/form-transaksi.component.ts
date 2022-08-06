import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProdukModel} from "../../produk/produk.model";
import {TransaksiService} from "../transaksi.service";
import {ProdukService} from "../../produk/produk.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TransaksiModel} from "../transaksi.model";

@Component({
  selector: 'app-form-transaksi',
  templateUrl: './form-transaksi.component.html',
  styleUrls: ['./form-transaksi.component.css']
})
export class FormTransaksiComponent implements OnInit {

  formTransaksi!: FormGroup;
  listProduk!: ProdukModel[];
  idTransaksi!: number;
  jenisMenu: string = 'Create';

  constructor(private formBuild: FormBuilder,
              private _transaksiService: TransaksiService,
              private _produkService: ProdukService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.formTransaksi = this.formBuild.group({
      'produk_nama': new FormControl(null, [Validators.required]),
      'produk_id': new FormControl(null, [Validators.required]),
      'kuantitas': new FormControl(null, [Validators.required, Validators.min(10)])
    })
  }

  ngOnInit(): void {
    this.getListProduk()

    this.activatedRoute.params.subscribe(value => {
      this.idTransaksi = value['id'];

      if (this.idTransaksi) {
        this._transaksiService.findId(this.idTransaksi).subscribe(value => {
          console.log(value);
          this.formTransaksi.controls['produk_nama'].setValue(value.produk.nama);
          this.formTransaksi.controls['produk_id'].setValue(value.produk.id);
          this.formTransaksi.controls['kuantitas'].setValue(value.kuantitas)
        })
        this.jenisMenu = 'Update';
      }
    })
  }

  getListProduk() {
    this._produkService.list().subscribe({
      next: value => {
        console.log(value)
        this.listProduk = value
      },
      error: err => {
        console.log(err)
      },
      complete: () => {
        console.log("Service Telah Dijalankan")
      }
    })
  }

  save() {
    let transaksi: TransaksiModel = this.formTransaksi.value;

    if (this.idTransaksi) {
      transaksi.id = this.idTransaksi;
      this._transaksiService.update(transaksi).subscribe(value => {
        if (value.status) {
          console.log(value.body)
          this.router.navigate(['/', 'transaksi'])
        } else {
          console.log(value.body)
          alert("Gagal Update Data")
        }
      })
    } else {
      this._transaksiService.create(transaksi).subscribe(value => {
        if (value.status === 200) {
          console.log(value.body)
          this.router.navigate(['/', 'transaksi'])
        } else {
          console.log(value.body)
          alert("Gagal Create Data")
        }
      })
    }
  }
}
