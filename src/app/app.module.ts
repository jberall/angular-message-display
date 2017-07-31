
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedFormsModule } from './shared/shared-forms.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule,appRouteDeclarations } from './app-routing.module';

import { DynamicFormModule } from './dynamic-form/dynamic-form.module';
//Material 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { MdErrorComponent } from './components/md-error/md-error.component';
import { MdHintComponent } from './components/md-hint/md-hint.component';
import { ThorallMdHintComponent } from './components/thorall-md-hint/thorall-md-hint.component';
import { ThorallMdErrorComponent } from './components/thorall-md-error/thorall-md-error.component';
import { ThorallMdInputComponent } from './components/thorall-md-input/thorall-md-input.component';
import { MaterialTemplateComponent } from './components/material-template/material-template.component';

// import { TrimValueAccessor } from './directives/trim-value-accessor.directive';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // ReactiveFormsModule,
    // FormsModule,
    SharedFormsModule,
    MaterialModule,
    DynamicFormModule,
    AppRoutingModule,
    // TrimValueAccessor    
    
  ],
  declarations: [
    AppComponent,
    appRouteDeclarations,
    CustomInputComponent,
    MdErrorComponent,
    MdHintComponent,
    ThorallMdHintComponent,
    ThorallMdErrorComponent,
    ThorallMdInputComponent,
    MaterialTemplateComponent,
    // TrimValueAccessor,
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}