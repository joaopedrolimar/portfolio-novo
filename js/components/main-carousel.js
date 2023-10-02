const botaoRight = document.querySelector(".button-arrow.-right");
const botaoLeft = document.querySelector(".button-arrow.-left");
const elements = document.querySelector(".elements");
var pixels = 0;

    
    botaoRight.addEventListener("click", () => {
        
        pixels = pixels + 100;
        elements.style = ` transform:  translateX(${pixels}px)`
});

    botaoLeft.addEventListener("click", () => {
        pixels = pixels - 100
        elements.style = `transform: translateX(${pixels}px)`
});