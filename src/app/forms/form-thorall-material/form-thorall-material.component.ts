import { Component, OnInit,  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, FormArray } from '@angular/forms';

import { createCounterRangeValidator } from '../../validators/create-counter-range.validator';
import { MessageDisplay } from '../../helpers/message-display';

@Component({
  selector: 'form-thorall-material',
  templateUrl: './form-thorall-material.component.html',
  styleUrls: ['./form-thorall-material.component.css'],
  providers: [ MessageDisplay ]
  
})
export class FormThorallMaterialComponent implements OnInit {

  // formErrors = {
  //   counter: '',
  //   name: '',
  //   address:'',
  //   city:'',
  //   mobile: { phone: '', ext: ''},
  // };  
  
  formErrors = this.frmErrors();
  labels = this.Labels();
  hints = this.Hints();

  
  modelForm: FormGroup;
  
  constructor(private fb: FormBuilder, private _md: MessageDisplay) {}

  onSubmit(){
    console.log('form return',JSON.stringify(this.modelForm.value));
  }
  
  ngOnInit() {
    console.log(this.formErrors);
    this.modelForm = this.fb.group({
      // counter: [3, createCounterRangeValidator(8, 2)],
      name: ['',[Validators.required,Validators.minLength(3)]],
      address:['',[]],
      city:['',[Validators.required]],
      //nested group
      // mobile: this.fb.group({
      //    phone: ['',[Validators.required]],
      //    ext: ['', [Validators.required]], 
      // })
      mobile: this.mobile,
      arr: this.arr,
      
    });

    this.modelForm.valueChanges.subscribe(
      formData => this._md.generateErrorMessages(this.modelForm,this.labels,this.formErrors)
    );    
    
  }
  arr = new FormArray([
    // new FormControl('Nancy', Validators.minLength(2)),
    new FormControl('Drew'),
  ]);
  mobile: FormGroup = new FormGroup({
    phone: new FormControl('',[Validators.required,Validators.minLength(2)]),
    ext: new FormControl('ext',[Validators.maxLength(1)] ),
  })
 

  Labels(){
    let labels = [];
    labels['counter'] = 'Counter';
    labels['name'] = 'Name';
    labels['address'] = 'Address';
    labels['city'] = 'City';
    labels['mobile'] = this.mobileLabels();
    return labels;
  }
  mobileLabels(){
    let labels=[];
    labels['phone'] ='Mobile #';
    labels['ext'] = 'Ext';
    return labels;
  }
  Hints(){
    let hints = [];
    // hints['counter'] ='Counter Hint';
    // hints['name'] ='Miss You Bear';
    hints['mobile'] = this.mobileHints();
    return hints;
  }
  mobileHints(){
    let hints = [];
    // hints['phone'] = 'Mobile phone hint';
    return hints;
  }

  frmErrors(){
    let errors = [];
    errors['counter'] = '';
    errors['name'] = '';
    errors['address'] = '';
    errors['city'] = '';
    errors['mobile'] = this.mobileErrors();
    return errors;
  }
  mobileErrors(){
    let errors = [];
    errors['phone'] = '';
    errors['ext'] = '';
    return errors;
  }
      
}
