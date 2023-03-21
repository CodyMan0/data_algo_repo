function fibonacci1(n) {
	if (n === 0 || n === 1) return n;
	return fibonacci1(n - 2) + fibonacci1(n - 1);
}

function fibonacci(n, memo) {
	if (n === 0 || n === 1) return n;

	if (memo[n] == null) {
		memo[n] = fibonacci(n - 2, memo) + fibonacci(n - 1, memo);
	}
	return memo[n];
}

function fibonacci2(n) {
	if (n <= 1) return n;
	let table = [0, 1];

	for (let i = 2; i <= n; i++) {
		table[i] = table[i - 2] + table[i - 1];
	}
	console.log(table);
	return table[n];
}
let start3 = new Date();
console.log(fibonacci2(40));
let end3 = new Date();
console.log(`타블 ${end3 - start3}ms`);

let start = new Date();
console.log("재귀", fibonacci1(40));
let end = new Date();
console.log(`${end - start}ms`);

let start1 = new Date();
console.log("동적", fibonacci(40, {}));
let end1 = new Date();
console.log(`${end1 - start1}ms`);
