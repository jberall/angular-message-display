import { Directive,  forwardRef } from '@angular/core';
import { FormControl,  NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';
// https://blog.thoughtram.io/angular/2016/03/14/custom-validators-in-angular-2.html
export function createCounterRangeValidator(maxValue:number, minValue:number): ValidatorFn {
  return (c: FormControl): { [key: string]: any } => {
    let err = {
      rangeError: {
        given: c.value,
        max: maxValue,
        min: minValue
      }
    };
    return (c.value > +maxValue || c.value < +minValue) ? 
        {'createCounterRange': {'maxValue': maxValue, 'minValue': minValue, 'givenValue': c.value}} :
          null;      
  }
}

@Directive({
   selector: '[counterRangeValidator][ngModel],[counterRangeValidator][formControl]',
   providers: [
    { 
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CounterRangeValidator),
      multi: true
    }   
  ]  
})
export class CounterRangeValidator implements Validator {
    
    validateFn:any = () => {};

    constructor(counterRangeMax:number, counterRangeMin:number){
        this.validateFn = createCounterRangeValidator(counterRangeMax, counterRangeMin);
    }
    
    validate(c: FormControl){
        return this.validateFn(c);
    }

}
