var categories=["All categories","Cars & Bikes","Mobiles","Clothes","Furniture","Pets"];
var advertisements=[
{id:"1",contact_no:"0123456789",name:"yamaha",category:"Cars & Bikes",status:"0",src:"images/bike1.jpg",date:"",price:"150000"},
{id:"2",contact_no:"0123456789",name:"sony",category:"Mobiles",status:"0",src:"images/mobile1.jpg",date:"",price:"15000"},
{id:"3",contact_no:"0123456789",name:"shirt",category:"Clothes",status:"0",src:"images/shirt1.jpg",date:"",price:"150"},
{id:"4",contact_no:"0123456789",name:"chairs",category:"Furniture",status:"0",src:"images/furniture1.jpg",date:"",price:"1500"},
{id:"5",contact_no:"0123456789",name:"samsung",category:"Mobiles",status:"0",src:"images/mobile2.jpg",date:"",price:"25000"},
{id:"6",contact_no:"0123456789",name:"doggy",category:"Pets",status:"0",src:"images/pet1.jpg",date:"",price:"1500"}
];



function showCategory(){
	
		category_search();
	var sel = document.getElementById("menu-list");
	var temp_arr=[];
	for(var i in advertisements){
		if(temp_arr.indexOf(advertisements[i].category)==-1){
			 var old = document.getElementById("menu-list").innerHTML;
		    old += "<p id='" + advertisements[i].category + "' onClick= searching_menu(this.id)  > " + advertisements[i].category + "</p>";
		
		}
		else{
			continue;
		}
		document.getElementById("menu-list").innerHTML = old;

	}
	
}


function category_search(){
var sel= document.getElementById("category");

for(var i=0;i<categories.length;i++){
	 var option = document.createElement("option");
	    option.innerHTML = categories[i];
	    option.value = categories[i];
	    sel.appendChild(option);
}
}

 function searching(){
 	 	document.getElementById("my_table").innerHTML="";
	var keyword=document.getElementById("search").value.toUpperCase();	
	var category=document.getElementById("category").value.toUpperCase();
	var j=0;
	var temp1=[];
	temp1=advertisements;
	var sort_price=document.getElementById('filter_price').value;
	//console.log(sort_price);
				if(sort_price=="LtoH" )
					{
						
						temp1.sort(function(a,b){return (a.price-b.price)} );

						
					}
	
				if(sort_price=="HtoL" || sort_price==" ")
				{
					temp1.sort(function(a,b){return (b.price-a.price)});
						
				}			
				
	for(var i=0;i<advertisements.length;i++){
		var temp=advertisements[i].name.toUpperCase();
		if(advertisements[i].category.toUpperCase()==category&&temp.indexOf(keyword)>=0||"ALL CATEGORIES"==category&&temp.indexOf(keyword)>=0)
			{	
				
				var table = document.getElementById("my_table");
				
				console.log(temp1[i].price);
				if(advertisements[i].status=="0")
				{	
					var row = table.insertRow(j);
					j++;
    				var image = row.insertCell(0);
   					var data = row.insertCell(1);
   					var element1 = document.createElement("a");
    					element1.href= "Buy.html";
   						image.appendChild(element1);

   					var element2 = document.createElement("img");
    					element2.src= advertisements[i].src;
   						element1.appendChild(element2);

   						var element3=document.createElement("p");
   						var element4=document.createElement("p");
   						element3.innerHTML=advertisements[i].name;
   						element4.innerHTML = advertisements[i].price;
   						element3.appendChild(element4);
   						data.appendChild(element3);
   					document.getElementById("hidethis").innerHTML = "";

	    			
	    			 
				}
			}
			else{
				var temp=advertisements[i].price;
				if(advertisements[i].category.toUpperCase()==category&&temp.indexOf(keyword)>=0||"ALL CATEGORIES"==category&&temp.indexOf(keyword)>=0)
				{	
				
				var table = document.getElementById("my_table");
				
				console.log(temp1[i].price);
				if(advertisements[i].status=="0")
				{	
					var row = table.insertRow(j);
					j++;
    				var image = row.insertCell(0);
   					var data = row.insertCell(1);
   					var element1 = document.createElement("a");
    					element1.href= "Buy.html";
   						image.appendChild(element1);

   					var element2 = document.createElement("img");
    					element2.src= advertisements[i].src;
   						element1.appendChild(element2);

   						var element3=document.createElement("p");
   						var element4=document.createElement("p");
   						element3.innerHTML=advertisements[i].name;
   						element4.innerHTML = advertisements[i].price;
   						element3.appendChild(element4);
   						data.appendChild(element3);
   					document.getElementById("hidethis").innerHTML = "";

	    			
	    			 
				}
			}
			}

	}


} 

function searching_menu(category){
		//alert("inside");
		document.getElementById('category').value=category;
	
	document.getElementById("my_table").innerHTML="";
	var category=category.toUpperCase();
	var j=0;
	for(var i=0;i<advertisements.length;i++){
		var temp=advertisements[i].name.toUpperCase();
		if(advertisements[i].category.toUpperCase()==category)
			{	
				var table = document.getElementById("my_table");
				if(advertisements[i].status=="0")
				{	
					var row = table.insertRow(j);
					j++;
    				var image = row.insertCell(0);
   					var data = row.insertCell(1);
   					var element1 = document.createElement("a");
    					element1.href= "Buy.html";
   						image.appendChild(element1);

   					var element2 = document.createElement("img");
    					element2.src= advertisements[i].src;
   						element1.appendChild(element2);

   					var element3=document.createElement("p");
   						var element4=document.createElement("p");
   						element3.innerHTML=advertisements[i].name;
   						element4.innerHTML = advertisements[i].price;
   						element3.appendChild(element4);
   						data.appendChild(element3);
   					document.getElementById("hidethis").innerHTML = "";

	    			
	    			 
				}
			}
	}
	
	
}	

function post_ad(){
	var adname=document.getElementById('fname').value;
	var category=document.getElementById('category').value;
	var price=document.getElementById('price').value;
	var image=document.getElementById('image');
	//image = getBase64Image(image);
	var postCountFullStr = localStorage.getItem("postCount");
	var postCount = 0;
	if(postCountFullStr == null || postCountFullStr =="null"){
	postCount = 0;
	}else{
		
		postCount = Number(postCountFullStr);	
	}
	var currentIndex = postCount + 1;
	var postObj =[{
		id:currentIndex,
		name : adname,
		category : category,
		price : price,
		src: image,
		date: "",
		status: "0"
		//brand: brand
	}];
	var postId = "p" + currentIndex;
	localStorage.setItem(postId, JSON.stringify(postObj));
	localStorage.setItem("postCount",currentIndex);
	alert(" Post added successfully ");
	//console.log(postObj[].src);
	var table = document.getElementById("my_table");
	var j=0;
	for( i in postObj){
				console.log(postObj[i].src);
	
				
				//console.log(temp1[i].price);
				if(postObj[i].status=="0")
				{	
					var row = table.insertRow(j);
					j++;
    				var image = row.insertCell(0);
    				var name = row.insertCell(1);
    				var price = row.insertCell(2);
    				var category = row.insertCell(3);
    				
   					////var element1 = document.createElement("a");
    					//element1.href= "Buy.html";
   						

   					var element2 = document.createElement("img");
    					element2.src= postObj[i].src;
   						image.appendChild(element2);
					var element3 = document.createElement("p");
					element3.innerHTML= postObj[i].name;
						name.appendChild(element3);
						var element4 = document.createElement("p");
					element4.innerHTML= postObj[i].price;
						price.appendChild(element4);
						var element5 = document.createElement("p");
					element5.innerHTML= postObj[i].category;
						category.appendChild(element5);
   					//data.innerHTML = postObj[i].contact_no;
   					//document.getElementById("hidethis").innerHTML = "";
}
	
}	
}




