import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms'; 

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm : FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.employeeForm = this.fb.group({
      fullName: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
      email: [''],
      skills: this.fb.group({
        skillName: [''],
        experienceInYears: [''],
        proficiency: ['beginner']
      }),
    })
  }

  onLoadDataClick() : void{
    this.employeeForm.patchValue({
      fullName : 'Ankita Patel',
      email : 'ankitapatel25789@gmail.com',
      skills : {
      skillName : 'Angular',
      experienceInYears : 3,
      proficiency : 'beginner'
     }
    })
  }

  onSubmit() : void{
    console.log(this.employeeForm)
  }


}
