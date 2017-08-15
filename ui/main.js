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

var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    //Make a request to the server and send the name
    
    //capture the list of names and render it to a list
    var names = ['name1', 'name2', 'name3', 'name4'] ;
    var list = '';
    for(var i = 0 ; i< names.length; i++){
       list += '<li>' + names[i] + '</li>';
        
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
};

var nameInput = document.getElementById('name');
var name = nameInput.value;
