var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var btn = document.createElement("button");
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	btn.appendChild(document.createTextNode("Delete"));
	ul.appendChild(li);
  li.appendChild(btn);
	input.value = "";
	//btn.className ="del";
	btn.onclick= removefunction;
	}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

ul.onclick=function donelist(event){
	var target=event.target;
	target.classList.toggle("done");
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

 var deletebuttons = document.querySelectorAll('li> button');

// var deletebuttons=document.getElementsByClassName("del");


function removefunction(event)
{
	var targ= event.target;
	targ.parentElement.remove();
}

for(var i=0;i< deletebuttons.length;i++){
   deletebuttons[i].onclick= removefunction;
 }
