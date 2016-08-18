function add_user(){
	var username = document.getElementById('uname').value;
	var email = document.getElementById('email').value;
	var password = document.getElementById('password1').value;
	var confirmPass = document.getElementById('password2').value;
	var atPosition=email.indexOf('@');
	var dotPosition=email.lastIndexOf('.');
	if(atPosition<1 || atPosition+2>dotPosition || dotPosition+2>email.length)
	{
		alert("not a valid format");
	}
	else{
	if(password==confirmPass){
		var count = 0;
		var str_count =localStorage.getItem("no_of_users");
		if (str_count == null || str_count == "null"){
		      count = 0;
		    } else {
		      count = parseInt(str_count);
		 } 
		count++;
		var users=[{username:username,
					email:email,
					password:password}];

		localStorage.setItem(count , JSON.stringify(users));
		localStorage.setItem("no_of_users", count);
		
		//console.log("User is registered ");
		alert("Registered Successfully");
		// close current modal 
		//document.getElementById('signUp').style.display='none';
		count = count + 1;
		console.log("Last count "+ count);
		location.href="login.html";
		
	}
	else{
		alert("Passwords do not match");
	}
}
	
}

function validate_user(){
	var u_name=document.getElementById("uname").value;
	var p_word=document.getElementById("pass").value;
	if(u_name=='' || p_word==''){
		alert("Please enter the credentials");
	}

	else
	{
		if (typeof(Storage) !== "undefined") {
	    // Store
		var count = 0;
		str_count = localStorage.getItem("no_of_users");
		count = parseInt(str_count);
		console.log("Count users "+count);
		var x_object =1;
		var login_check = 0;
		// // store userId in sessionStorage as well 
		 var user_id = 0;
		 var user_name = 0;
		 for(x_object =1 ; x_object <=count ; x_object++){
		 	var user = JSON.parse(localStorage.getItem(x_object));
		 	var username_storage = user[0].username;
			var password = user[0].password;
			console.log(username_storage +" "+password);

			if(u_name==username_storage&&p_word==password)
			{
				login_check = 1;
				user_id = x_object;
				user_name = user[0].username;
				break;
			}	
		}
		if(login_check == 1){
			sessionStorage.login_check = 1;
		 	sessionStorage.user_id = user_id;
		 	sessionStorage.user_name = user_name;
	     	//alert(sessionStorage.login_check + " " +sessionStorage.user_name+ " " );
			location.href="Home.html";
		}else{
		 	console.log("Not loggedIn");
		 	alert("Wrong username and password");
		 	location.href="login.html";
		// 	//document.getElementById("result").innerHTML = localStorage.getItem("lastname");
		}
	}

else 
{
	    document.getElementById("slideshow-container").innerHTML = "Sorry, your browser does not support Web Storage...";
	}
}
}

function logged_UI(){
	console.log("In render Ui");
	// render footer
	checkLogin();
}
function checkLogin(){
	var selectDiv = document.getElementById('logo-ad');
	sessionStorage.proper_visit=1;
	if(sessionStorage.login_check == 1){
		console.log("User is logged In");
		// Need to display username here
		selectDiv.innerHTML = "<button id=\"login-button\"> "+"Welcome "+sessionStorage.user_name+"</a>";
		selectDiv.innerHTML += "<button id=\"submit-ad-button\" onclick=\"logout()\"> Logout </a>";
		
	}else{
		console.log("User is not loggedIn");
		location.href="login.html";
	}
}
function logout(){
	sessionStorage.login_check = 0;
	redirectPage();
}

function redirectPage(){
	location.href="Home.html";
}

function proper_visit(){
	if(sessionStorage.login_check==1 ){
		document.getElementById('login-button').style.visibility='hidden';
	}
	// var selectDiv = document.getElementById('logo-ad');
	
	// if(sessionStorage.login_check==1 && sessionStorage.proper_visit==1){
	// 	selectDiv.innerHTML = "<button id=\"login-button\"> "+sessionStorage.user_name+"</a>";
	// 	selectDiv.innerHTML += "<button id=\"button1\" onclick=\"logout()\"> Logout </a>";
	// 	selectDiv.innerHTML += "<button id=\"submit-ad-button\" class=\"active\"> Submit free Ad </a>";
		
	// }
}

function validateEmail(){
	var email=document.getElementById('email').value;
	var atPosition=email.indexOf('@');
	var dotPosition=email.lastIndexOf('.');
	if(atPosition<1 || atPosition+2>dotPosition || dotPosition+2>email.length)
		return false;
		//alert("Not a valid Email");
	//alert(atPosition+" "+dotPosition);

}