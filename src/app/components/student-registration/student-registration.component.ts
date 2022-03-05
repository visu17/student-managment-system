import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from  '@angular/forms';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.scss'],
})
export class StudentRegistrationComponent implements OnInit {
  batchDetails = [];
  submitting = false;
  timeStamp = Date.now();
  
  constructor(private formBuilder: FormBuilder) {
    this.createStudentForm();
  }
  studentDetail = new Object();
  studentDetailList: Array<Object> = [];

  createStudentForm(){
    this.studentDetail = this.formBuilder.group({
      fullName: [''],  
      email: [''],
      message: ['']
    });
  }
  batches: any = {
    'Batch-10': ['Viswanadh', 'Sravanthi', 'Sayali', 'Venkata Ramana'],
    'Batch-11': ['Usha Sri', 'Venu', 'Pravallika'],
    'Batch-12': ['']
  }
  batchSelected: any = 'Batch-10';

    ngOnInit(): void {
  }

  batchNumber(batch:any){
    this.batchSelected = batch.target.value;
   // this.studentDetailList.push(this.studentDetail);
  }

  submitBatchDetails(){
       this.submitting = true;
    this.timeStamp = Date.now();
    setTimeout(() => {
      this.timeStamp;
      this.submitting = false;
    }, 1000);
    this.batchDetails.push();
  }

}
