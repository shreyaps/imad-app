var button = document.getElementById('counter');
button.onclick = function(){
    //make a request to the endpoint
    
    //capture the respose and store it in a variable
    
    //Render the variable in the correct span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
} 