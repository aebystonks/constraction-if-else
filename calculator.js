let getValue = +prompt("Type number, and calc will plus this numbers");

if(!isNaN(getValue)){
	let getSecondValue = +prompt("Type second number");
	if(!isNaN(getSecondValue)){
		alert(getValue + getSecondValue);
	};
}

else{
	alert("The value isn't number");
}
