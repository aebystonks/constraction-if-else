let askManager = prompt("Какое «официальное» название JavaScript?");

if(askManager === 'EcmaScript'){
	alert("Верно!");
}
else if(askManager === null || askManager === ''){
	alert("Canceled");
}
else{
	alert("Не знаете?")
	alert("ECMAScript!");
};