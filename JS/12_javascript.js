function pallindrome(){
	var d=document.getElementById("txt").value;
	var t="";
	for(var i=d.length;i>=0;i--)
	{
		t=t+d.charAt(i);
	}
	
	if(d==t)
	{
		alert("pallindrome");
	}
	else
	{
		var temp=0;
		for(var i=0;i<=d.length;i++)
		{
			var ch=d.charAt(i);
			if(ch=='a'||ch=='A'||ch=='e'||ch=='E'||ch=='i'||ch=='I'||ch=='o'||ch=='O'||ch=='u'||ch=='U')
				temp++;
		}
		
		if(temp==0)
			{
				alert("Consonant");
			}
		else
			{
				alert("Neither a Pallindrom nor a Consonant");
			}
	}
}