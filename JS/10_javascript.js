function ascsort(){
var array_list=new Array();
array_list[0]=3;
array_list[1]=4;

array_list[2]=5;
array_list[3]=6;
array_list[4]=7;
array_list.sort()
document.write("The ascending order is "+array_list);
}
function dessort(){
var array_list=new Array();
array_list[0]=3;
array_list[1]=4;

array_list[2]=5;
array_list[3]=6;
array_list[4]=7;
array_list.sort()
array_list[0]=array_list[4];
array_list[1]=array_list[3];

array_list[2]=array_list[2];
array_list[3]=array_list[1];
array_list[4]=array_list[0];


document.write("The descending order is "+array_list);
}

