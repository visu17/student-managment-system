import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-chart-dashboard',
  templateUrl: './chart-dashboard.component.html',
  styleUrls: ['./chart-dashboard.component.scss'],
})
export class ChartDashboardComponent implements OnInit {
  salesData: ChartData<'line'> = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      { label: 'Viswanadh', data: [10, 20, 30, 40, 30, 20] },
      { label: 'Sravanthi', data: [40, 30, 20, 10, 30, 25] },
      { label: 'Venkat', data: [10, 2, 12, 5, 2, 8, 12] },
      { label: 'Usha Sri', data: [2, 4, 6, 7, 42, 35, 12] },
      { label: 'Pravallika', data: [2, 4, 6, 15, 25, 35] },
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

  constructor() {}

  ngOnInit(): void {}
}
