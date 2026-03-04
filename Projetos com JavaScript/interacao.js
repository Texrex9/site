function setBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

document.getElementById('redButton').addEventListener('click', function() {setBackgroundColor('red');});
document.getElementById('greenButton').addEventListener('click', function() {setBackgroundColor('green');});
document.getElementById('blueButton').addEventListener('click', function() {setBackgroundColor('blue');});

document.getElementById('inputBox').addEventListener('keypress', function(event){
    alert("A tecla pressionada: " + event.key);
});