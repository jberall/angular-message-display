import { AbstractControl } from '@angular/forms';

export class MessageDisplay {
    
    FieldError(control: AbstractControl, label: string) {
        
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
