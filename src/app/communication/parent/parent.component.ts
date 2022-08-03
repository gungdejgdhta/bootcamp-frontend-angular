import { Component, OnInit } from '@angular/core';
import {MessageModel} from "../message.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  message!: MessageModel;
  formMessage!: FormGroup;

  constructor(private formBuild: FormBuilder) {
    this.formMessage = this.formBuild.group({
      'name': new FormControl(null, [Validators.required]),
      'message': new FormControl(null, [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  sendMessage() {
    console.log(this.formMessage.value)
  }

}
