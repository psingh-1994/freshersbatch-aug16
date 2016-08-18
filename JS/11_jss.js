function calculateVowels(){
	var str="";
	str=document.getElementById("txt").value;

	
	var a=0;
	var o=0;
	var e=0;
	var i=0;
	var u=0;
	
	for(var y=0;y<=str.length;y++)
	{
		var c=str.charAt(y);
		if(c=='a'||c=='A')
				a++;
		
		if(c=='e'||c=='E')
			e++;
		
		if(c=='i'||c=='I')
			i++;
		
		if(c=='o'||c=='O')
			o++;
		
		if(c=='u'||c=='U')
			u++;
	}
	
	document.write("a= "+a+"<br>e= "+e+"<br>i= "+i+"<br>o= "+o+"<br>u= "+u);
}