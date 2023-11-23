/**
 * @link https://leetcode.com/problems/flood-fill/description/
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

var helper = function(image, sr, sc, color, memo) {
    let width = image[0].length;
    let height = image.length;

    if (sr < 0 || sr >= height || sc < 0 || sc >= width)
        return;
    if (image[sr][sc] !== memo)
        return;
    else 
        memo = image[sr][sc];
    image[sr][sc] = color;
    helper(image, sr + 1, sc, color, memo);
    helper(image, sr - 1, sc, color, memo);
    helper(image, sr, sc - 1, color, memo);
    helper(image, sr, sc + 1, color, memo);
};

var floodFill = function(image, sr, sc, color) {
    console.log(JSON.stringify(image));
    helper(image, sr, sc, color, image[sr][sc]);
    console.log(JSON.stringify(image));
};

// Example usage
const originalImage = [[1, 1, 1], [1, 1, 0], [1, 0, 1]];
floodFill(originalImage, 1, 1, 2);

