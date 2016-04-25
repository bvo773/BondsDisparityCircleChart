//Method to create the chart
function makeHighchartsObject2(){
    $(function () {
    $('#container2').highcharts({

        chart: {
            type: 'column'
        },

        title: {
            text: 'Per Capita for each race in Hartford'
        },

        xAxis: {
            categories: ['Hartford']
        },

        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: 'Per Capita'
            }
        },

        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y +  '/100'+'<br/>' +
                    'Total: ' + this.point.stackTotal;
            }
        },

        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },

        series: [{
            name: 'Black',
            data: [12],
        }, {
            name: 'White',
            data: [20],
        }, {
            name: 'Hispanic',
            data: [5],
        }, {
            name: 'Asian',
            data: [5],
        }]
    });
});
}