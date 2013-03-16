/**
 * This file contains behaviours for taking milestones data and rendering it using JS Fiddle
 */

(function($) {
	Drupal.behaviors.kairosDashboard = {
		attach: function(context, settings) {
			// Initialize the data array.
			var series = [];
			$(settings.kairosDashboardMilestones).each(function (projectNid, milestonesDates) {

			});

			// Create the data array for milestones. Create an entry for each
			// project and each date.
			for (i = 0; i < 90; i++) {
				$(settings.kairosDashboardMilestones).each(function (projectNid, milestonesDates) {

				});	
			}


	    	var chart;
	        chart = new Highcharts.Chart({
	            chart: {
	                renderTo: 'foobar'
	            },
	            title: {
	                text: 'Milestones Chart'
	            },
	            xAxis: {
	                categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week ']
	            },
	            tooltip: {
	                formatter: function() {
	                    var s;
	                    if (this.point.name) { // the pie chart
	                        s = ''+
	                            this.point.name +': '+ this.y +' fruits';
	                    } else {
	                        s = ''+
	                            this.x  +': '+ this.y;
	                    }
	                    return s;
	                }
	            },
	            plotOptions: {
	                column: {
	                    stacking: 'normal',
	                    dataLabels: {
	                        enabled: true,
	                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
	                    }
	                }
	            },
	            labels: {
	                items: [{
	                    html: 'label',
	                    style: {
	                        left: '40px',
	                        top: '8px',
	                        color: 'black'
	                    }
	                }]
	            },
	            series: [{
	                type: 'column',
	                name: 'Project1',
	                data: [3, 2, 1, 3, 4]
	            }, {
	                type: 'column',
	                name: 'Project2',
	                data: [2, 3, 5, 7, 6]
	            }, {
	                type: 'column',
	                name: 'Project3',
	                data: [4, 3, 3, 9, 0]
	            }, {
	                type: 'spline',
	                name: 'Projected Workload',
	                data: [10, 9, 3, 6.33, 9],
	                marker: {
	                	lineWidth: 2,
	                	lineColor: Highcharts.getOptions().colors[3],
	                	fillColor: 'white'
	                }
	            },]
	        });		
		}
	};

})(jQuery);