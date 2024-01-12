function changeColor() {
    document.getElementById("header").style.color = "red";
}

function showPicture(){
    document.getElementById("profile").style.display = "block";
}

function moveButton(){
    var button = document.getElementById("movingButton");
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    button.style.left = x + 'px';
    button.style.top = y + 'px';
}