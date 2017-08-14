console.log('Loaded!');

//change the text of div
var element = document.getElementById('main-text');
element.innerHTML = 'new value';


//move image
var img = document.getElementById('maadi');
var marginLeft = 0;
function moveRight (){
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px'; 
}
img.onclick = function(){
    var interval = setInterval(moveRight, 100);
}