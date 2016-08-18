function validate_1(){
    var attempt = 3;
    var uname = document.getElementById("uname").value;
    var pass = document.getElementById("pass").value;
    do{
        if ( uname == "abcde" && pass == "abc#123"){
            alert ("Login successfully");
          
        }
        else{
            attempt --;
            alert("You have left "+attempt+" attempt;");
        }

    }while(attempt<=0);
    if( attempt == 0){
        document.getElementById("uname").disabled = true;
        document.getElementById("pass").disabled = true;
        return false;
        }
    
}