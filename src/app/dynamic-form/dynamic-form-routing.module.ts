import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngularDynamicFormComponent } from '../dynamic-form/angular-dynamic-form/angular-dynamic-form.component';

const routes: Routes = [
  { path: 'ang-dynamic-form', component: AngularDynamicFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicFormRoutingModule { }

export const dynamicFormDeclarations = [
  AngularDynamicFormComponent
];