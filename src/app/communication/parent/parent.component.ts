import { Component, OnInit } from '@angular/core';
import {MessageModel} from "../message.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  messageToChild!: MessageModel;
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
    const message: MessageModel = new MessageModel();
    message.name = this.formMessage.controls['name'].value;
    message.message = this.formMessage.controls['message'].value;
    this.messageToChild = message;
    console.log(this.messageToChild);

    this.formMessage.reset();
    this.formMessage.untouched;
  }

  acceptMessage($event: MessageModel) : void {
    console.log($event);
    this.formMessage.controls['name'].setValue($event.name);
    this.formMessage.controls['message'].setValue($event.message);
  }

}
