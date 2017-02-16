function displayGraphExampleOne(id, width, height, interpolation, animate, updateDelay, transitionDelay) {
    var graph = d3.select(id).append("svg:svg").attr("width", "100%").attr("height", "100%");
    
    var dataOne = [68, 16, 59, 38, 39, 50, 71, 22, 88, 31, 24, 3, 93, 2, 82, 6, 73, 96, 94, 68, 43, 20, 82, 62, 20, 51, 80, 18, 10, 94, 2, 66, 13, 47, 53, 65, 1, 15, 22, 30, 53, 64, 58, 34, 42, 93, 27, 77, 2, 88, 89, 81, 48, 95, 91, 64, 73, 38, 76, 79, 90, 94, 56, 37, 35, 99, 81, 19, 14, 14, 97, 74, 49, 81, 38, 5, 84, 19, 50, 72, 47, 2, 58, 8, 93, 85, 34, 38, 75, 54, 51, 39, 2, 38, 54, 13, 48, 58, 5, 90, 67, 40, 46, 67, 3, 96, 7, 11, 69, 42, 15, 52, 15, 40, 11, 70, 99, 87, 16, 23, 77, 18, 47, 7, 79, 69, 14, 60, 54, 15, 27, 93, 57, 56, 22, 88, 10, 24, 55, 77, 76, 94, 61, 84, 77, 89, 51, 99, 6, 99, 100, 35, 72, 13, 55, 80, 65, 18, 49, 33, 53, 31, 51, 52, 39, 71, 63, 80, 14, 39, 29, 3, 17, 86, 75, 42, 43, 5, 50, 40, 9, 82, 90, 85, 62, 5, 25, 34, 17, 76, 68, 27, 49, 13, 62, 34, 3, 4, 26, 21];
    
    var x = d3.scale.linear().domain([0, 48]).range([-5, width]);
    var y = d3.scale.linear().domain([0, 100]).range([0, height]);
    var line = d3.svg.line()
        .x(function(d,i) { 
            return x(i); 
        })
        .y(function(d) { 
            return y(d); 
        })
        .interpolate(interpolation)
        
        graph.append("svg:path").attr("d", line(dataOne));
        
        function redrawWithAnimation() {
            graph.selectAll("path")
                .data([dataOne])
                .attr("transform", "translate(" + x(1) + ")")
                .attr("d", line)
                .transition()
                .ease("linear")
                .duration(transitionDelay)
                .attr("transform", "translate(" + x(0) + ")");
        }
        
        setInterval(function() {
           var v = dataOne.shift();
           dataOne.push(v);
           if(animate) {
               redrawWithAnimation();
           } else {
               redrawWithoutAnimation();
           }
        }, updateDelay);
    }
    
    displayGraphExampleOne("#graph1", 400, 100, "basis", true, 280, 280);

function displayGraphExampleTwo(id, width, height, interpolation, animate, updateDelay, transitionDelay) {
    var graph = d3.select(id).append("svg:svg").attr("width", "100%").attr("height", "100%");

    var dataTwo = [33, 76, 67, 74, 32, 82, 62, 1, 78, 4, 13, 88, 61, 26, 58, 42, 79, 69, 3, 19, 10, 91, 94, 20, 27, 8, 51, 87, 85, 65, 17, 77, 35, 37, 93, 36, 60, 63, 39, 73, 43, 75, 9, 66, 25, 49, 97, 90, 47, 70, 18, 41, 50, 34, 53, 23, 30, 92, 14, 84, 16, 95, 28, 31, 96, 68, 80, 21, 72, 99, 15, 83, 6, 64, 59, 54, 86, 12, 55, 71, 7, 22, 52, 24, 5, 29, 56, 2, 100, 98, 48, 11, 40, 57, 45, 81, 89, 38, 46, 44];
    
    var x = d3.scale.linear().domain([0, 48]).range([-5, width]);
    var y = d3.scale.linear().domain([0, 100]).range([0, height]);
    var line = d3.svg.line()
        .x(function(d,i) { 
            return x(i); 
        })
        .y(function(d) { 
            return y(d); 
        })
        .interpolate(interpolation)
        
        graph.append("svg:path").attr("d", line(dataTwo));
        
        function redrawWithAnimation() {
            graph.selectAll("path")
                .data([dataTwo])
                .attr("transform", "translate(" + x(1) + ")")
                .attr("d", line)
                .transition()
                .ease("linear")
                .duration(transitionDelay)
                .attr("transform", "translate(" + x(0) + ")");
        }
        
        setInterval(function() {
           var v = dataTwo.shift();
           dataTwo.push(v);
           if(animate) {
               redrawWithAnimation();
           } else {
               redrawWithoutAnimation();
           }
        }, updateDelay);
    }
    
    displayGraphExampleTwo("#graph2", 400, 100, "basis", true, 280, 280);
