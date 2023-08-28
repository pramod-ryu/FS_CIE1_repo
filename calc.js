function add()
{
n1=Number(document.getElementById("num1").value);
n2=Number(document.getElementById("num2").value);
result=n1+n2;
document.getElementById("res").value=result;
}

function sub()
{
n1=Number(document.getElementById("num1").value);
n2=Number(document.getElementById("num2").value);
result=n1-n2;
document.getElementById("res").value=result;
}

function mul()
{
n1=Number(document.getElementById("num1").value);
n2=Number(document.getElementById("num2").value);
result=n1*n2;
document.getElementById("res").value=result;
}

function div()
{
n1=Number(document.getElementById("num1").value);
n2=Number(document.getElementById("num2").value);
if (n2==0)
{
alert("Divide by zero!!");
clr();
}
else
{
result=n1/n2;
document.getElementById("res").value=result;
}
}

function clr()
{
document.getElementById("num1").value="";
document.getElementById("num2").value="";
document.getElementById("res").value="";
}
