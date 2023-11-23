/**
 * @param {string} s
 * @return {string}
 */

// Better implementation
  var reverseWords2 = function(s) {
    let i = 0;
    let j = s.length - 1;
    let out = '';
    
    // Trim the input string to remove leading and trailing spaces
    while (i <= j && s[i] === ' ') i++;         // Find the first non-space character
    while (j >= i && s[j] === ' ') j--;         // Find the last non-space character
    s = s.substring(i, j + 1);                  // Extract the trimmed substring
    let words = s.split(/\s+/);                 // Split the trimmed string into words based on spaces
    for (let k = words.length - 1; k > 0; k--)  // Iterate through the words in reverse order
        out += words[k] + ' ';                  // Append the current word and a space to the output
    out += words[0];                            // Append the first word to the output (without trailing space)
    return out;                                 // Concatenate the reversed words
};


var reverseWords = function(s) {
    const arr = s.split(" ");
    const arr2 = [];
    let i = 0;
    let j = arr.length - 1;
    let k = 0;
    let tmp;

    while (i < j)
    {
        tmp = arr[i]
        arr[i] = arr[j];
        arr[j] = tmp;
        i++;
        j--;
    }
    i = 0;
    j = arr.length;
    while (i < j)
    {
        while (i < j && arr[i] === "")
            i++;
        if (arr[i] !== "" && arr[i])
        {
            arr2[k] = arr[i];
            k++;
        }
        i++;
    }
    s = arr2.join(" ");
    return (s);
};