function table(){
	var num1=document.getElementById('num1').value

	for(var i=1;i<10;i++){


    document.write("<tr><td>" + num1 + " x " + i + " = " + num1*i + "</td></tr>")
    document.write("<br />");

	}
	var r=confirm("Do u Want to continue for next number");
	if (r==true)
		{ document.location.href=("file:///D:/assignments/04_js.html"); }
 
 }