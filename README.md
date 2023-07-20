# Algorithm Functions

This repository contains a collection of algorithms intended to be used as a function for [NfuncM](https://nfuncm.github.io).

## Levenshtein Distance

The [Levenshtein Distance](https://en.wikipedia.org/wiki/Levenshtein_distance) is a string metric for measuring the difference between two sequences. Named after Vladimir Levenshtein, who considered this distance in 1965.

![Levenshtein Distance Formula](https://wikimedia.org/api/rest_v1/media/math/render/svg/6224efffbe9a4e01afbddeeb900bfd1b3350b335)

### Uses:
* Spell Checkers
* Correction for optical character recognition
* Natural-language translation based on translation memory

### Installation:

After installing [NfuncM](https://nfuncm.github.io) run:

```shell
nfuncm install levenshteinDistance https://raw.githubusercontent.com/nfuncm/algorithm-functions/main/levenshtein-distance/dist/levenshtein-distance.js
```

### API/Usage:

```javascript
const { levenshteinDistance } = require("./nfm");

const string1 = "Hello World";
const string2 = "Hello";

let distance = levenshteinDistance(string1, string2);

console.log(distance);
// 0.45454545454545453
```

The number returned is the shortest value of substitutions, deletions, and insertions required to create the same string. The higher this number is the more similar the strings are, and vice versa. With `1.0` being an exact match.

---

## Longest Common Subsequence

The [Longest Common Subsequence (LCS) problem](https://en.wikipedia.org/wiki/Longest_common_subsequence_problem) is the problem of finding the longest subsequence common to all sequences in a set of sequences (often just two sequences).

![Longest Common Subsequence Formula](https://wikimedia.org/api/rest_v1/media/math/render/svg/feb8e3bedc5867dd897fed772931631f768f7d7e)

### Uses:
* Linux diff utility
* Git revision control system

### Installation:

After installing [NfuncM](https://nfuncm.github.io) run:

```shell
nfuncm install lcs https://raw.githubusercontent.com/nfuncm/algorithm-functions/main/longest-common-subsequence/dist/lcs.js
```

### API/Usage:

```javascript
const { longestCommonSubsequence } = require("./nfm");

const string1 = "Hello World";
const string2 = "Hello";

let sequence = longestCommonSubsequence(string1, string2);

console.log(sequence);
// "Hello"
```

The value returned, is a string of the longest sequence of continuous characters. If you'd like to instead find a similarity index between the two values, you can add one more step to do so:

```javascript
let sequence = longestCommonSubsequence(string1, string2);

let similarityIndex = sequence.length / string1.length;

console.log(similarityIndex);
// 0.45454545454545453
```
