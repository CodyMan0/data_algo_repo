function myFunction(number) {
	if (number > 10) return;
	console.log(number);
	myFunction(number + 1);
}

function factorial(number) {
	if (number === 1 || number === 0) {
		return 1;
	} else {
		return number * factorial(number - 1);
	}
}

//factorial(number) = number * factorial(number-1)
// console.log(factorial(5));

function sumArray(arr) {
	if (arr.length === 1) return arr[0];
	console.log(arr);
	return sumArray(arr.slice(0, -1)) + arr[arr.length - 1];
}

// console.log(sumArray([1, 4, 6]));

// 문자열을 구하는 예시
// 하위문제는 마지막것을 제외한 나머지
function lengthOfString(arr) {
	if (arr[0] == null) return 0;
	return lengthOfString(arr.slice(0, -1)) + 1;
}

// console.log(lengthOfString("abcde"));

function power(x, n) {
	if (n === 0) return 1;
	return power(x, n - 1) * x;
}

console.log(power(2, 5));
