import { Component, Input, NgZone } from '@angular/core';

import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

import moment from 'moment';


@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css'
})
export class LineChartComponent {
  @Input() chartData: any = [];
  private root!: am5.Root;

  constructor(private zone: NgZone) {}

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      this.createChart();
    });
  }

  createChart() {
    let sortedDates = Object.keys(this.chartData.report).sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
    const currentDate = moment.tz("America/Montreal").startOf("day").toDate();
    const yesterday = moment.tz("America/Montreal").subtract(1, "days").startOf("day").toDate();
    const twoDaysAgo = moment.tz("America/Montreal").subtract(2, "days").startOf("day").toDate();
    let cumulativeCost = 0;
    let estimatedCumulativeCost = 0;
    let yesterdayCampaignCost = 0;
    let data: any = [];
    
    sortedDates.forEach((date: any, index) => {
      const revenue = this.chartData.report[date]["Revenue (Adv Currency)"];

      const startDate = moment.tz(this.chartData.StartDate, "MM/DD/YYYY", "America/Montreal").startOf("day").toDate();
      const endDate = moment.tz(this.chartData.EndDate, "MM/DD/YYYY", "America/Montreal").startOf("day").toDate();
      const daysLeft = ((endDate.getTime() - moment.tz(date, "YYYY/MM/DD", "America/Montreal").startOf("day").toDate().getTime()) / (1000 * 60 * 60 * 24)) + 2;

      if (
        moment.tz(date, "YYYY/MM/DD", "America/Montreal").startOf("day").toDate() >= startDate &&
        moment.tz(date, "YYYY/MM/DD", "America/Montreal").startOf("day").toDate() <= yesterday
      ) {
        cumulativeCost += revenue;
      }

      if (
        moment.tz(date, "YYYY/MM/DD", "America/Montreal").startOf("day").toDate() >= startDate &&
        moment.tz(date, "YYYY/MM/DD", "America/Montreal").startOf("day").toDate() <= twoDaysAgo && !isNaN(revenue)
      ) {
        yesterdayCampaignCost += revenue;
      }

      let startDateFormatted = moment(startDate).format("YYYY/MM/DD");
      let currentDateFormatted = moment(currentDate).format("YYYY/MM/DD");
      
      estimatedCumulativeCost += startDateFormatted === currentDateFormatted ? 0 :
      (this.chartData.Budget - yesterdayCampaignCost) /
      (daysLeft > 0 ? daysLeft : 1);

      data.push({
        date: new Date(date).getTime(),
        campaignCost: Math.round(cumulativeCost * 100) / 100,
        estimatedCost: Math.round(estimatedCumulativeCost * 100) / 100
      });
    });
  
    let root = am5.Root.new("chartdiv");

    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(am5xy.XYChart.new(root, {
      panY: false,
      wheelY: "zoomX",
      layout: root.verticalLayout
    }));

    // Axes
    let xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
      baseInterval: { timeUnit: "day", count: 1 },
      renderer: am5xy.AxisRendererX.new(root, {}),
      tooltip: am5.Tooltip.new(root, {})
    }));

    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {})
    }));

    let seriesReal = chart.series.push(am5xy.LineSeries.new(root, {
      name: "Spend",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "campaignCost",
      valueXField: "date",
      tooltip: am5.Tooltip.new(root, { labelText: "{valueY}" }),
      stroke: am5.color(0xFF0000),
    }));
    seriesReal.strokes.template.setAll({
      strokeWidth: 2,
    });
    seriesReal.data.setAll(data);

    let seriesEstimated = chart.series.push(am5xy.LineSeries.new(root, {
      name: "Estimated spend",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "estimatedCost",
      valueXField: "date",
      tooltip: am5.Tooltip.new(root, { labelText: "{valueY}" }),
      stroke: am5.color(0x0000FF),
    }));
    seriesEstimated.strokes.template.setAll({
      strokeWidth: 2,
    });
    seriesEstimated.data.setAll(data);

    let legend = chart.children.push(am5.Legend.new(root, {
      x: am5.percent(22),
      y: am5.p0,
      layout: root.verticalLayout
    }));

    legend.labels.template.setAll({
      fontSize: 12,
      fill: am5.color(0x000000), 
    });

    legend.data.setAll(chart.series.values);

    chart.set("cursor", am5xy.XYCursor.new(root, {}));
    this.root = root;
  }

  ngOnDestroy() {
    if (this.root) {
      this.root.dispose();
    }
  }
}
