export default function(elementName) {
  var container = document.getElementById(elementName);
  var data = {
    categories: ['2013-1', '2013-2', '2014-1', '2014-2', '2017-1','2017-2','2018-1'],
    series: [{
      name: '학점',
      data: [2.9, 3.1, 2.8, 3.4, 3.1, 2.7, 3.1]
    }]
  };
  tui.chart.barChart(container, data);
};