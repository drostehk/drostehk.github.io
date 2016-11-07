

// <script type="text/javascript">

  var width = 960,
      height = 500;

  var x = d3.scale.linear()
      .domain([-5, 5])
      .range([0, width]);

  var y = d3.scale.linear()
      .domain([-5, 5])
      .range([0, height]);

  var data = d3.range(3).map(function(ind) {
    return {
      xloc: width / 2, yloc: height / 2
    };
  });

  var colours = ["#C6276C", "#F7B95F", "#FFFFFF"];

  var svgContainer = d3.select("#d3").append("svg")
    .attr('width', width)
    .attr('height', height);

  var gradient = svg.append("svg:defs")
      .append("svg:linearGradient")
      .attr("id", "gradient")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "100%")
      .attr("y2", "100%")
      .attr("spreadMethod", "pad");

  gradient.append("svg:stop")
      .attr("offset", "0%")
      .attr("stop-color", "#C6276C")
      .attr("stop-opacity", 1);

  gradient.append("svg:stop")
      .attr("offset", "100%")
      .attr("stop-color", "#F7B95F")
      .attr("stop-opacity", 1);

  var circles = svgContainer.selectAll('circle')
      .data(data)
    .enter().append('circle')
      .attr("cx", 0 )
      .attr("cy", 0)
      .attr("r", 1 );
  

  var temp_func = function() {

    data.forEach(function(d) {
      d.xloc += d.xdel;
      d.yloc += d.ydel;
      d.xdel += 0.03 * (Math.random() - .5) - 0.05 * d.xdel - 0.0005 * d.xloc;
      d.ydel += 0.03 * (Math.random() - .5) - 0.05 * d.ydel - 0.0005 * d.yloc;
    });

    circles
      .transition()
      .duration(1000)
      .attr("transform", function(d) { return "translate(" + x(d.xloc) + "," + y(d.yloc) + ")"; })
      .attr("r", function(d) { return Math.min(1 + 1000 * Math.abs(d.xvel * d.yvel), 15); })
      .style("stroke", function(d, i) { return colours[i]; })
      .style("fill",  "none");

  }

  temp_func();













// </script>


