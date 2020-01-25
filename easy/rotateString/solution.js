var rotateString = function(A, B) {
    for (let i = 0; i < A.length; i++)
        if (A.slice(i) + A.slice(0, i) === B)
            return true
    
    return false
}

console.log(rotateString('abcde', 'cdeab')) // true
console.log(rotateString('abcde', 'abcded')) // false
module.exports = rotateString

// alt solution
// var rotateString = function(A, B) {
// 	if (!A.length && !B.length) return true

// 	for (i of A) {
// 		A = [...A].splice(1).concat(A[0])
// 		if (A.join('') == B) return true
// 	}

// 	return false
// }
