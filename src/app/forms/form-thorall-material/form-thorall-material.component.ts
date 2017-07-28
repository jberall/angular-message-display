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

  formErrors = {
    counter: '',
    name: '',
    address:'',
    city:'',
    mobile: { phone: '', ext: ''},
  };  
  
  labels = this.Labels();
  hints = this.Hints();

  
  modelForm: FormGroup;
  
  constructor(private fb: FormBuilder, private _md: MessageDisplay) {}

  onSubmit(){
    console.log('form return',JSON.stringify(this.modelForm.value));
  }
  
  ngOnInit() {
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
      formData => this.onValueChanged(formData, this.modelForm)
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
  }
  

  onValueChanged(formData: any, form: FormGroup){
    if (!form) { return ;}
    this._md.generateErrorMessages(form,this.labels,this.formErrors);
    // //  console.log('form',  form.value);
    // for (let field of Object.keys(form.value)) {
    //     let control = form.controls[field];
    //     let label = this.labels[field];
    //     switch(this._md.findControlType(form.controls[field].value)) {
    //       case "string":
    //         this.formErrors[field] = this._md.errorMessage(form.get(field), label); 
    //         break;
    //       case "object":
    //         for(let fld of Object.keys(form.controls[field].value)){
    //           this.formErrors[field][fld] = this._md.errorMessage(control.get(fld),label[fld]);
    //         }
    //         break;
    //       case "array":
            
    //         break;
    //       default:
    //         console.log(field, form.value[field], typeof form.value[field]);
    //         break;
    //     }
    // }

  }  
}




/*
  trimFields = this.TrimFields();
  TrimFields(){
    return {
      name: null,
      address: null,
    };
  }
testTrim(field:string,form: FormGroup,){
  
  let val = form.get(field).value;

  if (typeof val !== "string" || val === 'undefined') {
    // console.log('return ' + typeof val);
    return ;
  }
  const options: {} = {
    onlySelf: true,
    // emitEvent: true,
    // emitModelToViewChange: true,
    // emitViewToModelChange: true    
  };  
  var obj:{} = {};
  obj[field] = val.trim();
  form.patchValue(obj,options);

}
  trimItem(form: FormGroup){
    if (!form ) return ;
    for (let field in this.trimFields) {
      const c = form.controls[field]
      if (typeof c.value === "string" && c.value !== 'undefined') {
          (<FormControl>c).setValue(c.value.trim(), { onlySelf: true }); 
          //  console.log('field is '+ field + ' type of ' + typeof c.value)         
      }      
    }
  }
  */

//  <tmg-input [id]="'name'" [name]="'name'" [placeholder]="PlaceHolder" [(formControlName)]="name" [formGroup]="modelForm" [(ngModel)]="modelForm.name"></tmg-input>
// <h3>Template Driven Form</h3>
//     <form #form="ngForm">
//        <!-- <counter-input name="counter" ngModel></counter-input>  -->
//       <counter-input ngModel name="counter" counterRangeMax="10" counterRangeMin="0">Counter Ex.</counter-input>
//           <br>
//         <md-input-container> 
//         <input mdInput ngModel placeholder="Template Driven Form Field" name="tdf" #tdf required>
//         <md-hint>TDF Hint </md-hint>
//           <md-error *ngIf="!tdf.valid">TDF Error Message</md-error>  
//         </md-input-container>           
//     </form>

//     <p *ngIf="!form.valid">TDF is invalid!</p>
//     <pre>form data: {{ form.value | json }} </pre>
//     <pre>form errors: {{ form.errors | json }} </pre>