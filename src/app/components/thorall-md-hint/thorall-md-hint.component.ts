import { Component,Input } from '@angular/core';

@Component({
  selector: 'thorall-md-hint',
  templateUrl: './thorall-md-hint.component.html',
  styleUrls: ['./thorall-md-hint.component.css']
})
export class ThorallMdHintComponent  {

  @Input()
  hint: string;

}
