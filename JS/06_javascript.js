function is_prime(){
var num1=document.getElementsById("num1").value;
	 for(var i = 2; i < num1; i++) {
        if(num1 % i === 0) {
            return false;
        }
    }
    return num1 > 1;
}
