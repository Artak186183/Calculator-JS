function cal(x) {
	var text = calculator.screen.value;
	var k = text.indexOf(".");
	var pz = text.indexOf("(0");
	if(text.substring(0) !== "0" && text.substring(text.length - 1, text.length) !== ")" && k >= pz && text.substring(text.length - 8, text.length) !== "Infinity") document.calculator.screen.value += x;
	else if(text.substring(text.length - 8, text.length) == "Infinity") calculator.screen.value = "";
	else if(text.substring(0) == "0") calculator.screen.value = x;
}

function resetF() {
	calculator.screen.value = "";
}

function backF() {
	var text = calculator.screen.value;
	if(text.substring(text.length - 8, text.length) !== "Infinity") calculator.screen.value = text.slice(0, text.length - 1);
	else {
		calculator.screen.value = "";
	}
}

function squareF() {
	var text = calculator.screen.value;
	var ev = eval(text);
	if(text !== "" && text.substring(text.length - 8, text.length) !== "Infinity") calculator.screen.value = Math.pow(ev, 2);
	else calculator.screen.value = "";
}

function cubicF() {
	var text = calculator.screen.value;
	var ev = eval(text);
	if(text !== "" && text.substring(text.length - 8, text.length) !== "Infinity") calculator.screen.value = Math.pow(ev, 3);
	else calculator.screen.value = "";
}

function squareRoot() {
	var text = calculator.screen.value;
	var ev = eval(text);
	if(text !== "" && text.substring(text.length - 8, text.length) !== "Infinity") calculator.screen.value = Math.sqrt(ev);
	else calculator.screen.value = "";
}

function titheF() {
	var text = calculator.screen.value;
	var ev = eval(text);
	if(text !== "" && text !== "0" && text.substring(text.length - 8, text.length) !== "Infinity") calculator.screen.value = 1 / ev;
	else calculator.screen.value = "";
}

function addF() {
	var text = calculator.screen.value;
	if(text !== "" && text.substring(text.length - 1, text.length) !== "+" && text.substring(text.length - 1, text.length) !== "-" && text.substring(text.length - 1, text.length) !== "*" && text.substring(text.length - 1, text.length) !== "/" && text.substring(text.length - 1, text.length) !== "." && text.substring(text.length - 1, text.length) !== "%" && text.substring(text.length - 1, text.length) !== "(" && text.substring(text.length - 8, text.length) !== "Infinity") calculator.screen.value += document.getElementById("addButton").value;
	else calculator.screen.value = "";
}

function divisionF() {
	var text = calculator.screen.value;
	if(text !== "" && text.substring(text.length - 1, text.length) !== "(" && text.substring(text.length - 1, text.length) !== "/" && text.substring(text.length - 1, text.length) !== "-" && text.substring(text.length - 1, text.length) !== "*" && text.substring(text.length - 1, text.length) !== "+" && text.substring(text.length - 1, text.length) !== "." && text.substring(text.length - 1, text.length) !== "%" && text.substring(text.length - 8, text.length) !== "Infinity") calculator.screen.value += document.getElementById("division").value;
	else calculator.screen.value = "";
}

function subtractionF() {
	var text = calculator.screen.value;
	if(text.substring(text.length - 1, text.length) !== "-" && text.substring(text.length - 1, text.length) !== "/" && text.substring(text.length - 1, text.length) !== "*" && text.substring(text.length - 1, text.length) !== "+" && text.substring(text.length - 1, text.length) !== "." && text.substring(text.length - 1, text.length) !== "%" && text.substring(text.length - 8, text.length) !== "Infinity") calculator.screen.value += document.getElementById("subtractionButton").value;
	else calculator.screen.value = "";
}

function multiplicationF() {
	var text = calculator.screen.value;
	if(text !== "" && text.substring(text.length - 1, text.length) !== "(" && text.substring(text.length - 1, text.length) !== "*" && text.substring(text.length - 1, text.length) !== "-" && text.substring(text.length - 1, text.length) !== "/" && text.substring(text.length - 1, text.length) !== "+" && text.substring(text.length - 1, text.length) !== "." && text.substring(text.length - 1, text.length) !== "%" && text.substring(text.length - 8, text.length) !== "Infinity") calculator.screen.value += document.getElementById("multiplication").value;
	else calculator.screen.value = "";
}

function res() {
	var text = calculator.screen.value;
	if(text !== "" && text.substring(text.length - 1, text.length) !== "%" && text.substring(text.length - 1, text.length) !== "-" && text.substring(text.length - 1, text.length) !== "/" && text.substring(text.length - 1, text.length) !== "*" && text.substring(text.length - 1, text.length) !== "+" && text.substring(text.length - 1, text.length) !== ".") calculator.screen.value += document.getElementById("residual").value;
}

function pointF() {
	var text = calculator.screen.value;
	var k = text.indexOf('.');
	var p = text.indexOf('+');
	var h = text.indexOf('-');
	var bz = text.indexOf('*');
	var bj = text.indexOf('/');
	var mod = text.indexOf('%');
	if(text !== "" && text.substring(text.length - 8, text.length) !== "Infinity" && text.substring(text.length - 1, text.length) !== "." && text.substring(text.length - 1, text.length) !== "/" && text.substring(text.length - 1, text.length) !== "*" && text.substring(text.length - 1, text.length) !== "+" && text.substring(text.length - 1, text.length) !== "(" && text.substring(text.length - 1, text.length) !== ")" && text.substring(text.length - 1, text.length) !== "%" && text.indexOf(".") == "-1") calculator.screen.value += document.getElementById("pointButton").value;
	else if(text.substring(text.length - 8, text.length) == "Infinity") calculator.screen.value = "";
	else if(text.indexOf(".") < text.lastIndexOf(".")) calculator.screen.value;
	else if((p > k || h > k || bz > k || bj > k || mod > k) && text.substring(text.length - 1, text.length) !== "." && text.substring(text.length - 1, text.length) !== "-" && text.substring(text.length - 1, text.length) !== "/" && text.substring(text.length - 1, text.length) !== "*" && text.substring(text.length - 1, text.length) !== "+" && text.substring(text.length - 1, text.length) !== "%") calculator.screen.value += ".";
}

function LBracketF() {
	var text = calculator.screen.value;
	if(text.substring(text.length - 1, text.length) !== "1" && text.indexOf("(((((((") == "-1" && text.substring(text.length - 8, text.length) !== "Infinity" && text.substring(text.length - 1, text.length) !== "." && text.substring(text.length - 1, text.length) !== "2" && text.substring(text.length - 1, text.length) !== "3" && text.substring(text.length - 1, text.length) !== "4" && text.substring(text.length - 1, text.length) !== "5" && text.substring(text.length - 1, text.length) !== "6" && text.substring(text.length - 1, text.length) !== "7" && text.substring(text.length - 1, text.length) !== "8" && text.substring(text.length - 1, text.length) !== "9" && text.substring(text.length - 1, text.length) !== "0" && text.substring(text.length - 1, text.length) !== "%" && text.substring(text.length - 1, text.length) !== ")") calculator.screen.value += "(";
	else if(text.substring(text.length - 8, text.length) == "Infinity") calculator.screen.value = "";
}

function RBracketF() {
	var text = calculator.screen.value;
	if(calculator.screen.value !== "" && text.indexOf("(") > "-1" && text.indexOf("(((((((") == "-1" && text.substring(text.length - 8, text.length) !== "Infinity" && text.substring(text.length - 1, text.length) !== "." && text.substring(text.length - 1, text.length) !== "-" && text.substring(text.length - 1, text.length) !== "/" && text.substring(text.length - 1, text.length) !== "*" && text.substring(text.length - 1, text.length) !== "+" && text.substring(text.length - 1, text.length) !== "%" && text.charAt(text.length - 3) !== "(" && text.charAt(text.length - 2) !== "(" && text.charAt(text.length - 1) !== "(" && text.charAt(text.length) !== "(" && (text.indexOf("+") > "-1" || text.indexOf("+") > "-1" || text.indexOf("-") > "-1" || text.indexOf("*") > "-1" || text.indexOf("/") > "-1" || text.indexOf("%") > "-1")) calculator.screen.value += ")";
	else if(text.substring(text.length - 8, text.length) == "Infinity") calculator.screen.value = "";
}

function piF() {
	var text = calculator.screen.value;
	if(text.substring(text.length - 1, text.length) !== ")" && text.substring(text.length - 12, text.length) !== "3.1415926535" && text.substring(text.length - 8, text.length) !== "Infinity" && text.substring(text.length - 1) !== "1" && text.substring(text.length - 1) !== "2" && text.substring(text.length - 1) !== "3" && text.substring(text.length - 1) !== "4" && text.substring(text.length - 1) !== "5" && text.substring(text.length - 1) !== "6" && text.substring(text.length - 1) !== "7" && text.substring(text.length - 1) !== "8" && text.substring(text.length - 1) !== "9" && text.substring(text.length - 1) !== "0") calculator.screen.value += document.getElementById("pi").value;
	else if(text.substring(text.length - 8, text.length) == "Infinity") calculator.screen.value = "";
}

function percentF() {
	var y, d;
	var text = calculator.screen.value;
	y = eval(text);
	d = y / 100;
	if(text !== "" && (text.substring(text.length - 2, text.length - 1) == "*" && text.substring(text.length - 8, text.length) !== "Infinity" || text.substring(text.length - 3, text.length - 2) == "*" || text.substring(text.length - 4, text.length - 3) == "*" || text.substring(text.length - 5, text.length - 4) == "*" || text.substring(text.length - 6, text.length - 5) == "*" || text.substring(text.length - 7, text.length - 6) == "*")) calculator.screen.value = eval(d);
	else calculator.screen.value = "";
}

function equalF() {
	var text = calculator.screen.value;
	if(text !== "" && text.substring(text.length - 8, text.length) !== "Infinity") calculator.screen.value = eval(calculator.screen.value);
	else calculator.screen.value = "";
}

function zeroNumber() {
	var text = calculator.screen.value;
	if(text.substring("0") !== "0" && text.substring(text.length - 8, text.length) !== "Infinity" && text.lastIndexOf('(0') == "-1" || text.indexOf('.') > text.indexOf("(")) calculator.screen.value += "0";
	else if(text.substring(text.length - 8, text.length) == "Infinity") calculator.screen.value = "";
	else if(text.indexOf('(0') !== "-1") calculator.screen.value;
}

function fact() {
	var i, factorial;
	var text = calculator.screen.value;
	var ev = eval(text);
	if(text.substring(text.length - 8, text.length) == "Infinity") calculator.screen.value = "";
	else if(ev > 170) calculator.screen.value = "Infinity";
	else if(ev >= 0 && Number.isInteger(ev)) {
		factorial = 1;
		for(i = 1; i <= text; i++) {
			factorial = factorial * i;
		}
		calculator.screen.value = factorial;
	} else calculator.screen.value = "";
}