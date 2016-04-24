//Method to create the chart
function makeHighchartsObject1(){
$(function () {
    $('#container1').highcharts({
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        title: {
            text: '% of each race population in Hartford'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Race',
            data: [
                ['Black', 35.0],
                ['White', 16.0],
                {
                    name: 'Hispanic',
                    y: 44.0,
                    sliced: true,
                    selected: true
                },
                ['Asian', 3.0],
                ['Others', 5.0]
            ]
        }]
    });
});
}
