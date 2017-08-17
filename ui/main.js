var button = document.getElementById('counter');

button.onclick = function(){
    
    //Create a request object
    var request = new XMLHttpRequest();
    
    //capture the respose and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
        //take some action
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    //Not done yet
    
    } ;
//Make request
request.open('GET', 'http://shreya3112.imad.hasura-app.io/counter', true);
request.send(null);
};


//submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    
    //Create a request object
    var request = new XMLHttpRequest();
    
    //capture the respose and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
        //take some action
            if(request.status === 200){
                //capture the list of names and render it to a list
                var names = request.responseText;
                names =JSON.parse(names);
                var list = '';
                for(var i = 0 ; i< names.length; i++){
                   list += '<li>' + names[i] + '</li>';
                    
            }
        var ul = document.getElementById('namelist');
        ul.innerHTML = list;
        }
    }
    //Not done yet
    
} ;
//Make request
request.open('GET', 'http://shreya3112.imad.hasura-app.io/counter', true);
request.send(null);
    
};
