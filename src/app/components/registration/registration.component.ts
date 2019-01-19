import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'geek-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  allControl: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.allControl = this.formBuilder.group({
      name: [''],
      mail: ['', [Validators.required]],
      password: ['', [Validators.required]],
      passwordConf: ['', [Validators.required]]
    });
  }

  public submit() {
    console.log(this.allControl, this.allControl.value);
    this.allControl.reset();
  }
}
