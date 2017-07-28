import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwitchComponent } from './components/switch/switch.component';
import { FormSwitchComponent } from './forms/form-switch/form-switch.component';
import { CounterInputComponent } from './components/counter-input/counter-input.component';
import { FormCounterInputComponent } from './forms/form-counter-input/form-counter-input.component';
import { ThorallMaterialInputComponent } from './components/thorall-material-input/thorall-material-input.component';
import { FormThorallMaterialComponent } from './forms/form-thorall-material/form-thorall-material.component';
const routes: Routes = [

  { path: '', redirectTo: '/form-thorall-material', pathMatch: 'full' },
  { path: 'form-switch', component: FormSwitchComponent },
  { path: 'form-counter-input', component: FormCounterInputComponent },
  { path: 'form-thorall-material', component: FormThorallMaterialComponent },
  
//   { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const appRouteDeclarations = [
    SwitchComponent,  FormSwitchComponent,
    CounterInputComponent,  FormCounterInputComponent,
    ThorallMaterialInputComponent, FormThorallMaterialComponent
      
]
