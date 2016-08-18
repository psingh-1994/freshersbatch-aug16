function divide(){
	var num1=document.getElementById("num1").value;
	var num2=document.getElementById("num2").value;
	if(num2==0){
		alert("No less than 0")
	}
	else{
		var num3=(num1/num2)
	}
	document.write("division="+num3)

}