// 100352. Lexicographically Smallest String After a Swap
// Given a string s containing only digits, 
// return the lexicographically smallest string that can be obtained after swapping adjacent digits in s with the same parity at most once.
// Digits have the same parity if both are odd or both are even. For example, 5 and 9, as well as 2 and 4, have the same parity, while 6 and 9 do not.

const isEven = (s) => {
    return s % 2 === 0;
}

const getSmallestString = (s) => {
    for(let i = 1; i < s.length; i++) {
        prev = s.charAt(i-1);
        curr = s.charAt(i);

        if (isEven(prev) !== isEven(curr)) {
            continue;
        }
        
        diff = prev-curr;
        if (diff > 0) {
            sArr = [...s];
            tmp = sArr[i];
            sArr[i] = sArr[i-1];
            sArr[i-1] = tmp;
            
            return sArr.join('')
        }
    }

    return s;
}

console.log(getSmallestString("001"));
console.log(getSmallestString("48460"));