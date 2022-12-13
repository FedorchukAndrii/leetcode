const strs = ["flower","flow","flight"]

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = [];

    strs[0].split('').every((char, idx) => {
        let validChar = true;
        for (let i = 1; i < strs.length; i++) {
            if (char != strs[i].charAt(idx)) {
                validChar = false;
                break;
            }
            if (!validChar) {
                break;
            }
        }
        if (validChar) {
            prefix.push(char);
            return true;
        }  else {
            return false;
        }
        });



        return prefix.join('');
};


console.log(longestCommonPrefix(strs));