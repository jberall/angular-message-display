import { Component, Input, forwardRef, OnChanges } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'thorall-material-input',
  templateUrl: './thorall-material-input.component.html',
  styleUrls: ['./thorall-material-input.component.css'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ThorallMaterialInputComponent),
      multi: true
    }
  ]
})
export class ThorallMaterialInputComponent implements ControlValueAccessor {
  @Input() 
    hint:string; 
  @Input()
    errMsg:string;
  @Input()
    _thValue:string;
  @Input()
    label:string;
  
  get thValue() {
    return this._thValue;
  }
  set thValue(val) {
    this._thValue = val.trim();
    this.propagateChange(this._thValue);    
  }
    
  writeValue(value: any){
    // if (value !== undefined) {
    //   this.thValue = value;
    // } 
  }
  propagateChange = (_: any) => {};

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {
    
  }

}
