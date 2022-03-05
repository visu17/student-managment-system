import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.scss'],
})
export class StudentRegistrationComponent implements OnInit {
  batchSelected: any = '--Please Select Batch--';
  studentName: string = '--Please Select Student--';
  labStatus: string = '--Please Select Post--';
  presenceStatus: string = '';
  submitting = false;
  timeStamp = Date.now();
  studentDetail = new Object();
  studentDetailList: Array<any> = [];

  isValid: boolean = false;

  batches: any = {
    'Batch-10': ['Viswanadh', 'Sravanthi', 'Sayali', 'Venkata Ramana'],
    'Batch-11': ['Usha Sri', 'Venu', 'Pravallika'],
    'Batch-12': [''],
  };

  constructor(private datePipe: DatePipe) {}

  ngOnInit(): void {}

  submitBatchDetails() {
    if (
      this.batchSelected != '--Please Select Batch--' &&
      this.studentName != '--Please Select Student--' &&
      this.labStatus != '--Please Select Post--' &&
      this.presenceStatus != ''
    ) {
      this.submitting = true;
      this.timeStamp = Date.now();
      setTimeout(() => {
        this.timeStamp;
        this.submitting = false;
      }, 1000);

      this.studentDetail = {
        batch: this.batchSelected,
        studentName: this.studentName,
        labStatus: this.labStatus,
        presenceStatus: this.presenceStatus,
        submittedDate: this.datePipe.transform(new Date(), 'dd/MM/yyyy'),
      };
      this.studentDetailList.push(this.studentDetail);
      console.log(this.studentDetailList);
    } else {
      alert('Please Fill the details');
    }
  }
}
