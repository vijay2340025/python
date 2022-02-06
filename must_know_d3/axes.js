function barChart() {
    var that = {};

    that.render = function() {
        // add your code here 

        numArray = [10,20,30,40,50,60]
        d3.select('#chart')
          .append('svg')
          .attr('width', 500)
          .attr('height', 500)
          .selectAll('rect')
          .data(numArray)
          .enter()
          .append('rect')
          .style('color', 'red')
      };

        return that;
}

var c=barChart();
c.render();
