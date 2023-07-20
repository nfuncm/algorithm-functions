/**
* @function LongestCommonSubsequence
* @desc This has been directly adapted from the Longest Common Subsequence Algorithm for use in JavaScript.
* The goal of the Longest Common Subsequence is to determine the longest subsequence
* common to all sequences in a set of two sequences.
* @author confused-Techie <dev@lhbasics.com>
* @copyright confused-Techie 2022
* @license MIT
* @see {@link https://en.wikipedia.org/wiki/Longest_common_subsequence_problem|Wikipedia}
*/

function LongestCommonSubsequence(s1, s2) {
  let height = s1.length + 1;
  let width = s2.length + 1;
  let matrix = Array(height)
    .fill(0)
    .map(() => Array(width).fill(0));

  for (let row = 1; row < height; row++) {
    for (let col = 1; col < width; col++) {
      if (s1[row - 1] == s2[col - 1]) {
        matrix[row][col] = matrix[row - 1][col - 1] + 1;
      } else {
        matrix[row][col] = Math.max(matrix[row][col - 1], matrix[row - 1][col]);
      }
    }
  }

  let longest = longestCommonSubsequenceTraceBack(matrix, s1, s2, height, width);
  // Now longest is a literal string of the longest common subsequence.

  return longest;
}

function longestCommonSubsequenceTraceBack(matrix, s1, s2, height, width) {
  if (height === 0 || width === 0) {
    return "";
  }
  if (s1[height - 1] == s2[width - 1]) {
    return (
      longestCommonSubsequenceTraceBack(matrix, s1, s2, height - 1, width - 1) +
      (s1[height - 1] ? s1[height - 1] : "")
    );
  }
  if (matrix[height][width - 1] > matrix[height - 1][width]) {
    return longestCommonSubsequenceTraceBack(matrix, s1, s2, height, width - 1);
  }
  return longestCommonSubsequenceTraceBack(matrix, s1, s2, height - 1, width);
}

module.exports = LongestCommonSubsequence;
