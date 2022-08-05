import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProdusenService} from "../produsen.service";
import {ProdusenModel} from "../produsen.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-form-produsen',
  templateUrl: './form-produsen.component.html',
  styleUrls: ['./form-produsen.component.css']
})
export class FormProdusenComponent implements OnInit {

  formProdusen!: FormGroup;
  idProdusen!: number;
  jenisMenu: string = 'Create';

  //fungsi activated route digunakan untuk mendeteksi id yang akan diupdate
  constructor(private formBuild: FormBuilder,
              private _produsenService: ProdusenService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.formProdusen = this.formBuild.group({
      'nama': new FormControl(null, [Validators.required, Validators.minLength(5)]),
      'kode': new FormControl(null, [Validators.required, Validators.minLength(2)]),
      'alamat': new FormControl(null, [Validators.required])
    })
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      this.idProdusen = value['id'];
    });

    if (this.idProdusen) {
      this._produsenService.findId(this.idProdusen).subscribe(value => {
        console.log(value);
        this.formProdusen.controls['nama'].setValue(value.nama);
        this.formProdusen.controls['kode'].setValue(value.kode);
        this.formProdusen.controls['alamat'].setValue(value.alamat);
      });
      this.jenisMenu = 'Update';
    }
  }

  save() {
    let produsen: ProdusenModel = this.formProdusen.value;

    if (this.idProdusen) {
      produsen.id = this.idProdusen
      this._produsenService.update(produsen).subscribe(value => {
        if (value.status) {
          console.log(value.body)
          this.router.navigate(['/', 'produsen'])
        } else {
          alert("Gagal Update Data")
          console.log(value.body)
        }
      })
    } else {
      this._produsenService.create(produsen).subscribe(value => {
        if (value.status === 200) {
          console.log(value.body);
          this.router.navigate(['/', 'produsen']);
        } else {
          alert("Gagal Update Data");
          console.log(value.body);
        }
      })
    }
  }
}
