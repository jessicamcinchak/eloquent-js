//4.8
function formatDate(date) {
	function addZero(number) {
		if (number < 10) 
			return "0" + number;
		else (number >= 10)
			return number;
	}
//copied from previous example
	return addZero(date.getDate()) + "/" + addZero((date.getMonth() + 1)) +
         "/" + date.getFullYear();
}
show(formatDate(new Date(2013, 4, 11)));

//4.9
var numbers = [225,666e3,3323,33233,23423432,33243235345324234];
function get_largest_number(numbers) {
    var largest_number = numbers[0];
    for(i=0; i <= numbers.length; i++) {
        if (numbers[i] > largest_number) {
        largest_number = numbers[i];
        }
    }
    return largest_number;
}
console.log(get_largest_number(numbers));

//reduce documentation
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

//4.10
//add a second argument to exercise 4.2 "range" function
function range(first, second) {
	if (arguments.length < 2) {
		second = first;
		first = 0;
	}

  	var result = [];
 	for (var i = first; i <= second; i++)
    	result[i] = i;
  	return result;
}

show(range(1));
show(range(1,2));
//returns [0,1] and [undefined, 1, 2]

//4.11
print(sum(range(1,10)));

//use range function from 4.10
function sum(numbers) {
	var plus = 0
	for (i=0; i<numbers.length; i++)
		//+= means plus = plus + numbers[i]
		//plus = 0 + sum(range[first,second])
		plus += numbers[i]	
	return plus;
}
print(sum(range(1,10)));
