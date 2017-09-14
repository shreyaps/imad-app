//Checking if the url contains  'articles'
if(window.location.href.indexOf("articles") > -1) {
    
    //Submit comments
    var submitComment = document.getElementById('submit_cmnt');
    submitComment.onclick = function(){
        
        //create xml hhtp request
        var sbmtRequest = new XMLHttpRequest();
        
        sbmtRequest.onreadystatechange = function(){
            
            if(sbmtRequest.readyState === XMLHttpRequest.DONE){
                if(sbmtRequest.state === 200){
                    
                    var comments = sbmtRequest.responseText;
                    comments= JSON.parse(comments);
                    var comList = ''; 
                    for (j = 0; j < comments.length; j++){
                        
                        comList += "<li>" + comments[j] + "</li>";
                        
                    }
                var ul = document.getElementById('commentId');
                ul.innerHTML = comList;
                
                }
            }
            
        };
        
    var commentBox = document.getElementById('commentInput');
    var comment = commentBox.value;
    sbmtRequest.open('GET', 'http://shreya3112.imad.hasura-app.io/submit-comment?comment=' + comment, true);
    sbmtRequest.send(null);
    };

    
}
else{
    
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

//Make request
var username = document.getElementById('username').value;
var password = document.getElementById('password').value;
console.log(username);
console.log(password);
request.open('POST', 'http://shreya3112.imad.hasura-app.io/login' , true);
request.setRequestHeader('Content-Type', 'application/json');
request.send(JSON.stringify({username: username, password: password}));

};


} 