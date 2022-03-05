import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'studentDashboard';
  isdisplay:boolean = true;

  openForm(){
    this.isdisplay =true;
  }

  closeForm(){
    this.isdisplay =false;
  }
}
