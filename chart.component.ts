// chart.component.ts
import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
selector: 'app-chart',
templateUrl: './chart.component.html',
styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
@Input() data: { label: string, value: number }[] = [];
@Input() type: 'bar' | 'line' | 'pie' = 'bar';
chart: Chart;

constructor() { }

ngOnInit(): void {
const canvas = document.getElementById('language-chart') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

this.chart = new Chart(ctx, {
    type: this.type,
    data: {
      labels: this.data.map(item => item.label),
      datasets: [{
        label: '',
        data: this.data.map(item => item.value),
        backgroundColor: ['#ffcc00', '#ff5733', '#c70039', '#900c3f', '#581845']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

}

ngOnChanges(): void {
if (this.chart) {
this.chart.destroy();
}

this.ngOnInit();

}

ngOnDestroy(): void {
if (this.chart) {
this.chart.destroy();
}
}
}
