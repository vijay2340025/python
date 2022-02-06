function d3update() {
// add your code here

numArray = [10,20,30,40,50]

d3.selectAll('li')
  .data(numArray)
  .style({
    'font-size': function(d){ return d+"px" }
  })

};
d3update();
