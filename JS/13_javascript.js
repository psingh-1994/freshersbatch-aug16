function validateEmail()
	 {
    var x = document.getElementById("abc").value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) 
        alert("Not a valid e-mail address");
else
        alert("Valid");
    
}