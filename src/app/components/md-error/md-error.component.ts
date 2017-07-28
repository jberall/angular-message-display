import { Component, Input } from '@angular/core';

@Component({
  selector: '--thorall-md-error',
  templateUrl: './md-error.component.html',
  styleUrls: ['./md-error.component.css']
})
export class MdErrorComponent  {
  
  @Input()
  errmsg: string;

}
