function check_vowel(){
	var aph=document.getElementById("aph").value
	if(aph=="a"||aph=="e"||aph=="i"||aph=="o"||aph=="u"){
		document.write("You have entered a vowel")
	}
	else{
		document.write("You have entered a consonant")
	}
}