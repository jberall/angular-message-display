
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';


export class Attachment {
  type   = '';
  description  = '';
  
  constructor(){}
  
  labels() {
    let labels = [];
    labels['type'] = 'Some Type';
    labels['description'] = 'Descrpition';
    return labels;
  }
//   errors(){
//     let errors = [];
//     errors['errA'] = '';
//     errors['description'] = '';
//     return errors;
//   }
  hints(){
    let hints = [];
    hints['type'] = '';
    hints['description'] = '';
    return hints;
  }  
  newGroup():FormGroup {
    let fb = new FormBuilder();
    return fb.group({
      type: ['',[Validators.required,Validators.minLength(3)]],
      description: ['Desc',[Validators.required,Validators.minLength(5)]],
    });  
  }
 
}