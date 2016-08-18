function factorial(){
	var num1=document.getElementById("num1").value;
	var fact =1;
	for (var i=1;i<=num1;i++)
	{
		 fact=fact*i;

	}
	document.write("Factorial is" + fact);
}