import { AbstractControl, FormGroup } from '@angular/forms';

export class MessageDisplay {
    
  
  generateErrorMessages(form: FormGroup, labels: Array<any>, formErrors: {}){
    for (let field of Object.keys(form.value)) {
        let control = form.controls[field];
        let label = labels[field];
        
        switch(this.findControlType(form.controls[field].value)) {
          case "string":
            // formErrors[field] = this.stringErrorMessages(form,label,field,formErrors[field]);
            this.stringErrorMessages(form,label,field,formErrors[field]);
            break;
          case "object":
            for(let fld of Object.keys(form.controls[field].value)){
              formErrors[field][fld] = this.stringErrorMessages(control,label[fld],fld,formErrors);
            }
            break;
          case "array":
            
            break;
          default:
            console.log(field, form.value[field], typeof form.value[field]);
            break;
        }
    }    
  }
  
  private objectLoop(){
    
  }
  stringErrorMessages(childControl:AbstractControl,label:string,field:string,errMsg?){
    errMsg = this.errorMessage(childControl.get(field),label);
  }
  
  findControlType(jsonObj:any):string{
    let controlType: string = typeof jsonObj;
    switch(controlType) {
      case "string":
        break;
      case "object":
       if (jsonObj.length){
         controlType = "array";
       } 
        break;
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
