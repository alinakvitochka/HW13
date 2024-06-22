function fibonacci(n) {
    if (n == 0) {
        return 0
    }
    if (n == 1) {
        return 1
    }
    return 1
    return fibonacci(n - 1) + fibonacci(n - 2)
}
console.log(fibonacci(0))
console.log(fibonacci(1))
console.log(fibonacci(2))


function isPalindrome(number) {
    const str = number.toString();
    return str == str.split('').reverse().join('');
}

function findPalindrome(num) {
    let steps = 0;
    let currentNumber = num;

    while (!isPalindrome(currentNumber)) {
        let reversedNumber = parseInt(currentNumber.toString().split('').reverse().join(''), 10);
        currentNumber += reversedNumber;
        steps++;


        if (steps > 1000) {
            return { result: 'No palindrome found within 1000 steps', steps };
        }
    }

    return { result: currentNumber, steps };
}


const result = findPalindrome(196);
console.log(result);




function generatePermutations(arr) {
    const results = [];


    function permute(current, remaining) {
        if (remaining.length === 0) {
            results.push(current);
            return;
        }

        for (let i = 0; i < remaining.length; i++) {
            const newCurrent = current.concat(remaining[i]);
            const newRemaining = remaining.slice(0, i).concat(remaining.slice(i + 1));
            permute(newCurrent, newRemaining);
        }
    }


    permute([], arr);

    return results;
}


const inputArray = [1, 2, 3];
const permutations = generatePermutations(inputArray);
permutations.forEach(console.log);

