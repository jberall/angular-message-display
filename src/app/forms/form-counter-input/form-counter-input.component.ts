import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { createCounterRangeValidator } from '../../validators/create-counter-range.validator';

@Component({
  selector: 'app-form-counter-input',
  templateUrl: './form-counter-input.component.html',
  styleUrls: ['./form-counter-input.component.css']
})
export class FormCounterInputComponent implements OnInit {
  outerCounterValue = 4;
  errCounter;
  form3: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form3 = this.fb.group({
      counter: [1, createCounterRangeValidator(8, 2)]
    });
    this.form3.valueChanges

      .subscribe(data => this.onValueChanged(data, this.form3));    
  }

  onValueChanged(data: any, fg: FormGroup){

    const control = fg.get('counter');

    if (control && (control.dirty) && !control.valid) {   
      this.errCounter =   JSON.stringify(control.errors);
      // console.log( " field " + field + ' -- ' +  JSON.stringify(control.errors));
    }
    
  }
}
