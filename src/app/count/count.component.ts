import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {

  count: number = 5;
  formCount!: FormGroup;

  constructor(private formBuild: FormBuilder) {
    this.formCount = this.formBuild.group({
      'minimal': new FormControl(null),
      'maksimal': new FormControl(null)
    })
  }

  ngOnInit(): void {
  }

  countPenjumlahan(maksimal: number) {
    if (this.count >= maksimal) {
      alert("Penjumlahan maksimal " + maksimal);
    } else {
      this.count++;
    }
  }

  countPengurangan(minimal: number) {
    console.log(minimal);
    if (this.count <= minimal) {
      alert("Pengurangan minimal " + minimal);
    } else {
      this.count--;
    }
  }

}
