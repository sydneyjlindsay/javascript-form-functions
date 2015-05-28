// 5 7 => 12
// -3 0 => -3 
// -7 12 => 5
//all input in functions comes in as a string

function add(a, b) {
	//convert a and b to numbers 
	// add a and b 
	a = parseFloat(a); 
	b = parseFloat(b);
	return a + b; 
}

function subtract(a, b) {
	a = parseFloat(a);
	b = parseFloat(b);
	return a - b;
}


function tax(subtotal, rate) {
	subtotal = parseFloat(subtotal);
	rate = parseFloat(rate);
	var tax = (subtotal*rate)/100; 
	var total = Math.round((subtotal+tax)*100)/100; 
	return total;
}


function stringLength(string) {
	var lengthType;
	if (string.length<5) {
		lengthType = "short string";
	}
	else if(string.length>5 && string.length<=10) {
		lengthType = "medium string";
	}
	else if(string.length>10) {
		lengthType = "long string";
	}
	return lengthType;
}


function startsWith(string) {
	var result;
	var letter = string.charAt(0).toUpperCase();
	if (letter === 'A') {
		result = 'starts with A';
	}
	else if (letter === 'B') {
		result = 'starts with B';
	}
	else if (letter === 'C') {
		result = 'starts with C';
	}
	else if (letter === 'D') {
		result = 'starts with D';
	}
	else if (letter === 'E') {
		result = 'starts with E';
	}
	else {
		result = 'starts with something else';
	}
	return result;
}


function stringRepeat(string, n) {
    var result = '', i;

    for(i=1; i<=n; i=i*2) {
        if ((n & i) === i) {
            result += string;
        }
        string = string + string;
    }

    return result;
}



function nSum(input) {
	var sum = 0;
    for(var i=1; i<=input; i++) {	
        sum += i;
    }
    return sum;
}


function join (array, spacer) {
	var newArray = [];

	for(var i = 0 ; i < array.length; i++) {
		newArray.push(array[i]);
		newArray.push(spacer);
	}

	var newString = newArray.join('');

	return newString;
}


function countLetters(inputString) {
	var letterCount = {};
	
	for(var i=0; i <inputString.length; i++) {

		var currentLetter = inputString.charAt(i);

		if(!letterCount.hasOwnProperty(currentLetter)) {
			letterCount[currentLetter] = 1;
		}
		else{
			letterCount[currentLetter]++;
		}	
		var outputArray=[];
		for(var propertyName in letterCount) {
			var count=letterCount[propertyName];		
			outputArray.push(' '+propertyName + ': '+ count );
		}
	};
	return outputArray;
}




