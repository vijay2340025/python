function barChart() {
    var that = {};
    that.render = function() {
      //add your code here

      numArray = [10,20,30,40,50]

        d3.select('#pieChart')
          .append('svg')
          .attr('width', 500)
          .attr('height', 500)
          .selectAll('rect')
          .data(numArray)
          .enter()
          .append('rect')
          .attr('class', 'arc')
          .style('color', 'red')

        d3.layout.pie()

      };

        return that;
}

var c=barChart();
c.render();
