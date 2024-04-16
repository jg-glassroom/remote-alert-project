import { Component } from '@angular/core';

import { MatIconModule } from '@angular/material/icon'
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';

import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

import moment from 'moment';
import { any } from '@amcharts/amcharts5/.internal/core/util/Array';

@Component({
  selector: 'app-pacing-template',
  standalone: true,
  imports: [MatIconModule, MatDividerModule, MatGridListModule, MatChipsModule],
  templateUrl: './pacing-template.component.html',
  styleUrl: './pacing-template.component.css'
})

export class PacingTemplateComponent {

  ngOnInit() {
    this.createChart();
    this.createBudgetChart("pacing-bullet-chart", true, 45, 60);
    this.createBudgetChart("pacing-bullet-google", true, 72, 81);
    this.createBudgetChart("pacing-bullet-bing", true, 62, 63);
  }

  private createSeries(root: any, chart: any, data: any, xAxis: any, yAxis: any, color: number) {
    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    let series = chart.series.push(am5xy.LineSeries.new(root, {
      minBulletDistance: 10,
      connect: false,
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "value",
      valueXField: "date",
      //fill: am5.color(color),
      tooltip: am5.Tooltip.new(root, {
        pointerOrientation: "horizontal",
        labelText: "{platform} spent {valueY}$",
        labelHTML: `<div class="tooltipam" style="font-size:12px;">{platform} <strong>spent</strong> {valueY}$</div>`
      })
    }));

    series.fills.template.setAll({
      fillOpacity: 0.2,
      visible: true
    });

    series.strokes.template.setAll({
      strokeWidth: 1
    });


    // Set up data processor to parse string dates
    // https://www.amcharts.com/docs/v5/concepts/data/#Pre_processing_data
    series.data.processor = am5.DataProcessor.new(root, {
      dateFormat: "yyyy-MM-dd",
      dateFields: ["date"]
    });

    series.data.setAll(data);

    series.bullets.push(function() {
      let circle = am5.Circle.new(root, {
        radius: 3,
        fill: root.interfaceColors.get("background"),
        stroke: series.get("fill"),
        strokeWidth: 1
      })

      return am5.Bullet.new(root, {
        sprite: circle
      })
    });

  };

  private createBudgetChart(divId : string, gradient : boolean, spend:number, estimated:number){
    /*
    let colors = [
      am5.color(0x19d228),
      am5.color(0xb4dd1e),
      am5.color(0xf4fb16),
      am5.color(0xf6d32b),
      am5.color(0xfb7116)
    ];
    */
    let colors = [
      am5.color(0xf9f9f9),
      am5.color(0xeaeaea)
    ];
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    let root = am5.Root.new(divId);
  
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
  
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "none",
        wheelY: "none",
        arrangeTooltips: false
      })
    );
  
    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/

    let yRenderer = am5xy.AxisRendererY.new(root, {});
    yRenderer.labels.template.setAll({
      fontSize: '10px'
    });

    let yAxis = chart.yAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "category",
        renderer: yRenderer
      })
    );
  
    yAxis.data.setAll([{ category: "Budget" }]);
  
    let xRenderer = am5xy.AxisRendererX.new(root, {});
    xRenderer.grid.template.set("forceHidden", true);

    xRenderer.labels.template.setAll({
      fontSize: '10px'
    });

    let xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: xRenderer,
        min: 0,
        max: 100,
        numberFormat: "#.'%'"
      })
    );
  
    // Add range
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    if (gradient) {
      let rangeDataItem = xAxis.makeDataItem({ value: 0, endValue: 100 });
      let range = xAxis.createAxisRange(rangeDataItem);
      
      let axisFill = rangeDataItem.get("axisFill");
      if (axisFill) {
        axisFill.setAll({
          visible: true, 
          fillOpacity:1
        });
      }

      let stops = [];
      for (var i = 0; i < colors.length; i++) {
        stops.push({ color: colors[i] });
      }
  
      let linearGradient = am5.LinearGradient.new(root, {
        rotation: 0,
        stops: stops
      });
      
      let rangedAxisFill = rangeDataItem.get("axisFill");
      if(rangedAxisFill){
        rangedAxisFill.set("fillGradient", linearGradient);
      }
    } else {
      let count = colors.length;
      for (var i = 0; i < count; i++) {
        let rangeDataItem = xAxis.makeDataItem({
          value: (i / count) * 100,
          endValue: ((i + 1) / count) * 100
        });
        let range = xAxis.createAxisRange(rangeDataItem);
        
        let rangedAxisFill = rangeDataItem.get("axisFill");
        if(rangedAxisFill){
          rangedAxisFill.setAll({
            visible: true,
            fill: colors[i],
            stroke: colors[i],
            fillOpacity:1
          });
        }
      }
    }
  
    let series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        xAxis: xAxis,
        yAxis: yAxis,
        valueXField: "value",
        categoryYField: "category",
        fill: am5.color(0x7351BA),
        stroke: am5.color(0x7351BA),
        tooltip: am5.Tooltip.new(root, {
          pointerOrientation: "right",
          labelText: "Spent {valueX}%",
          labelHTML: `<div class="tooltipam" style="font-size:12px;">Spent: <strong>{valueX}%</strong></div>`
        })      
      })
    );
  
    series.columns.template.setAll({
      height: am5.p50
    });
  
    series.data.setAll([{ category: "Budget", value: spend }]);
  
    let stepSeries = chart.series.push(
      am5xy.StepLineSeries.new(root, {
        xAxis: xAxis,
        yAxis: yAxis,
        valueXField: "value",
        categoryYField: "category",
        stroke: am5.color(0x6066E0),
        fill: am5.color(0x6066E0),
        noRisers: true,
        stepWidth: am5.p50,
        tooltip: am5.Tooltip.new(root, {
          pointerOrientation: "left",
          labelText: "Estimated spend: {valueX}%",
          labelHTML: `<div class="tooltipam" style="font-size:12px;">Estimated: <strong>{valueX}%</strong></div>`
        })
      })
    );
  
    stepSeries.strokes.template.set("strokeWidth", 3);
    stepSeries.data.setAll([{ category: "Budget", value: estimated }]);
  
    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
      behavior: "none"
    })
    );
    cursor.lineY.set("visible", false);
    cursor.lineX.set("visible", false);
  
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);
  
    series.appear();
    stepSeries.appear();

  }

  private createChart(){
    let root = am5.Root.new("line-chart");
    root.setThemes([am5themes_Animated.new(root)]);

    root.dateFormatter.setAll({
      dateFormat: "yyyy",
      dateFields: ["valueX"]
    });

    let data_1 = [{
      "date": "2012-07-27",
      "value": 13,
      "platform": "facebook"
    }, {
      "date": "2012-07-28",
      "value": 11,
      "platform": "facebook"
    }, {
      "date": "2012-07-29",
      "value": 15,
      "platform": "facebook"
    }, {
      "date": "2012-07-30",
      "value": 16,
      "platform": "facebook"
    }, {
      "date": "2012-07-31",
      "value": 18,
      "platform": "facebook"
    }, {
      "date": "2012-08-01",
      "value": 13,
      "platform": "facebook"
    }, {
      "date": "2012-08-02",
      "value": 22,
      "platform": "facebook"
    }, {
      "date": "2012-08-03",
      "value": 23,
      "platform": "facebook"
    }, {
      "date": "2012-08-04",
      "value": 20,
      "platform": "facebook"
    }, {
      "date": "2012-08-05",
      "value": 17,
      "platform": "facebook"
    }];

    let data_2 = [{
      "date": "2012-07-27",
      "value": 11,
      "platform": "dv360"
    }, {
      "date": "2012-07-28",
      "value": 25,
      "platform": "dv360"
    }, {
      "date": "2012-07-29",
      "value": 16,
      "platform": "dv360"
    }, {
      "date": "2012-07-30",
      "value": 8,
      "platform": "dv360"
    }, {
      "date": "2012-07-31",
      "value": 4,
      "platform": "dv360"
    }, {
      "date": "2012-08-01",
      "value": 9,
      "platform": "dv360"
    }, {
      "date": "2012-08-02",
      "value": 21,
      "platform": "dv360"
    }, {
      "date": "2012-08-03",
      "value": 26,
      "platform": "dv360"
    }, {
      "date": "2012-08-04",
      "value": 25,
      "platform": "dv360"
    }, {
      "date": "2012-08-05",
      "value": 13,
      "platform": "dv360"
    }];

    let data_3 = [{
      "date": "2012-07-27",
      "value": 3,
      "platform": "bing"
    }, {
      "date": "2012-07-28",
      "value": 22,
      "platform": "bing"
    }, {
      "date": "2012-07-29",
      "value": 13,
      "platform": "bing"
    }, {
      "date": "2012-07-30",
      "value": 8,
      "platform": "bing"
    }, {
      "date": "2012-07-31",
      "value": 6,
      "platform": "bing"
    }, {
      "date": "2012-08-01",
      "value": 12,
      "platform": "bing"
    }, {
      "date": "2012-08-02",
      "value": 32,
      "platform": "bing"
    }, {
      "date": "2012-08-03",
      "value": 21,
      "platform": "bing"
    }, {
      "date": "2012-08-04",
      "value": 20,
      "platform": "bing"
    }, {
      "date": "2012-08-05",
      "value": 14,
      "platform": "bing"
    }];

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
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

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/

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
      tooltip: am5.Tooltip.new(root, {
      })
    }));
    
    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      maxDeviation: 0.2,
      renderer: am5xy.AxisRendererY.new(root, {})
    }));

    this.createSeries(root, chart, data_1, xAxis, yAxis, 0x1877F2)
    this.createSeries(root, chart, data_2, xAxis, yAxis, 0x1877F2)
    this.createSeries(root, chart, data_3, xAxis, yAxis, 0x1877F2)

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
      xAxis: xAxis,
      behavior: "none"
    }));
    cursor.lineY.set("visible", false);

    // add scrollbar
    chart.set("scrollbarX", am5.Scrollbar.new(root, {
      orientation: "horizontal"
    }));


    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);
  }

}

export interface PlatformCampaigns {
  id: number; label: string;
}

export interface PacingResults {
  platform: string;
  campaigns: PlatformCampaigns[];
  complete_percentage: number;
  start_date: string;
  end_date: string;
  spent: number;
  estimated: number;
  pacing_overall: number;
  pacing_yesterday: number;
  pacing_7_days: number;
  estimated_spend: number;
}

const PACING_DATA: PacingResults[] = [
  {
    campaigns: [
      {
        id : 1257880085,
        label : "FB Always on Food Basics EN",
      },
      {
        id : 1257841088,
        label : "FB Always on Food Basics FR",
      }
    ],
    platform: 'facebook',
    complete_percentage: 0.45,
    start_date: 'Jan. 25 2024',
    end_date: 'Jun. 6 2024',
    spent: 0.45,
    estimated: 0.60,
    pacing_overall: 0.08,
    pacing_yesterday: 0.78,
    pacing_7_days: 0.12,
    estimated_spend: 358
  },
  {
    campaigns: [
      {
        id : 9875213,
        label : "DV360 Always on Food Basics EN",
      },
      {
        id : 8721264,
        label : "DV360 Always on Food Basics FR",
      }
    ],
    platform: 'dv360',
    complete_percentage: 0.86,
    start_date: 'Jan. 25 2024',
    end_date: 'Jun. 6 2024',
    spent: 0.55,
    estimated: 0.78,
    pacing_overall: 0.04,
    pacing_yesterday: 0.45,
    pacing_7_days: 0.54,
    estimated_spend: 394
  }
];