//Header change to yellow when moused over
var pageHeading = document.getElementById( 'heading' );

pageHeading.addEventListener('mouseover', function () {
  pageHeading.className = 'bold';
})

// Paragraph font size change to 20px when clicked
var pageParagraph = document.getElementById( 'paragraph' );

pageParagraph.addEventListener('click', function () {
  pageParagraph.className = 'grow';
})

// Circle change color to white when double clicked
var pageCircle = document.getElementById( 'circle' );

pageCircle.addEventListener('dblclick', function () {
  pageCircle.className = 'white';
})
