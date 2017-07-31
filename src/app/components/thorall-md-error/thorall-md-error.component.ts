import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'thorall-md-error',
  templateUrl: './thorall-md-error.component.html',
  styleUrls: ['./thorall-md-error.component.css']
})
export class ThorallMdErrorComponent  {
  @Input() errmsg: string;
}
