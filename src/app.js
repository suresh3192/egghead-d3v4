// make console.log write to the page for better in-browser experience
(function () {
  var body = document.querySelector('body');
  body.style['fontFamily'] = 'monospace';
  body.style['fontSize'] = '2em';
  console.log = function (x) { body.innerText += x + '\n'; };
}());


var timeScale = d3.scaleTime()
  .domain([new Date(2016, 0, 1), new Date(2016,11,31)])
  .range([1, 365]);


var today = new Date();
var timeScale1 = d3.scaleTime().domain([today,new Date(today.getFullYear()+1,today.getMonth(),today.getDay())]).range([0,100]);


console.log(timeScale1.invert(300));


console.log(timeScale(new Date()));
console.log(timeScale(new Date(2016, 3, 15)));
console.log(timeScale(new Date()));

console.log(timeScale.invert(50));
