import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'steve-form-switch',
  templateUrl: './form-switch.component.html',
  styleUrls: ['./form-switch.component.css']
})
export class FormSwitchComponent  {
  myForm: FormGroup
  value = false;
  
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit() {
    this.myForm = this.formBuilder.group({
      mySwitch: [true]
    });
  }
  
  submit() {
    alert(`Value: ${this.myForm.controls.mySwitch.value}`);
    console.log(`Value: ${this.myForm.controls.mySwitch.value}`);
  }
}
