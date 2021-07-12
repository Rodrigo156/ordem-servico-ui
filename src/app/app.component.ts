import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';

import {ControlItem} from './models/frontend';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  form: FormGroup;
  isInline: boolean;
  items: ControlItem[];

  constructor(private fb: FormBuilder){
    this.isInline = true;

    this.items = [
      {label: 'First' , value: 1},
      {label: 'Second' , value: 2},
      {label: 'Third' , value: 3},
      {label: 'Fourth' , value: 4}
    ]
  }
  
  ngOnInit(): void {
    this.form = this.fb.group({
      input: [null,{
        validators: [
          Validators.required,
          Validators.minLength(3)
        ]
      }],
      teste: [null ,{
        validators:[
          Validators.required
        ]
      }],
      password: [null ,{
        validators:[
          Validators.required
        ]
      }],
      select:[null , {
        validators:[
          Validators.required
        ]
      }],
      checkbox:[null , {
        validators:[
          Validators.required
        ]
      }],
      radios: [null ,{
        validators:[
          Validators.required
        ]
      }]
    })
  }

  onSubmit(): void{
    console.log("Submit")
  }

  onPatchValue(): void{
    this.form.patchValue({input: 'test'});
  }
  onToggleInline(){
    this.isInline = !this.isInline
  }

}
