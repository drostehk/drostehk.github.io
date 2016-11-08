// paths 
// https://squiggle.city/~frencil/archives/20150501.html
// using Orbit and Particle js objects
// interp1
var i1 = d3.select("#interp1").append("g").attr("transform","scale(10)");
var i1o = new Orbit().id("i1o").duration(4000)
    .tension(0.5).interpolate("cardinal-closed")
    .path([ [2, 10], [10, 2], [18, 10], [10, 18] ])
    .appendTo(i1);
var i1p = new Particle().type("neutron").id("i1p").scale(1).appendTo(i1);
i1o.attachParticle(i1p.node);

// interp2
var i2 = d3.select("#interp2").append("g").attr("transform","scale(10)");
var i2o = new Orbit().id("i2o").duration(4000)
    .tension(0.1).interpolate("monotone")
    .path([ [2, 10], [10, 2], [18, 10], [10, 18] ])
    .appendTo(i2);
var i2p = new Particle().type("neutron").id("i2p").scale(1).appendTo(i2);
i2o.attachParticle(i2p.node);

// interp3
var i3 = d3.select("#interp3").append("g").attr("transform","scale(10)");
var i3o = new Orbit().id("i3o").duration(4000)
    .tension(0.9).interpolate("step")
    .path([ [2, 10], [10, 2], [18, 10], [10, 18] ])
    .appendTo(i3);
var i3p = new Particle().type("neutron").id("i3p").scale(1).appendTo(i3);
i3o.attachParticle(i3p.node);


// force layout and collision notes & code

var force = d3.layout.force()
  .nodes(nodes) // your data <- this is force.nodes()
  .size([width, height])
  .on("tick", tick);

force.start()


// where nodes
nodes = [
{amount: 20},
{amount: 10},
...
]; 


// now
node = vis.selectAll("circle")  
  .data(force.nodes()) // here it is
  .enter().append("circle")
  .style("fill", "steelblue");
  .attr("r", 10)

// now write tick
function tick() {
  node.attr("cx", function(d) {return d.x;})
      .attr("cy", function(d) {return d.y;});
}

force
  .charge(-300) // -94 closer together than -300
  .gravity(0.1); // can have 0 gravity


// -- to make radius dep on node amount --------------
node = vis.selectAll("circle")  
  .data(force.nodes()) // here it is
  .enter().append("circle")
  .style("fill", "steelblue");
  .attr("r", function(d) {return rScale(d.amount);});

var force = d3.layout.force()
  .nodes(nodes) // your data <- this is force.nodes()
  .size([width, height])
  .on("tick", tick)
  .charge(charge);
function charge(d) {
  return d.amount * d.amount * -0.25;
}


// -- messing with the position -> using Alpha, heading towards a point (or two)

force.alpha(); // access the current alpha value

function tick(e) { // or maybe this should be force.on("tick", function(e) {})
  // first change the position
  node.each(messWithNodePosition(e.alpha));

  node.attr("cx", function(d) {return d.x;})
      .attr("cy", function(d) {return d.y;});
}
function messWithNodePosition(alpha) {
  return function(d) {
    var center = centreVariable[d.whichCentre] // store in data

    d.x += (center.x - d.x) * 0.1 * alpha;
    d.y += (center.y - d.y) * 0.1 * alpha;
  }
}
// where
var centreVariable = {
  oneCentre: {x: 300, y: 400},
  twoCentre: {x: 900, y: 400}
};

// -- COLLISION DETECTION
// -- using a quadtree q = d3.geom.quadtree(nodes)
while(++i < n) q.visit(collide(nodes[i])) // if this returns true, other nodes are not visited

// -- collide code
function collide(node) {
  var r = node.radius + 16,
      nx1 = node.x - r,
      nx2 = node.x + r,
      ny1 = node.y - r,
      ny2 = node.y + r; // this is a bounding box, the node may be inside it
  return function(quad, x1, y1, x2, y2) { // this is required by quad.visit() function
    if (quad.point && (quad.point !== node)) {
      var x = node.x - quad.point.x,
          y = node.y - quad.point.y,
          l = Math.sqrt(x * x + y * y),
          r = node.radius + quad.point.radius;
      if (l < r) { // if there is an overlap, adjust
        l = (l - r) / l * .5;
        node.x -= x *= l;
        node.y -= y *= l;
        quad.point.x += x;
        quad.point.y += y;
      }
    }
    return x1 > nx2
        || x2 < nx1
        || y1 > ny2
        || y2 < ny1; // is the node in the box?
  };
}

/*
# quadtree.visit(callback) <>

Visits each node in the quadtree in pre-order traversal, invoking the specified callback with arguments node, x0, y0, x1, y1 for each node, where node is the node being visited, ⟨x0, y0⟩ are the lower bounds of the node, and ⟨x1, y1⟩ are the upper bounds, and returns the quadtree. (Assuming that positive x is right and positive y is down, as is typically the case in Canvas and SVG, ⟨x0, y0⟩ is the top-left corner and ⟨x1, y1⟩ is the lower-right corner; however, the coordinate system is arbitrary, so more formally x0 <= x1 and y0 <= y1.)

If the callback returns true for a given node, then the children of that node are not visited; otherwise, all child nodes are visited. This can be used to quickly visit only parts of the tree, for example when using the Barnes–Hut approximation. Note, however, that child quadrants are always visited in sibling order: top-left, top-right, bottom-left, bottom-right. In cases such as search, visiting siblings in a specific order may be faster.

http://d3-wiki.readthedocs.io/zh_CN/master/Quadtree-Geom/
Each node in the quadtree has several properties:

nodes - a sparse array of the four child nodes in order: top-left, top-right, bottom-left, bottom-right
leaf - a boolean indicating whether this is an internal node or a leaf node
point - the point associated with this node, if any (may apply to either internal or leaf nodes)
x - the x-coordinate of the associated point, if any
y - the y-coordinate of the associated point, if any
*/

