import * as d3 from 'd3'
import * as topojson from 'topojson'

let margin = { top: 10, left: 10, right: 10, bottom: 10 }

let height = 1000 - margin.top - margin.bottom
let width = 1000 - margin.left - margin.right

let svg = d3
  .select('#chart-3')
  .append('svg')
  .attr('height', height + margin.top + margin.bottom)
  .attr('width', width + margin.left + margin.right)
  .append('g')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

let nyc = [-74, 40]
let sf = [-122, 37]
let golog = [100.2448, 34.4714]
let beijing = [116.4074, 39.9042]
let russia_center = [92.8932, 56.0153]
let tehran = [51.3890, 35.6892]
let pyongyang = [125.7625, 39.0392]

let projection = d3.geoOrthographic()
let path = d3.geoPath().projection(projection)

d3.json(require('./data/world.topojson'))
  .then(ready)
  .catch(err => console.log('Failed on', err))

function ready(json) {
  let countries = topojson.feature(json, json.objects.countries)
  projection.fitSize([width, height], countries)

  svg
    .append('path')
    .datum({ type: 'Sphere' })
    .attr('d', path)
    .attr('class', 'sphere')
    .attr('fill', '#202226')
    // .attr('stroke', 'black')
    // .attr('stroke-width', .3)

  svg
    .append('g')
    .selectAll('.country')
    .data(countries.features)
    .enter()
    .append('path')
    .attr('class', 'country')
    .attr('d', path)
    .attr('fill', 'white')
    .attr('stroke', 'black')
    .attr('stroke-width', 0.1)

  d3.select('#step-russia').on('stepin', () => {
    d3.transition()
      .duration(500)
      .tween('rotate', () => {
        let target = [-russia_center[0], -russia_center[1]]
        let rotationInterpolator = d3.interpolate(projection.rotate(), target) 
        return function(t) {
          var currentRotation = rotationInterpolator(t)
          projection.rotate(currentRotation)
          svg.selectAll('.country').attr('d', path)
          svg.selectAll('.sphere').attr('d', path)
        }
      })
  })

  d3.select('#step-iran').on('stepin', () => {
    d3.transition()
      .duration(500)
      .tween('rotate', () => {
        let target = [-tehran[0], -tehran[1]]
        let rotationInterpolator = d3.interpolate(projection.rotate(), target) 
        return function(t) {
          var currentRotation = rotationInterpolator(t)
          projection.rotate(currentRotation)
          svg.selectAll('.country').attr('d', path)
          svg.selectAll('.sphere').attr('d', path)
        }
      })
  })

    d3.select('#step-nk').on('stepin', () => {
    d3.transition()
      .duration(500)
      .tween('rotate', () => {
        let target = [-pyongyang[0], -pyongyang[1]]
        let rotationInterpolator = d3.interpolate(projection.rotate(), target) 
        return function(t) {
          var currentRotation = rotationInterpolator(t)
          projection.rotate(currentRotation)
          svg.selectAll('.country').attr('d', path)
          svg.selectAll('.sphere').attr('d', path)
        }
      })
  })

  d3.select('#step-china').on('stepin', () => {
    d3.transition()
      .duration(500)
      .tween('rotate', () => {
        let target = [-golog[0], -golog[1]]
        let rotationInterpolator = d3.interpolate(projection.rotate(), target) 
        return function(t) {
          var currentRotation = rotationInterpolator(t)
          projection.rotate(currentRotation)
          svg.selectAll('.country').attr('d', path)
          svg.selectAll('.sphere').attr('d', path)
        }
      })
  })
}
