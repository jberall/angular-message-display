import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule, ReactiveFormsModule }         from '@angular/forms';

import { SharedFormsModule } from '../shared/shared-forms.module';

import { DynamicFormRoutingModule, dynamicFormDeclarations } from './dynamic-form-routing.module';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

@NgModule({
  imports: [
    // CommonModule,
    // ReactiveFormsModule,
    // FormsModule,
    SharedFormsModule,
    DynamicFormRoutingModule
  ],
  declarations: [
    dynamicFormDeclarations,
    DynamicFormQuestionComponent,
    DynamicFormComponent
  ]
})
export class DynamicFormModule { }
