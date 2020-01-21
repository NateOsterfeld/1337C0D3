const subtractProductAndSum = n => multiply([...n.toString()]) - sum([...n.toString()])

const multiply = nums => nums.reduce((prod, num) => parseInt(num) * prod)
const sum = nums => nums.reduce((sum, num) => parseInt(num) + sum, 0)

module.exports = subtractProductAndSum

/*          --alt solutions--           */
// mother of all one liners
const subtractProductAndSum0 = n => [...n.toString()].reduce((prod, num) => parseInt(num) * prod) - [...n.toString()].reduce((sum, num) => parseInt(num) + sum, 0)

// mother of all one liners condensed
const subtractProductAndSum1 = n =>
	[...n.toString()].reduce((prod, num) => parseInt(num) * prod) -
	[...n.toString()].reduce((sum, num) => parseInt(num) + sum, 0)

