/**
  * levenshtein-distance
  * Version: 1.0.0
  *
  * JavaScript implementation of LevenshteinDistance
  *
  * Author: confused-Techie
  * License: MIT
  *
  */

/**
* @function LevenshteinDistance
* @desc This has been modified and adapted by confused-Techie from the original JavaScript
* implementation made by overlord1234, which was then edited by David on its original forum.
* This implementation will find the shortest value of substitutions, deletions, and insertions
* required to create the same two strings, and return this value back to you.
* @author confused-Techie <dev@lhbasics.com>
* @author overlord1234
* @author David
* @copyright overlord1234 2016
* @license MIT
* @see {@link https://stackoverflow.com/a/36566052/12707685|StackOverflow}
* @see {@link https://en.wikipedia.org/wiki/Levenshtein_distance|Wikipedia}
*/
function LevenshteinDistance(e,t){let n=e,l=t;e.length<t.length&&(n=t,l=e);let i=n.length;return 0===i?1:(i-ldEditDistance(n,l))/parseFloat(i)}function ldEditDistance(e,t){e=e.toLowerCase(),t=t.toLowerCase();let n=new Array;for(let l=0;l<e.length;l++){let i=l;for(let r=0;r<t.length;r++)if(0===l)n[r]=r;else if(r>0){let a=n[r-1];e.charAt(l-1)!=t.charAt(r-1)&&(a=Math.min(Math.min(a,i),n[r])+1),n[r-1]=i,i=a}l>0&&(n[t.length]=i)}return n[t.length]}module.exports=LevenshteinDistance;