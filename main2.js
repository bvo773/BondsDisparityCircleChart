function makeHighchartsObject2(){
$(function () {
    $('#container2').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Per capita for each race in Hartford'
        },
        subtitle: {
            text: 'Mirror CT'
        },
        xAxis: {
            categories: [
                'Hartford',
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Per Capita/100'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:} dollars</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Black',
            data: [12]

        }, {
            name: 'White',
            data: [20]

        },{
            name: 'Asian',
            data: [5]
        }, {
            name: 'Hispanic',
            data: [5]
        }]
    });
});
}