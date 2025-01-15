function parallelogramCalculation(){
    const parallelogramBase = document.getElementById('parallelogram-base')
    const parallelogramText = parallelogramBase.value;
    const base = parseFloat(parallelogramText)
    console.log('i am strong', base)

    // get parallelogram-height

    const parallelogramHeight = document.getElementById('parallelogram-height');
    const heightValue = parallelogramHeight.value;
    const height = parseFloat(heightValue)
    console.log(height)

    // display area
    const area = base * height;
    const areaInput = document.getElementById('area-input')
    areaInput.innerText = area;
    
    
}
// change-display-color
function dispalyColorChange(){
        const colorChange = document.getElementById("change-display-color");
        colorChange.style.backgroundColor = 'orange'
}