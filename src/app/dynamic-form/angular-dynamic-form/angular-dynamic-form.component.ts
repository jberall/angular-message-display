import { Component }       from '@angular/core';

import { QuestionService } from './../services/question.service';
@Component({
  selector: 'angular-dynamic-form',
  templateUrl: './angular-dynamic-form.component.html',
  styleUrls: ['./angular-dynamic-form.component.css'],
  providers:  [QuestionService]
})
export class AngularDynamicFormComponent {
  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
    console.log(this.questions);
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
