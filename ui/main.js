console.log('Loaded!');

//change the text of div
var element = document.getElementById('main-text');
element.innerHTML = 'new value';


//move image
var img = document.getElementById('maadi');
img.onclick = function(){
    img.style.marginLeft = '100px';
}