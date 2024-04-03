const enterButton = document.getElementById("enterButton")
const colorArray =  ["#EA0B0B", "#6540FC", "#63AECE", "#D16FDC", "#238100", "#FEFF00", "#FF7B00", "#0055FF", "#1C1C2E", "#FFA9A3", "#F88FFF"];
const boxes = document.getElementsByTagName('div')
const mainContainer = document.querySelector('main')



enterButton.addEventListener('click', (event) =>{
    const colorItems = document.createElement('div')
    colorItems.setAttribute('class','items')
    
    
    
    
    
    colorItems.style.borderColor = colorArray[Math.floor(Math.random()*colorArray.length)]
    
    
    
    
    
    
    
    
    
    
    if(boxes.length === 0){
        mainContainer.append(colorItems)
    
    
    
    
    
    
    
    
    }else {
        boxes[boxes.length-1].append(colorItems)
        if(boxes.length === 19){
            mainContainer.removeChild(boxes[0])  
        }
    }





})