import {Component, OnInit} from '@angular/core';
import {ProdusenService} from "../produsen.service";
import {ProdusenModel} from "../produsen.model";

@Component({
  selector: 'app-list-produsen',
  templateUrl: './list-produsen.component.html',
  styleUrls: ['./list-produsen.component.css']
})
export class ListProdusenComponent implements OnInit {

  listProdusen!: ProdusenModel[];

  constructor(private _produsenService: ProdusenService) {
  }

  ngOnInit(): void {
    this.getListProdusen();
  }

  getListProdusen() {
    //variable digunakan untuk menampung data
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
      })
  }

  delete(id: number) {
    this._produsenService.delete(id).subscribe(value => {
      if (value.status === 200) {
        console.log(value.body)
        this.getListProdusen()
      } else {
        alert("Gagal Hapus Data")
        console.log(value.body)
      }
    })
  }
}
