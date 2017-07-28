import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
// http://almerosteyn.com/2016/04/linkup-custom-control-to-ngcontrol-ngmodel

@Component({
  selector: 'custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css'],
  providers: [
    {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => CustomInputComponent),
        multi: true
    }
  ]
})

export class CustomInputComponent implements ControlValueAccessor {
    @Input() label: string;
    //The internal data model
    private innerValue: any = '';

    //Placeholders for the callbacks which are later provided
    //by the Control Value Accessor
    private onTouchedCallback: () => void = () => {};
    private onChangeCallback: (_: any) => void = () => {};

    //get accessor
    get value(): any {
        return this.innerValue;
    };

    //set accessor including call the onchange callback
    set value(v: any) {
        if (v !== this.innerValue) {
            this.innerValue = v.trim();
            console.log("len: "+ this.innerValue.length);
            this.onChangeCallback(v);
        } 
    }

    //Set touched on blur
    onBlur() {
        this.value = this.value.trim();
        console.log("blur" + this.value + 'length '+ this.value.length);
        
        this.onTouchedCallback();
    }

    //From ControlValueAccessor interface
    writeValue(value: any) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    }

    //From ControlValueAccessor interface
    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    //From ControlValueAccessor interface
    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }

}
