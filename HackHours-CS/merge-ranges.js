/*
Write a function mergeRanges that takes an array of meeting time ranges and
returns an array of condensed ranges, merging the overlapping intervals.

Example:

intervals = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
mergeRanges(intervals); -> [[0, 1], [3, 8], [9, 12]]

intervals = [[8, 10], [15, 18], [1, 3], [2, 6]]
mergeRanges(intervals); -> [[1, 6], [8, 10], [15, 18]]

Do not assume the ranges are in order. The intervals array will have at least
one range in it.

Hint:
Sort the intervals by their start value beforehand! This makes the problem
actually tractable. To do this, use a custom callback for the .sort() method,
described here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
(especially the part about compare numbers instead of strings)

After sorting, think about how to merge the intervals together.

*/

const mergeRanges = intervals => {
  
};

module.exports = {mergeRanges};
