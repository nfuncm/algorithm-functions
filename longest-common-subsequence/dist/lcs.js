/**
  * longest-common-subsequence
  * Version: 1.0.0
  *
  * JavaScript implementation of the Longest Common Subsequence algorithm
  *
  * Author: confused-Techie
  * License: MIT
  *
  */

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
function LongestCommonSubsequence(e,n){let o=e.length+1,c=n.length+1,u=Array(o).fill(0).map((()=>Array(c).fill(0)));for(let t=1;t<o;t++)for(let o=1;o<c;o++)e[t-1]==n[o-1]?u[t][o]=u[t-1][o-1]+1:u[t][o]=Math.max(u[t][o-1],u[t-1][o]);return longestCommonSubsequenceTraceBack(u,e,n,o,c)}function longestCommonSubsequenceTraceBack(e,n,o,c,u){return 0===c||0===u?"":n[c-1]==o[u-1]?longestCommonSubsequenceTraceBack(e,n,o,c-1,u-1)+(n[c-1]?n[c-1]:""):e[c][u-1]>e[c-1][u]?longestCommonSubsequenceTraceBack(e,n,o,c,u-1):longestCommonSubsequenceTraceBack(e,n,o,c-1,u)}module.exports=LongestCommonSubsequence;