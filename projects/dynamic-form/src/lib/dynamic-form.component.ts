import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  constructor() { }


  // @Input() formItems: {
  //   [key: string]: TextBoxReturnType | BaseReturnType
  // };

  @Input() formItems: any;

  ngOnInit(): void {

    console.log('got.. ', this.formItems);
  }

}
