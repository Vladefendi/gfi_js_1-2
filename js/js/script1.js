
	// var chislo = prompt('ввести число');
	// var stepen = prompt('ввести степень');
	// result = Math.pow(chislo, stepen);
	

 // console.log(result);


	

function pow(x, n){
	var result = 1;
	
	for (var i = 0; i < n; i++){
	result *=x;
  }


	return result;

}

var x = prompt('');
var n = prompt('');

console.log(pow(x, n));


