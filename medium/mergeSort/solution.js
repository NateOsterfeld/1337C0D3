function merge(a1, a2) {
	let p1 = 0,
		p2 = 0,
		res = []

	while (p1 < a1.length && p2 < a2.length) {
		if (a1[p1] < a2[p2]) {
			res.push(a1[p1])
			p1++
		} else {
			res.push(a2[p2])
			p2++
		}
	}

	while (p1 < a1.lengt) {
		res.push(a1[p1])
		p1++
	}
	while (p2 < a2.length) {
		res.push(a2[p2])
		p2++
	}
}

function mergeSort(arr) {
	if (arr.length === 1) return arr

	let mid = Math.floor(arr.length / 2)
	let left = mergeSort(arr.slice(0, mid))
	let right = mergeSort(arr.slice(mid))

	return merge(left, right)
}

mergeSort([3, 1, 9, 7, 5])
