// app.js

// Sample data
const labels = ['HTML', 'CSS', 'JavaScript', 'jQuerry', 'Ajax', 'PHP', 'Laravel', 'Python', 'Django', 'MySQL', 'Jira', 'GitHub'];
const data = [5, 4.5, 3.5, 4, 4, 3, 3, 3, 3, 4, 4, 4];

// Get the canvas element from the HTML
const canvas = document.getElementById('myBarChart');

// Create a 2D context for the canvas
const ctx = canvas.getContext('2d');

// Create a bar chart
const myBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [{
      label: 'Data',
      data: data,
      backgroundColor: ['#7dbef7', '#7df7c4', '#e2f77d', '#f7c07d','#f77d7d', '#f77dbd', '#d87df7', '#7f8090', '#67c6d2', '#7f8090', '#67c6d2'], // Bar colors
    }],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
        legend: {
          display: false, // Set display property to false to hide the legend
        },
    },
  },
});

// Sample data representing points on the road map
const roadMapData = [
  { label: 'Bachelors', x: 100 , y: 100 },
  { label: 'Cource: Core Java, Selenium', x: 250, y: 100 },
  { label: 'Joined as "Software Developer trainee" @ Codentrix technologies', x: 325, y: 50 },
  { label: 'HTML, CSS', x: 400, y: 100 },
  { label: 'Proj. Invoice print Application', x: 550, y: 100 },
  { label: 'JQuery', x: 700, y: 100 },
  { label: 'JavaScript, PHP, Laravel', x: 850, y: 100 },
  { label: 'Promotion "Software Developer"', x: 850, y: 200 },
  { label: 'MySQL', x: 700, y: 200 },
  { label: 'Proj. Tracerbee', x: 550, y: 200 },
  { label: 'Proj. PharmTracQR', x: 400, y: 200 },
  { label: 'Senior Software Engineer', x: 100 , y: 200 },
  { label: 'Award "Excellence"', x: 100 , y: 300 },
  { label: 'Python, Django', x: 250, y: 300 },
  { label: 'Proj. Formulation', x: 400, y: 300 },
  { label: 'Masters - Datascience', x: 700, y: 300 },
];

// Set up the SVG container
const svg = d3.select('#roadMap')
  .append('svg')
  .attr('width', 1000)
  .attr('height', 400)
  .attr('style', "font-size:12");

// Draw lines connecting each point
svg.selectAll('line')
  .data(roadMapData.slice(0, -1)) // Exclude the last point to prevent connecting back to the start
  .enter()
  .append('line')
  .attr('x1', d => d.x)
  .attr('y1', d => d.y)
  .attr('x2', (d, i) => roadMapData[i + 1].x)
  .attr('y2', (d, i) => roadMapData[i + 1].y)
  .style('stroke', '#000')
  .style('stroke-width', 3);

// Draw circles for each point on the road map
svg.selectAll('circle')
  .data(roadMapData)
  .enter()
  .append('circle')
  .attr('cx', d => d.x)
  .attr('cy', d => d.y)
  .attr('r', 10) // Radius of the circles
  .style('fill', 'rgb(50 84 227)');

// Add labels to the circles
svg.selectAll('text')
  .data(roadMapData)
  .enter()
  .append('text')
  .attr('x', d => d.x)
  .attr('y', d => d.y - 15)
  .text(d => d.label)
  .style('text-anchor', 'middle')
  .style('fill', 'black');
