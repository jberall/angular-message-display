import { Component, Input } from '@angular/core';

@Component({
  selector: '-delthorall-md-hint',
  templateUrl: './md-hint.component.html',
  styleUrls: ['./md-hint.component.css']
})
export class MdHintComponent  {

  @Input()
  hint: string;

}
