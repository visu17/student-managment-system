import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-chart-dashboard',
  templateUrl: './chart-dashboard.component.html',
  styleUrls: ['./chart-dashboard.component.scss']
})
export class ChartDashboardComponent implements OnInit {
  salesData: ChartData<'line'> = {
    labels: ['Jan', 'Feb', 'Mar'],
    datasets: [
      { label: 'Viswanadh', data: [2,4,6,8,10,12,14,16 ] },
      { label: 'Sravanthi', data: [2, 2, 9, 16, 18, 20] },
      { label: 'Venkat', data: [10,2,12,2,21] },
      { label: 'Usha Sri', data: [2, 4, 6, 8, 10] },
      { label: 'Pravallika', data: [2, 4, 6, 8, 10] },
    ],
  };
  
  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Student Performance Overview',
      },
    },
  };

  

  constructor() { }

  ngOnInit(): void {
  }

}
