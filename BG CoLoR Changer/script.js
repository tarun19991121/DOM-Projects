let body = document.querySelector('body');

let colors = document.querySelectorAll('span');

colors.forEach(function (button){
    button.addEventListener('click', function(e){
        /*switch(e.target.id) {
            case e.target.id:
                body1.style.backgroundColor = e.target.id;
                break;
        }*/
        switch (e.target.id) {
            case "grey":
                body.style.backgroundColor = "grey";
                break;
            case "yellow":
                body.style.backgroundColor = "yellow";
                break;
            case "purple":
                body.style.backgroundColor = "purple";
                break;
            case "red":
                body.style.backgroundColor = "red";
                break;
            case "pink":
                body.style.backgroundColor = "pink";
                break;
        }
    })
})