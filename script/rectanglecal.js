function calculateRectangleArea(){
    const rectangleLength = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLength.value;
    const length = parseFloat(rectangleLengthText);
    console.log(length);

    const rectangleWidth = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidth.value;
    const width = parseFloat(rectangleWidthText);
    console.log(width);

    const area = length * width;
    console.log(area);

  const triangleAreaSpan = document.getElementById('rectangle-area')
  triangleAreaSpan.innerText = area;                
   
}