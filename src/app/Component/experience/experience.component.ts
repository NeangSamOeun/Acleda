import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'] 
})
export class ExperienceComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      position: [null, Validators.required],
      organization: [null, Validators.required],
      employmentType: [null, Validators.required],
      salaryrange: [null, Validators.required],
      phonenumber: [null, Validators.required],
      logcation: [null, Validators.required],
      date: [null, Validators.required],
      aboutyourwork: [null, Validators.required],
      
    });
  }

  onSubmit()  {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    }else{
      console.log('Value faild');
    }

  }

}
