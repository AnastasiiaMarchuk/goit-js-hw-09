
https://developer.mozilla.org/en-US/docs/Web/API/setInterval#examples//

document.querySelector("[data-start]").addEventListener('click', changeColor);
document.querySelector("[data-stop]").addEventListener('click', stopColorChange);

let timerId = null;

function changeColor(){
    if (!timerId) {
    timerId = setInterval(() => {
    document.body.style.background = getRandomHexColor();
    }, 1000);
    console.log('👌')      
    }
}


function stopColorChange(){
    clearInterval(timerId);
    timerId = null;
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

