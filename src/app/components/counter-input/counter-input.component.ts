import { Component, Input, forwardRef, OnChanges } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

import { createCounterRangeValidator } from '../../validators/create-counter-range.validator';

@Component({
  selector: 'counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.css'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CounterInputComponent),
      multi: true
    },  
    { 
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CounterInputComponent),
      multi: true
    }     
  ]  
})
export class CounterInputComponent implements ControlValueAccessor, OnChanges {

  @Input()
  _counterValue = 0; // notice the '_'
  
  @Input()
  counterRangeMax;

  @Input()
  counterRangeMin;
  
  @Input()
  errmsg:string;
  
  @Input()
  hint: string;
  
  validateFn:any = () => {};

  ngOnChanges(changes) {
    if (changes.counterRangeMin || changes.counterRangeMax) {
      this.validateFn = createCounterRangeValidator(this.counterRangeMax, this.counterRangeMin);
    }
  }

  validate(c: FormControl) {
    return this.validateFn(c);
  }
  
  get counterValue() {
    return this._counterValue;
  }

  set counterValue(val) {
    this._counterValue = val;
    this.propagateChange(this._counterValue);
  }
  increment() {
    this.counterValue++;
  }

  decrement() {
    this.counterValue--;
  }  
  writeValue(value: any){
    if (value !== undefined) {
      this.counterValue = value;
    }
  }
  propagateChange = (_: any) => {};

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {
    
  }    
}
