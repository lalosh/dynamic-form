import { BaseReturnType } from './form-items/base';
import { Component, OnInit, Input } from '@angular/core';
import { TextBoxFormItem, TextBoxReturnType } from './form-items/text-box';
import { Validators } from '@angular/forms';



@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  constructor() { }


  @Input() formItems: {
    [key: string]: TextBoxReturnType | BaseReturnType
  };


  ngOnInit(): void {

    console.log('got.. ', this.formItems);
  }

}
