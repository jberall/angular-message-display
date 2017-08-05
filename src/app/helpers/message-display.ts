import { AbstractControl, FormGroup, FormArray } from '@angular/forms';

export class MessageDisplay {
    
  constructor(){
    
  }

  generateErrorMessages(form: FormGroup, labels: string[], formErrors:string[]){
    for (let field of Object.keys(form.value)) {
        formErrors[field] = this.operateOnControl(form.get(field),labels[field],field);
    }    
  }
  
  objectLoop(control:AbstractControl, labels){
    let errMsg:string[] = [];      
      
    for(let field of Object.keys(control.value)){
      switch(this.findControlType(control.get(field))) {
        case "string":
          errMsg[field] = this.errorMessage(control.get(field), labels[field]);
          break;
        case "object":
          errMsg[field] = this.objectLoop(control.get(field), labels[field]);
          break;
        case "array":
          errMsg[field] = this.arrayLoop(control.get(field), labels[field]);
          break;
      }
    }   
    return errMsg;
  }
  arrayLoop(control:AbstractControl, labels){
    let errMsg:string[] = [];
    
    for(let index of Object.keys(control.value)){
      errMsg[index] = this.objectLoop(control.get(index),labels);
    }
    return errMsg
  }

  operateOnControl(control:AbstractControl, labels, field){
    switch(this.findControlType(control)) {
      case "string":
        return this.errorMessage(control,labels);
      case "object":
        return this.objectLoop(control,labels);
      case "array":
        return this.arrayLoop(control,labels);        
      default:
       console.log('operateOnControl default', control, 'value', control.value);
    }
  }
  
  findControlType(control:AbstractControl):string{
    let controlType: string = typeof control.value;
    switch(controlType) {
      case "string":
        return controlType;
      case "object":
        return (control.value.length) ? "array" : controlType;
      default:
       console.log('no type', controlType)
    }
    return controlType;
  }
  

  
  errorMessage(control: AbstractControl, label: string):string {
      
      var msg:string = '';
    // if (control && (control.dirty) && !control.valid) {
    if(control && !!(control.invalid && (control.dirty || control.touched))){
      for (const key in control.errors) {
        switch (key) {
          case 'required':
            msg +=  label + ' is required.';
            break;
          case 'minlength':
            msg +=  label + ' has a minimum length of ' + control.errors.minlength.requiredLength 
                          + '. The current length is ' + control.errors.minlength.actualLength + '.';
            break;            
          case 'maxlength':
            msg +=  label + ' has a maximum length of ' + control.errors.maxlength.requiredLength + '. The current length is ' + control.errors.maxlength.actualLength + '.';
            break;  
          default:    
            msg +=  label + ' NEED TO SET.' + JSON.stringify(control.errors);
        }         
      }
    }    
    return msg;  
  }       
}
