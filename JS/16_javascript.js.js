function BankAccount(accno,accname,accbal){
	this.accno=accno;
	this.accname=accname;
	this.accbal=accbal;
	
	this.withdraw=function(amount)
	{
		if (amount>0)
		{
			accbal=accbal-amount
		}
		else
		{
			alert("You have entered a wrong amount");
		}
		document.getElementById("amt").innerHTML="<input type='text' id='amount'>";
		document.getElementById("balance").innerHTML="Account Balance: <input type='text' value='"+accbal+"' id='accbal'><br>";
		alert(amount+" withdrawn");
	}
	
	this.deposit=function(amount)
	{if (amount>0)
		{
			accbal=accbal+amount
		}
		else
		{
			alert("You have entered a wrong amount");
		}
		accbal=parseInt(accbal)+parseInt(amount);
		document.getElementById("amt").innerHTML="<input type='text' id='amount'>";
		document.getElementById("balance").innerHTML="Account Balance: <input type='text' value='"+accbal+"' id='accbal'><br>";
		alert(amount+" deposited");
	}
	

}

function accountManage()
{
	var accno=document.getElementById("accno").value;
	var accname=document.getElementById("accname").value;
	var accbal=document.getElementById("accbal").value;
	var amount=document.getElementById("amount").value;
	var obj=new BankAccount(accno,accname,accbal,amount);
	var operation=document.getElementById("operation").value;
	
	document.write(accno+accname+accbal+amount+operation);
	if(operation=="Withdraw")
	{
		obj.withdraw(amount);
	}
	else
	{
		obj.deposit(amount);
	}
}