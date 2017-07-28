/*
import { Component, Input } from '@angular/core';

import { FormGroup, FormControl, FormGroupName }        from '@angular/forms';

@Component({
  selector: 'material-template',
  templateUrl: './material-template.component.html',
  styleUrls: ['./material-template.component.css'],
})
export class MaterialTemplateComponent {
  @Input() form: FormGroup;
  @Input() groupName: string;
  @Input() key: string;
  @Input() label: string;
  @Input() hint: string;
  @Input() errmsg: string;
  

  
  constructor(){
    
  }
  onBlurEvent(){
    return ;
    var val: string;
    const field: string = this.key;
    // console.log( ' field: ' + field +  ' groupName: ' + this.groupName);
    val = (!this.groupName) ? this.form.get(field).value :
                               this.form.controls[this.groupName].get(field).value;
    // console.log('onBlurEvent ' +field + ' val: ' + val + ' len ' + val.length) 
    if (typeof val !== "string" || val === 'undefined' ) {
      // console.log('return ' + typeof val);
      return ;
    }
    
    const options: {} = {
      onlySelf: true,
      // emitEvent: true,
      // emitModelToViewChange: true,
      // emitViewToModelChange: true    
    }
    var obj:{}={};
    if (this.groupName) {
      // obj[this.groupName][field] = val.trim();
    } else {
      // this.form.setParent(this.form);
      // obj[field] = val.trim();
    }
    
    // this.form.patchValue(obj,options);
  }
}
*/



import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, FormGroupName }        from '@angular/forms';

@Component({
  selector: 'material-template',
  templateUrl: './material-template.component.html',
  styleUrls: ['./material-template.component.css']
})
export class MaterialTemplateComponent {
  @Input() form: FormGroup;
  @Input() groupName: FormGroupName;
  @Input() key: String;
  @Input() label: String;
  @Input() hint: String;
  @Input() errmsg: string;

  constructor(){
    
  }
  onBlurEvent(){
    return ;
    var val: string;
    const field: string = this.key.toString();
    val = (!this.groupName) ? this.form.get(field).value :
                               this.form.controls[this.groupName.value].get(field).value;
    console.log('onBlurEvent ' +field + ' val: ' + val + ' len ' + val.length) 
    if (typeof val !== "string" || val === 'undefined' || this.groupName) {
      console.log('return ' + typeof val);
      return ;
    }
    
    const options: {} = {
      onlySelf: true,
      emitEvent: true,
      // emitModelToViewChange: true,
      // emitViewToModelChange: true    
    }
    var obj:{}={};
    obj[field] = val.trim();
    this.form.patchValue(obj,options);
  }
}
 
