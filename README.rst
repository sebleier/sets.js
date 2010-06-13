set.js
======

sets.js is a library for set datastructure that supports operations like union, intersection, difference, symmetric difference, etc.

Usage::

    var A = new Set([1,2,3,4]);
    var B = new Set([3,4,5,6]);
    C = A.union(B); // C = Set([1,2,3,4,5,6])
    D = A.intersection(B); // D = Set([3,4])
    E = A.difference(B); // E = Set([1,2])
    F = B.difference(A); // F = Set([5,6])
    G = A.symmetricDifference(B); // G = Set([1,2,5,6])


