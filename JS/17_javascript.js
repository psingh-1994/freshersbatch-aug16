function EmployeeList(id,name,salary,dept_id)
{
	
this.id=id;
this.name=name;
this.salary=salary;
this.dept_id=dept_id;


	this.sortByEmpId=function(k)
	{
		
		k.sort(function(a, b){return a.id-b.id});
		
		document.write("Id: "+k[0].id+" Name: "+k[0].name+" Salary: "+k[0].salary+"Dept_Id: "+k[0].dept_id);
		document.write("<br><br>Id: "+k[1].id+" Name: "+k[1].name+" Salary: "+k[1].salary+"Dept_Id: "+k[1].dept_id);
		document.write("<br><br>Id: "+k[2].id+" Name: "+k[2].name+" Salary: "+k[2].salary+"Dept_Id: "+k[2].dept_id);
		document.write("<br><br>Id: "+k[3].id+" Name: "+k[3].name+" Salary: "+k[3].salary+"Dept_Id: "+k[3].dept_id);
		
		}
	
	
}

function sort(){
	var obj1=new EmployeeList(4480,"Prashant",1200,1);
	var obj2=new EmployeeList(4481,"Radhika",1100,3);
	var obj3=new EmployeeList(4482,"aniruddh",1000,2);
	var obj4=new EmployeeList(4483,"meetali",1500,4);

	var obj5=new EmployeeList(4484,"meetaliiiii",1500,4);
	var obj=[obj1,obj2,obj3,obj4,obj5];
	
	
	var operation=document.getElementById("operation").value;
	
	if(operation=='emp_id')
		{

			obj1.sortByEmpId(obj);
			
		}
	
}

