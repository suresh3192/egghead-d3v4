d3.select('.title')
  .append('div')
    .style('color', 'red')
    .html('Inventory <b>SALE</b>')
  .append('button')
    .style('display', 'block')
    .text('submit');
d3.select('body')
    .insert('h1','.title')
        .text('D3.js DOM element creation and insertion');
