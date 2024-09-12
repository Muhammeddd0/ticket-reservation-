import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  ngOnInit() {
    this.initChart();
  }

  initChart() {
    const chartDom = document.getElementById('main')!;
    const myChart = echarts.init(chartDom);
    const  option = {
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'cross',
              label: {
                  backgroundColor: '#6a7985'
              }
          }
      },
      xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['يناير', 'فبراير', 'مارس', 'ابريل', 'مايو', 'يونيو', 'يوليو', 'اغسطس', 'سبتمبر', 'اكتوبر', 'نوفمبر', 'ديسمبر'],
          axisLabel: {
              fontSize: 12,
              color: '#909399',
              
          }
      },
      yAxis: {
          type: 'value',
          axisLabel: {
              show: false  // إخفاء خط المحور
          }
      },
      series: [
          {
              name: 'استخدام',
              type: 'line',
              smooth: true,
              data: [130,90, 120, 200, 120, 150, 160, 250, 90, 190, 200, 230],
              areaStyle: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      { offset: 0, color: 'rgba(98, 77, 255, 0.7)' },
                      { offset: 1, color: 'rgba(98, 77, 255, 0)' }
                  ])
              },
              lineStyle: {
                  color: '#624dff',
                  width: 1
              },
              
          }
      ]
  };

    myChart.setOption(option);
  }

}
