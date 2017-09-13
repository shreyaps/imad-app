//submit username and password
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    
    //Create a request object
    var request = new XMLHttpRequest();
    
    //capture the respose and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
        //take some action
            if(request.status === 200){
                console.log("User Successfully logged in");
                alert("logged in successfully");
                    
            }else if(request.status === 403){
                alert("username password are invalid");
                
            }else if(request.status === 500){
                alert("something went wrong at the server");
            }
            
        }
    };
    //Not done yet
//var commentBox = document.getElementByid('comment');

//Submit comments
var submitComment = document.getElementById('submit_cmnt');
submitComment.onclick = function(){
    
    //create xml hhtp request
    var sbmtRequest = new XmlHttpRequest();
    
    sbmtRequest.onreadystatechange = function(){
        alert("onreadystatechange - changed, submit comment clicked")
        if(sbmtRequest.readyState === XmlHttpRequest.DONE){
            if(sbmtRequest.state === 200){
                
                var comments = ["Comment 1 ", "Comment 2", "Comment 3"];
                for (j = 0; j < comments.length; j++){
                    
                    var com = "<li>" + comments[i] + "</li>";
                    
                    document.getElementById('commentId').innerHTML=com;
                    
                    
                }
                
            }
        }
    };
    
};


//Make request
var username = document.getElementById('username').value;
var password = document.getElementById('password').value;
console.log(username);
console.log(password);
request.open('POST', 'http://shreya3112.imad.hasura-app.io/login' , true);
request.setRequestHeader('Content-Type', 'application/json');
request.send(JSON.stringify({username: username, password: password}));

sbmtRequest.open('GET', 'http://shreya3112.imad.hasura-app.io//submit-comment' , true);
sbmtRequest.send(null);

} ;