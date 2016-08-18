function calc_birthyear(){
var age=document.getElementById("age").value;
var today=new Date();
var year=today.getFullYear();
var birthyear=year-age;
document.write("birthyear"+birthyear);
}
