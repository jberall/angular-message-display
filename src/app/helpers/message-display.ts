import { AbstractControl, FormGroup } from '@angular/forms';

export class MessageDisplay {
    
  constructor(){
    
  }

  generateErrorMessages(form: FormGroup, labels: string[], formErrors:string[]){
    for (let field of Object.keys(form.value)) {
        formErrors[field] = this.operateOnControl(form.get(field),labels[field]);
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
          console.log("need to program")
          break;
      }
    }   

    return errMsg;
  }

  operateOnControl(control:AbstractControl, labels){
    switch(this.findControlType(control)) {
      case "string":
        return this.errorMessage(control,labels);
      case "object":
        return this.objectLoop(control,labels);
        // console.log("operateOnControl", "object")
        // break;
      case "array":
        console.log("operateOnControl", "array")
        break;
        
      default:
       console.log('operateOnControl default', control, 'value', control.value);
    }
  }

  
  // stringErrorMessages(control:AbstractControl,label:string){
  //     return  this.errorMessage(control,label);    
  // }
  
  findControlType(control:AbstractControl):string{
    let controlType: string = typeof control.value;
    // console.log(controlType)
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
              // console.log(key + " field " + field + ' label: ' + this.labels[field]);
              msg +=  label + ' is required.';
              break;
            case 'minlength':
              // console.log(key + " field " + field + ' label: ' + this.labels[field] + 'minlenght ' + control.errors.minlength.requiredLength + ' actual len '+ control.errors.minlength.actualLength);
              msg +=  label + ' has a minimum length of ' + control.errors.minlength.requiredLength 
                                      + '. The current length is ' + control.errors.minlength.actualLength + '.';
              break;            
            case 'maxlength':
              msg +=  label + ' has a maximum length of ' + control.errors.maxlength.requiredLength + '. The current length is ' + control.errors.maxlength.actualLength + '.';
              break;  
            default:
              // console.log('default ' + key  + " field " + field + JSON.stringify(control.errors));    
              msg +=  label + ' NEED TO SET.' + JSON.stringify(control.errors);
          }         
        }
      }    
      return msg;  
    }       
}
