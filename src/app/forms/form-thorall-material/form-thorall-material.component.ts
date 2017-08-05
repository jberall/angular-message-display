import { Component, OnInit,  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, FormArray } from '@angular/forms';

import { createCounterRangeValidator } from '../../validators/create-counter-range.validator';
import { MessageDisplay } from '../../helpers/message-display';
import { Attachment } from '../../classes/Attachment';



@Component({
  selector: 'form-thorall-material',
  templateUrl: './form-thorall-material.component.html',
  styleUrls: ['./form-thorall-material.component.css'],
  providers: [ MessageDisplay ]
  
})
export class FormThorallMaterialComponent implements OnInit {

  formErrors = this.frmErrors();
  labels = this.Labels();
  hints = this.Hints();
  
  modelForm: FormGroup;
  
  attachment = new Attachment();
 
  constructor(
    private fb: FormBuilder, 
    private _md: MessageDisplay) {}

  onSubmit(){
    console.log('form return',JSON.stringify(this.modelForm.value));
  }
  
  ngOnInit() {
    // console.log(this.formErrors);
    this.modelForm = this.fb.group({
      name: ['',[Validators.required,Validators.minLength(3)]],
      address:['',[]],
      city:['',[Validators.required]],
      mobile: this.mobile,
      attachments: this.fb.array([]),
    });

    this.modelForm.valueChanges.subscribe(
      formData => this._md.generateErrorMessages(this.modelForm,this.labels,this.formErrors)
    );    
    
  }

  
  // setAttachments(attachments: Attachment[]) {
  //   const attachmentsFGs = attachments.map(attachment => this.fb.group(attachment));
  //   const attachmentFormArray = this.fb.array(attachmentsFGs);
  //   this.modelForm.setControl('attachments', attachmentFormArray);
  // }  
  
  get attachments(): FormArray {
    return this.modelForm.get('attachments') as FormArray;
  };  
  
  addAttachment() {   
    let arrAtt = [];
    console.log('errattachments1',this.formErrors['attachments']);
    
    arrAtt[this.attachments.length] = this.attachmentsErrors();
    this.formErrors['attachments'] = arrAtt;

    console.log('errattachments2', this.formErrors['attachments'])
    this.attachments.push(this.attachment.newGroup());
    // console.log('len', this.attachments.length)
  } 
  
  deleteAttachment(index) {
    // this.formErrors['attachments'].removeAt(index);
    // console.log("index",index)
    Array(this.formErrors['attachments']).splice(index,1);
    // console.log(this.formErrors['attachments']);
    
    this.attachments.removeAt(index);
  }
  
  subMobile = new FormGroup({
    subA: new FormControl('',[Validators.required,Validators.minLength(2)]),
    // subB: new FormControl('',[Validators.required,Validators.minLength(3)]),
  })
  mobile = new FormGroup({
    phone: new FormControl('',[Validators.required,Validators.minLength(2)]),
    ext: new FormControl('ext',[Validators.maxLength(1)] ),
    subMobile: this.subMobile
  })

  
  get theLabels():any[]{
    let lbls = {
      counter: 'The Counter',
      name: 'My Name is'
    };
    let labels = [];
    for (let el of Object.keys(lbls)){
      labels[el] = lbls[el];
    }
    return labels;
  }
  Labels(){
    let labels = this.theLabels;
    // let l = this.attachment.labels();
    // labels['counter'] = 'Counter';
    // labels['name'] = 'Name';
    labels['address'] = 'Address';
    labels['city'] = 'City';
    labels['mobile'] = this.mobileLabels();
    labels['attachments'] = new Attachment().labels();
    return labels;
  }
  mobileLabels(){
    let labels=[];
    labels['phone'] ='Mobile #';
    labels['ext'] = 'Ext';
    labels['subMobile'] = this.subMobileLabels();
    return labels;
  }
  subMobileLabels(){
    let errors = [];
    errors['subA'] = 'Sub Mob A';
    errors['subB'] = 'Sub Mobile B';
    return errors;  
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
    hints['subMobile'] = this.subMobileHints();
    return hints;
  }
  subMobileHints(){
    let hints = [];
    hints['subA'] = 'Sub A hint';
    return hints;
  }

  frmErrors(){
    let errors = [];
    errors['counter'] = '';
    errors['name'] = '';
    errors['address'] = '';
    errors['city'] = '';
    errors['arrL1'] = '';
    errors['mobile'] = this.mobileErrors();
    errors['attachments'];
    console.log('errors',errors)
    return errors;
  }
  mobileErrors(){
    let errors = [];
    errors['phone'] = '';
    errors['ext'] = '';
    errors['subMobile'] = this.subMobileErrors();
    return errors;
  }
  subMobileErrors(){
    let errors = [];
    errors['subA'] = '';
    errors['subB'] = '';
    return errors;    
  }
  attachmentsErrors(){
    let errors = [];
    errors['type'] = '';
    errors['description'] = 'DESC ERROR';
    return errors;
  }      
}

