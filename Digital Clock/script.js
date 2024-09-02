const arr = ['red', 'purple', 'yellow', 'pink', 'violet', 'aqua', 'aquamarine']

setInterval(() => {
    const index = Math.floor(Math.random()*7)
    document.getElementById('clock').innerHTML = new Date().toLocaleTimeString()
    document.body.style.backgroundColor = `${arr[index]}`;
    console.log(index)
},1000)