import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-major',
  templateUrl: './major.component.html',
  styleUrl: './major.component.css'
})
export class MajorComponent {

  majorForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.majorForm = this.fb.group({
      student: [{ value: 'Sok Sovvan', disabled: true }, [Validators.required]],
      department: [{ value: 'Department of Computer Science  Engineering', disabled: true }, Validators.required],
      levelofStudy: [{ value: 'Bachelor', disabled: true }, Validators.required],
      major: [{ value: 'Computer Sience and Engineering Bachelor', disabled: true }, Validators.required],
      admissionData: [{ value: '06-Nov-2024', disabled: true }, Validators.required],
      curriculum: [{ value: 'Curriculum of CSE', disabled: true }, Validators.required],
      intakeNumber: [{ value: '8', disabled: true }, Validators.required]
    });
  };

  onSubmit(){
    if(this.majorForm.valid){ // valid is true and false
      console.log(this.majorForm.value);
    }else{
      console.log('Failed');
    }
  }


}
