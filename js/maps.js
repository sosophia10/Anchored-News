
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
  translateX: windoww/2,
  translateY: windowh/2.8,
  centerLon: 0,
  centerLat: 0,
  rotateLambda: 0.1,
  rotatePhi: 0,
  rotateGamma: 0
}

function initcontrol() {
  d3.select('#control')
    .selectAll('.slider.item input')
    .on('input', function(d) {
      var attr = d3.select(this).attr('name');
      state[attr] = this.value;
      d3.select(this.parentNode.parentNode).select('.value').text(this.value);
      update()
    });

  d3.select('#control .projection-type select')
    .on('change', function(d) {
      state.type = this.options[this.selectedIndex].value;
      update()
    })
    .selectAll('option')
    .data(projectionTypes)
    .enter()
    .append('option')
    .attr('value', function(d) {return d;})
    .text(function(d) {return d;});
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

  u.enter()
    .append('path')
    .merge(u)
    .attr('d', geoGenerator)

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
    .data(circles.map(function(d) {
      geoCircle.center(d);
      return geoCircle();
    }));

  u.enter()
    .append('path')
    .merge(u)
    .attr('d', geoGenerator);
}

//source:
//https://gist.github.com/d3indepth/f28e1c3a99ea6d84986f35ac8646fac7#file-ne_110m_land-json
d3.json('https://gist.githubusercontent.com/d3indepth/f28e1c3a99ea6d84986f35ac8646fac7/raw/c58cede8dab4673c91a3db702d50f7447b373d98/ne_110m_land.json', function(err, json) {
  geojson = json;
  initcontrol();
  update();
})

//potential source
//https://github.com/lutangar/cities.json