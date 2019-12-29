// Current number should always be less than the previous, otherwise it shouldn't have been counted and instead used to subtract so add everything and in the case current
// is greater than the prev i.e. 'IV' subtract the prev twice. So instead of I/1 + V/5 = 6 you'd get I/1 + V/5 - 1 - 1 since the I shouldn't have counted and is also being taken off
// const romanToInt = romanNumeral => {
//     const valuesDict = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000}

//     let result = romanNumeral.split('').reduce((acc, char, i, romanNumeral) => {
//         let prev = valuesDict[romanNumeral[i - 1]]
//         let current = valuesDict[char]

//         if (current > prev || !prev) {
//             prev = prev || 0
//             acc += current - (prev * 2)
//         }

//         if (current <= prev)   
//             acc += current   

//         return acc
//     }, 0)

//     return result
// }

// Because the biggest number should always be on the left, if it is we add it normally, if it's not, we subtract it since then it's being used to take off
// For example in XIV, The X > I so add it = 10 -> I is less than V so sub it, 10-1=9 -> V is bigger than undefined so add it, 9+5=14
const map = {
    'I': 1,
    'V': 5, 
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}
function romanToInt(s) {
    let total = 0
    
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] >= ~~map[s[i+1]]) {
            total += map[s[i]]
        } else {
            total -= map[s[i]]
        }
    }
    
    return total
};

module.exports = romanToInt
