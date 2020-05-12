/* First Bad Version
You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.
Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.
You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

Example:
    Given n = 5, and version = 4 is the first bad version.

    call isBadVersion(3) -> false
    call isBadVersion(5) -> true
    call isBadVersion(4) -> true

    Then 4 is the first bad version. 
*/

/**
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 */
var isBadVersion = function (version) {
	return version >= BAD_VERSION
}

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
	/**
	 * @param {integer} n Total versions
	 * @return {integer} The first bad version
	 */
    return function (n) {
        let l = 1, r = n;
        
        while (true) {
            let m = Math.floor(l + (r - l) / 2)

            if (isBadVersion(m))
                if (!isBadVersion(m - 1)) return m
                else r = m - 1

            if (!isBadVersion(m))
                if (isBadVersion(m + 1)) return m + 1
                else l = m + 1
        }
	}
}

var BAD_VERSION = 7
var versions = 10
console.log(solution(isBadVersion)(versions))

// same solution just without jsdocs
var isBadVersion = function (version) {
	return version >= BAD_VERSION
}

var solution = function (isBadVersion) {
	return function (n) {
		let l = 1,
			r = n

		while (true) {
			let m = Math.floor(l + (r - l) / 2)

			if (isBadVersion(m))
				if (!isBadVersion(m - 1)) return m
				else r = m - 1

			if (!isBadVersion(m))
				if (isBadVersion(m + 1)) return m + 1
				else l = m + 1
		}
	}
}
