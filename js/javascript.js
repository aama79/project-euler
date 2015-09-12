// Declaracion de Objetos y Variables
var btnAnswerOne = document.getElementById("buttonone");
var btnAnswerTwo = document.getElementById("buttontwo");
var btnAnswerThree = document.getElementById("buttonthree");

var textOne = document.querySelector("#problem-one")
var textTwo = document.querySelector("#problem-two")
var textThree = document.querySelector("#problem-three")

var answerOne = document.getElementById("answer-one");
var answerTwo = document.getElementById("answer-two");
var answerThree = document.getElementById("answer-three");





//Declaracion de Funciones
function multiplesTwoThree(evento)
{
	
	var textBoxOne = textOne.value;
	var sum = 0

	if(isNaN(textBoxOne))
	{
		alert("This is not a numbre, please enter a real number....");
	}
	else
	{
		    for (var i=1; i < textBoxOne; i++)
		    {
				if((i%5 === 0) || (i%3 ===0))
				{
					console.log("El multiplo de 3 y 5 es:" +i);		
					sum +=i;
				}
			}
			answerOne.innerHTML = "<h1>"+sum+"</h1>"
	}
	
}


function evenFibonacci(evento)
{
	var textBoxTwo = textTwo.value;
	var total=0;
	var numX=1; 
	var numY=1;
	if(isNaN(textBoxTwo))
	{
		alert("This is not a numbre, please enter a real number....");
	}
	else
	{	
		while (numX < textBoxTwo) 
		{
			temp = numX + numY;
			numX=numY;
			numY=temp;
			if (temp%2===0)
			{
				total += temp;
			}
		}
		answerTwo.innerHTML = "<h1>"+total+"</h1>"
	}
}
function primeFactor(evento)
{
	var textBoxThree = textThree.value;
	
	if(isNaN(textBoxThree))
	{
		alert("This is not a numbre, please enter a real number....");
	}
	else
	{
		for(var i = 2; i < textBoxThree; i++) 
		{
			while (textBoxThree % i === 0) 
				{
					textBoxThree /= i;
				}
		}
		answerThree.innerHTML = "<h1>"+textBoxThree+"</h1>"
	}

}
//Asignacion de Eventos
window.onload = function()
{
	buttonone.addEventListener("click",multiplesTwoThree);
	buttontwo.addEventListener("click",evenFibonacci);
	buttonthree.addEventListener("click",primeFactor);
}