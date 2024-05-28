import { Component, Input, NgZone } from '@angular/core';

import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

import moment from 'moment';

import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css'
})
export class LineChartComponent {
  @Input() chartData: any = [];
  @Input() uniqueId!: string;
  private root!: am5.Root;
  private platformDetails: any = {
    'bing': {
      dateField: 'TimePeriod',
      revenueField: 'Spend',
    },
    'googleAds': {
      dateField: 'Date',
      revenueField: 'cost',
    },
    'facebook': {
      dateField: 'date_stop',
      revenueField: 'spend',
    },
    'dv360': {
      dateField: 'Date',
      revenueField: 'Revenue (Adv Currency)',
    }
  };

  constructor(private zone: NgZone) {}

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      this.createChart();
    });
  }

  createChart() {
    let aggregatedData: any = [];
    this.chartData.platforms.forEach((platform: any) => {
      if (platform.report && platform.report.report) {
        const reports = platform.report.report;
  
        Object.keys(reports).forEach(date => {
          const report = reports[date];
          const existingReport = aggregatedData.find((item: any) => item[this.platformDetails[platform.platform].dateField] === date);
  
          if (existingReport) {
            existingReport.cost += parseFloat(report[this.platformDetails[platform.platform].revenueField]) || 0;
          } else {
            aggregatedData.push({
              date: date,
              cost: parseFloat(report[this.platformDetails[platform.platform].revenueField]) || 0,
            });
          }
        });
      }
    });
    aggregatedData = aggregatedData.sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime());
    let sortedDates = Object.keys(aggregatedData);
    const currentDate = moment.tz("America/Montreal").startOf("day").toDate();
    const yesterday = moment.tz("America/Montreal").subtract(1, "days").startOf("day").toDate();
    const twoDaysAgo = moment.tz("America/Montreal").subtract(2, "days").startOf("day").toDate();
    let cumulativeCost = 0;
    let estimatedCumulativeCost = 0;
    let yesterdayCampaignCost = 0;
    let data: any = [];
    sortedDates.forEach((date: any) => {
      const revenue = parseFloat(aggregatedData[date].cost);

      let startDates = this.chartData.platforms.map((platform: any) => platform.formData[platform.platform + 'StartDate']);
      startDates = startDates.sort((a: any, b: any) => {
        return Date.parse(a) > Date.parse(b);
      });
      if (startDates.length === 0) {
        return;
      }
      let startDate = moment.tz(startDates[0], "MM/DD/YYYY", "America/Montreal").startOf("day").toDate();

      let endDates = this.chartData.platforms.map((platform: any) => platform.formData[platform.platform + 'EndDate']);
      endDates = endDates.sort((a: any, b: any) => {
        return Date.parse(a) > Date.parse(b);
      });
      if (endDates.length === 0) {
        return;
      }
      let endDate = moment.tz(endDates[-1], "MM/DD/YYYY", "America/Montreal").startOf("day").toDate();
      const daysLeft = ((endDate.getTime() - moment.tz(aggregatedData[date].date, "YYYY/MM/DD", "America/Montreal").startOf("day").toDate().getTime()) / (1000 * 60 * 60 * 24)) + 2;

      if (
        moment.tz(aggregatedData[date].date, "YYYY/MM/DD", "America/Montreal").startOf("day").toDate() >= startDate &&
        moment.tz(aggregatedData[date].date, "YYYY/MM/DD", "America/Montreal").startOf("day").toDate() <= yesterday && !isNaN(revenue)
      ) {
        cumulativeCost += revenue;
      }

      if (
        moment.tz(aggregatedData[date].date, "YYYY/MM/DD", "America/Montreal").startOf("day").toDate() >= startDate &&
        moment.tz(aggregatedData[date].date, "YYYY/MM/DD", "America/Montreal").startOf("day").toDate() <= twoDaysAgo && !isNaN(revenue)
      ) {
        yesterdayCampaignCost = revenue;
      }

      let startDateFormatted = moment(startDate).format("YYYY/MM/DD");
      let currentDateFormatted = moment(aggregatedData[date].date).format("YYYY/MM/DD");
      
      let budget = 0;
      this.chartData.platforms.map((platform: any) => platform.formData[platform.platform + 'Budget']).forEach((platformBudget: any) => {
        budget += parseFloat(platformBudget) || 0;
      });
      
      estimatedCumulativeCost += startDateFormatted === currentDateFormatted ? 0 :
      (budget - yesterdayCampaignCost) /
      (daysLeft > 0 ? daysLeft : 1) + yesterdayCampaignCost;

      data.push({
        date: new Date(aggregatedData[date].date).getTime(),
        campaignCost: Math.round(cumulativeCost * 100) / 100,
        estimatedCost: Math.round(estimatedCumulativeCost * 100) / 100
      });
    });

    let element = document.getElementById(this.uniqueId);
    if (!(element instanceof Element)) {
        setTimeout(() => this.createChart(), 1000);
        return;
    }
    if (this.root) {
        this.root.dispose();
    }
    let root = am5.Root.new(this.uniqueId);

    root.setThemes([am5themes_Animated.new(root)]);

    root.dateFormatter.setAll({
      dateFormat: "yyyy",
      dateFields: ["valueX"]
    });

    // Create chart
    let chart = root.container.children.push(am5xy.XYChart.new(root, {
      focusable: true,
      panX: true,
      panY: true,
      wheelX: "panX",
      wheelY: "zoomX",
      pinchZoomX:true,
      paddingLeft: 0
    }));
   
    let easing = am5.ease.linear;

    // Axes
    let xRenderer = am5xy.AxisRendererX.new(root, {
      minorGridEnabled: true,
      minGridDistance: 70
    });

    xRenderer.labels.template.setAll({
      fontSize: '10px'
    });

    let xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
      maxDeviation: 0.1,
      groupData: false,
      baseInterval: {
        timeUnit: "day",
        count: 1
      },
      renderer: xRenderer,
      tooltip: am5.Tooltip.new(root, {})
    }));

    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      maxDeviation: 0.2,
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
