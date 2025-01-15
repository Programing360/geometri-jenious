function rectangleTextValue(){
    const rectangleWidth = document.getElementById('rectangle-width')
    const width = rectangleWidth.value;
    const rectangleText = parseFloat(width)
    // console.log('paisi', rectangleText);
    // rectangle length
    const rectangleLength = document.getElementById('rectangle-length')
    const length = rectangleLength.value;
    const rectangleTextValue = parseFloat(length)
    console.log(rectangleTextValue);
    // display rectangle area

    const areaValue = rectangleText * rectangleTextValue;
    // console.log(areaValue)
    
    const rectangleSpan = document.getElementById('rectangle-span')
    rectangleSpan.innerText = areaValue
    
}