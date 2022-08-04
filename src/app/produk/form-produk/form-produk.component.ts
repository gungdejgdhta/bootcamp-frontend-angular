import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProdukModel} from "../produk.model";
import {ProdukService} from "../produk.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-produk',
  templateUrl: './form-produk.component.html',
  styleUrls: ['./form-produk.component.css']
})
export class FormProdukComponent implements OnInit {

  formProduk!: FormGroup;

  constructor(private formBuild: FormBuilder,
              private _produkService: ProdukService,
              private router: Router) {
    this.formProduk = this.formBuild.group({
      'nama': new FormControl(null, [Validators.required, Validators.minLength(4)]),
      'jenis': new FormControl(null, [Validators.required]),
      'berat': new FormControl(null, [Validators.required]),
      'harga': new FormControl(null, [Validators.required, Validators.min(1000)]),
      'produsen_id': new FormControl(null, [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  save() {
    let produk: ProdukModel = this.formProduk.value;

    this._produkService.create(produk).subscribe(value => {
      if (value.status === 200) {
        console.log(value.body);
        this.router.navigate(['/', 'produk']);
      } else {
        alert("Gagal Menyimpan Data");
        console.log(value.body);
      }
    })
  }

}
