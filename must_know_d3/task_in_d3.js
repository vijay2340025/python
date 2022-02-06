function d3update() {
  // add your code here

  d3.select('li:nth-child(3n)')
    .style('color','blue')
    .html('Hello World')
    .classed('big', true)
};

d3update();
