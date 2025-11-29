function compareStringLengths(str1, str2) {
    if (str1.length > str2.length) {
        return 1;
    } else if (str1.length < str2.length) {
        return -1;
    } else {
        return 0;
    }
}

function capitalizeFirst(str) {
    if (str.length == 0) {
        return str;
    }
    return str[0].toUpperCase() + str.substring(1);
}

function countVowels(str) {
    let vowels = "aeiouyAEIOUY";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}