var rotateString = function(A, B) {
	if (!A.length && !B.length) return true

	for (i of A) {
		A = [...A].splice(1).concat(A[0])
		if (A.join('') == B) return true
	}

	return false
}

console.log(rotateString('abcde', 'cdeab')) // true
console.log(rotateString('abcde', 'abcded')) // false
module.exports = rotateString

// alt solution - abstracts shifting logic into an isolated function
// var rotateString = function(A, B) {
// 	if (A.length !== B.length) return false
// 	if (!A.length && !B.length) return true

// 	for (i = 0; i < A.length; i++) {
// 		A = shift(A)
// 		if (A.join('') == B) return true
// 	}

// 	return false
// }

// function shift(iter) {
// 	return [...iter].splice(1).concat(iter[0])
// }    
