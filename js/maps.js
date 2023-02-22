
//used on home and trends pages

//source:
//https://bl.ocks.org/d3indepth/f7ece0ab9a3df06a8cecd2c0e33e54ef
var geojson;
var projectionTypes = [
  'Equirectangular',
  'Orthographic',
  'Stereographic',
  'AzimuthalEqualArea',
  'AzimuthalEquidistant',
  'Gnomonic',
  'Albers',
  'ConicConformal',
  'ConicEqualArea',
  'ConicEquidistant',
  'Mercator',
  'TransverseMercator'
];

var projection;
var geoGenerator = d3.geoPath()
  .projection(projection);

var graticule = d3.geoGraticule();

var circles = [
  [-135, 0], [-90, 0], [-45, 0], [0, 0], [45, 0], [90, 0], [135, 0], [180, 0],
  [0, -70], [0, -35], [0, 35], [0, 70],
  [180, -70], [180, -35], [180, 35], [180, 70],
];
var geoCircle = d3.geoCircle().radius(10).precision(1);

let windowh = window.innerHeight;
let windoww = window.innerWidth;


var state = {
  type: 'Equirectangular',
  scale: 250,
  translateX: windoww / 2,
  translateY: windowh / 2.8,
  centerLon: 0,
  centerLat: 0,
  rotateLambda: 0.1,
  rotatePhi: 0,
  rotateGamma: 0
}

function initcontrol() {
  d3.select('#control')
    .selectAll('.slider.item input')
    .on('input', function (d) {
      var attr = d3.select(this).attr('name');
      state[attr] = this.value;
      d3.select(this.parentNode.parentNode).select('.value').text(this.value);
      update()
    });

  d3.select('#control .projection-type select')
    .on('change', function (d) {
      state.type = this.options[this.selectedIndex].value;
      update()
    })
    .selectAll('option')
    .data(projectionTypes)
    .enter()
    .append('option')
    .attr('value', function (d) { return d; })
    .text(function (d) { return d; });
}



function update() {
  // Update projection
  projection = d3['geo' + state.type]()
  geoGenerator.projection(projection);

  projection
    .scale(state.scale)
    .translate([state.translateX, state.translateY])
    .center([state.centerLon, state.centerLat])
    .rotate([state.rotateLambda, state.rotatePhi, state.rotateGamma])

  // Update world map
  var u = d3.select('g.map')
    .selectAll('path')
    .data(geojson.features)

  const tooltipContainer = d3.select('.tooltip-container');

  // Add country name to tooltip container on mouseover
  u.enter()
    .append('path')
    .merge(u)
    .attr('d', geoGenerator)
    .attr('class', 'country')
    //hover actions    
    .on('mouseover', function (d) {
      d3.select(this).style('cursor', 'pointer');
      tooltipContainer
        .style('display', 'inline-block')
        .html(d.properties.name);
    })
    // Remove country name from tooltip container on mouseout
    .on('mouseout', function () {
      tooltipContainer.style('display', 'none');
    });

  // Attach a mousemove event listener to the document
  document.addEventListener('mousemove', (event) => {
    // Get the mouse position
    const mouseX = event.pageX;
    const mouseY = event.pageY;

    // Set the position of the tooltip container to be equal to the mouse position
    tooltipContainer
      .style('left', mouseX + 'px')
      .style('top', mouseY + 'px');
  });



  // Update projection center
  var projectedCenter = projection([state.centerLon, state.centerLat]);
  d3.select('.projection-center')
    .attr('cx', projectedCenter[0])
    .attr('cy', projectedCenter[1]);

  // Update graticule
  d3.select('.graticule path')
    .datum(graticule())
    .attr('d', geoGenerator);

  // Update circles
  u = d3.select('.circles')
    .selectAll('path')
    .data(circles.map(function (d) {
      geoCircle.center(d);
      return geoCircle();
    }));

  u.enter()
    .append('path')
    .merge(u)
    .attr('d', geoGenerator);
}


//drag to translate
var drag = d3.drag()
  .on("drag", function () {
    state.translateX += d3.event.dx;
    state.translateY += d3.event.dy;
    update();
  });

d3.select(".feed-background")
  .call(drag);


//zoom to scale
var zoom = d3.zoom()
  .scaleExtent([90, 900])
  .on("zoom", function () {
    state.scale = d3.event.transform.k * 2;
    update();
  });

d3.select(".feed-background")
  .call(zoom);

//source:
d3.json("data/geojson/world-coordinates.geo.json", function (error, data) {

  geojson = data;
  initcontrol();
  update();
});


