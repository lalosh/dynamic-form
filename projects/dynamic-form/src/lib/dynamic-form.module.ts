import { NgModule } from '@angular/core';
import { DynamicFormComponent } from './dynamic-form.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DynamicFormComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    DynamicFormComponent
  ]
})
export class DynamicFormModule { }
