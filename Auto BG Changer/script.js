const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = "#"
    for(let i = 0; i<6; i++){
        //const randomNum = parseInt(Math.random()*16)
        color+=hex[parseInt(Math.random()*16)];
    }
    return color
}

let intervalId
const startChanging = function () {
    if(!intervalId){
        intervalId = setInterval(changeBG, 1000)
    }

    function changeBG() {
        document.body.style.backgroundColor = randomColor();
    }
}

const stopChanging = function () {
    clearInterval(intervalId)
    intervalId = null
}

document.getElementById('start').addEventListener('click', startChanging);
document.getElementById('stop').addEventListener('click', stopChanging);