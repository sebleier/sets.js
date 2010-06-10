
function Set(set) {

    this._set = typeof(set) == "undefined" ? [] : set;
    this.length = this._set.length // Cardinality of the set

    this.contains = function(element) {
        return this._set.indexOf(element) != -1;
    }

    this.union = function(s) {
        /*
        Computes A | B
        */
        var A = s.length > this.length ? s : this;
        var B = s.length > this.length ? this : s;
        // Take the copy the larger set and add the elements of the smaller set
        var set = A.copy();
        for (var i = 0; i < B.length; i++) {
            set.add(B._set[i]);
        }
        return set;
    }

    this.intersection = function(s) {
        /*
        Computes A & B

        Iterate through the smaller set and if the larger one contains the
        element, add it to a newly created set that will be returned.
        */
        var set = new Set();
        var A = s.length > this.length ? s : this;
        var B = s.length > this.length ? this : s;
        for (var i = 0; i < B.length; i++) {
            var element = B._set[i];
            if (A.contains(element)) {
                set.add(element);
            }
        }
        return set;
    }

    this.difference = function(s) {
        /*
        Computes A - B
        */
        var set = new Set();
        for (var i = 0; i < this.length; i++) {
            var element = this._set[i]
            if (!s.contains(element)) {
                set.add(element)
            }
        }
        return set;
    }

    this.symmetricDifference = function(s) {
        /*
        Computes A ^ B
        */
        return this.union(s).difference(this.intersection(s));
    }

    this.isSuperSet = function(s) {
        /*
        Test whether every element in ``s`` is in this set
        */
        for (var i = 0; i < s.length; i++) {
            if(!this.contains(s._set[i])) {
                return false;
            }
        }
        return true;
    }

    this.isSubSet = function(s) {
        /*
        Test whether every element in this set is in ``s``
        */
        for (var i = 0; i < this.length; i++) {
            if(!s.contains(this._set[i])) {
                return false;
            }
        }
        return true;
    }

    this.add = function(element) {
        if (this._set.indexOf(element) == -1) {
            this._set.push(element);
            this.length++;
        }
        return this.length;
    }

    this.remove = function(element) {
        var i = this._set.indexOf(element);
        if (i != -1) {
            this.length--;
            return this._set.splice(i,1)[0];
        } else {
            return null;
        }
    }

    this.copy = function() {
        return new Set(this._set.slice());
    }

    this.asArray = function() {
        return this._set;
    }
}
