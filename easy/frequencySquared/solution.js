/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {boolean}
 */
const freqSquared = (arr1, arr2) => {
    freq1 = {}; freq2 = {};

    if (arr1.length !== arr2.length)
        return false

    for (i of arr1)
        freq1[i] = (freq1[i] || 0) + 1
    
    for (i of arr2)
        freq2[i] = (freq2[i] || 0) + 1
    
    for (i in freq1)
        if ((!(i ** 2 in freq2)) || (freq1[i] !== freq2[i ** 2]))
            return false
        
    return true
}

// Explanation: declare and initialize two hashmaps containing the values in arr1 & arr2 as keys, and the freq they occur as the values to those keys
// loop over our map, freq1, checking to see if the keys^2 exist in freq2, as well as if the freq values for those keys are equal to their squared counterpart
// and if any of those conditions are false, we return false, else we return true

module.exports = freqSquared
