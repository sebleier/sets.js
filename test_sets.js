compare = fireunit.compare;
ok = fireunit.ok
log = console.log;

/* Helper functions
-----------------*/

function assertSameElements(a, b, msg) {
    /*
    A comparison between two arrays to make sure they have the same
    elements, regardless of order.
    */
    if(a.length != b.length) {
        ok(false, msg);
        return;
    }
    a.sort();
    b.sort();
    for (var i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {
            ok(false, msg);
            return;
        }
    }
    ok(true, msg);
    return;
}

/* Begin Tests
------------*/

assertSameElements([1,2,3], [2,1,3], "assertSameElements tests that elements exist between two arrays");
var A = new Set([1,2,3,4]);
var B = new Set([3,4,5,6]);
var C;

compare(A.length, 4, "A has a length of 4");
compare(A.length, B.length, "A and B are the same length");

// Remove an element from A
element = A.remove(1)
compare(3, A.length, "The set A has length 3 after removing 1 from it");
compare(1, element, "The removed element is 1");
assertSameElements([2,3,4], A._set, "The correct elements that should exist after removing 1");

// Union A and B
C = A.union(B);
compare(5, C.length, "Length of the union should be 6");
assertSameElements([2,3,4,5,6], C._set, "The correct elements that should exist after A unions B");

// Intersection of A and B
C = A.intersection(B);
compare(2, C.length, "Test the length after the intersection of A and B");
assertSameElements([3,4], C._set, "The correct elements that should exist after A intersects B");

// Difference: A - B
C = A.difference(B);
compare(1, C.length, "Test the length after A - B");
assertSameElements([2], C._set, "The correct elements that should exist after A - B");

// Difference: B - A
C = B.difference(A);
compare(2, C.length, "Test the length after B - A");
assertSameElements([5,6], C._set, "The correct elements that should exist after B - A");

// Symmetric Difference
C = A.symmetricDifference(B);
compare(3, C.length, "Test the length after computing the symmetric difference between A and B")
assertSameElements([2,5,6], C._set, "The correct elements that should exist after computing the symmetric difference between A and B");

// Superset
A = new Set([1,2,3,4,5]);
B = new Set([1,2,3]);
ok(A.isSuperSet(B), "Test if A is a superset of B");
B = new Set([0,1,2]);
ok(!A.isSuperSet(B), "Test if A is not a superset of B");

// Subset
A = new Set([1,2]);
B = new Set([1,2,3]);
ok(A.isSubSet(B), "Test if B is a subset of A");
B = new Set([2,3,4]);
ok(!A.isSubSet(B), "Test if B is not a subset of A");

fireunit.testDone();
