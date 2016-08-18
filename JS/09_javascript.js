function Calc(){
var array_list=new Array();
array_list[0]=3;
array_list[1]=4;

array_list[2]=5;
array_list[3]=6;
array_list[4]=7;

var largest=Math.max(...array_list);
var smallest=Math.min(...array_list);
var total=0;
for (i in array_list){
	 total += array_list[i]; 
}
var avg = total/5;
document.write("The maximum is" +largest);
document.write("The smallest is" +smallest);
document.write("The total is" +total);
document.write("The avg is" +avg);

}