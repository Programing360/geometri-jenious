function triangle(){
    const landInput = document.getElementById('land-input')
    const landInputValue = landInput.value
    const base = parseFloat(landInputValue)
    // console.log( base)

    const heightInput = document.getElementById('height-input');
    const heightInputValue = heightInput.value
    const heightBase = parseFloat(heightInputValue)
    // console.log(heightBase)

    const areaTotal = 0.5 * base * heightBase
    // console.log('sum:', areaTotal)
    const areaResult = document.getElementById('result');
    areaResult.innerText = areaTotal;
    
    
}