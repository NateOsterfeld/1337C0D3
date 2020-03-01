/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
	transformations = {}
	transform = {}
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'
	const code = [
		'.-',
		'-...',
		'-.-.',
		'-..',
		'.',
		'..-.',
		'--.',
		'....',
		'..',
		'.---',
		'-.-',
		'.-..',
		'--',
		'-.',
		'---',
		'.--.',
		'--.-',
		'.-.',
		'...',
		'-',
		'..-',
		'...-',
		'.--',
		'-..-',
		'-.--',
		'--..',
	]

	for (let i = 0; i < alphabet.length; i++) {
		transform[alphabet[i]] = code[i]
	}

	words = new Set(words)
	for (let word of words) {
		for (let letter of word) {
			transformations[word] = transformations[word]
				? transformations[word] + transform[letter]
				: transform[letter]
		}
	}

	let unique = new Set()
	for (let codeword of Object.values(transformations)) {
		unique.add(codeword)
	}

	return unique.size
}

uniqueMorseRepresentations(['noilq', 'kzlq', 'ydreq', 'ybxk', 'kzlq']) // 1
uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg']) // 2
