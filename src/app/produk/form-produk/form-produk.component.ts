import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProdukModel} from "../produk.model";
import {ProdukService} from "../produk.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProdusenModel} from "../../produsen/produsen.model";
import {ProdusenService} from "../../produsen/produsen.service";

@Component({
  selector: 'app-form-produk',
  templateUrl: './form-produk.component.html',
  styleUrls: ['./form-produk.component.css']
})
export class FormProdukComponent implements OnInit {

  formProduk!: FormGroup;
  listProdusen!: ProdusenModel[];
  idProduk!: number;
  jenisMenu: string = 'Create';

  constructor(private formBuild: FormBuilder,
              private _produkService: ProdukService,
              private _produsenService: ProdusenService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.formProduk = this.formBuild.group({
      'nama': new FormControl(null, [Validators.required, Validators.minLength(4)]),
      'jenis': new FormControl(null, [Validators.required, Validators.minLength(7)]),
      'berat': new FormControl(null, [Validators.required]),
      'harga': new FormControl(null, [Validators.required, Validators.min(1000)]),
      'produsen_id': new FormControl(null, [Validators.required])
    })
  }

  ngOnInit(): void {
    //panggil produsenService untuk getListProdusen
    this.getListProdusen()
    this.activatedRoute.params.subscribe(value => {
      this.idProduk = value['id'];
    });

    if (this.idProduk) {
      this._produkService.findId(this.idProduk).subscribe(value => {
        console.log(value);
        this.formProduk.controls['nama'].setValue(value.nama);
        this.formProduk.controls['jenis'].setValue(value.jenis);
        this.formProduk.controls['berat'].setValue(value.berat);
        this.formProduk.controls['harga'].setValue(value.harga);
        this.formProduk.controls['produsen_id'].setValue(value.produsen.id);
      });
      this.jenisMenu = 'Update';
    }
  }

  save() {
    let produk: ProdukModel = this.formProduk.value;

    if (this.idProduk) {
      produk.id = this.idProduk;
      this._produkService.update(produk).subscribe(value => {
        if (value.status) {
          console.log(value.body);
          this.router.navigate(['/', 'produk']);
        } else {
          console.log(value.body);
          alert("Gagal Update Data")
        }
      })
    } else {
      this._produkService.create(produk).subscribe(value => {
        if (value.status === 200) {
          console.log(value.body);
          this.router.navigate(['/', 'produk']);
        } else {
          alert("Gagal Create Data");
          console.log(value.body);
        }
      })
    }
  }

  getListProdusen() {
    this._produsenService.list().subscribe({
      next: value => {
        console.log(value);
        this.listProdusen = value;
      },
      error: err => {
        console.log(err)
      },
      complete: () => {
        console.log("Service Telah Dijalankan")
      }
    });
  }
}
