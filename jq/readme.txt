1.数组抽象常量
toArray: function() {
    return core_slice.call( this );
}


2.三元运算符嵌套-注意写法
2.1当传入参数为负数,从末尾查找
// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get: function( num ) {
    return num == null ?

        // Return a 'clean' array
        this.toArray() :

        // Return just the object
        ( num < 0 ? this[ this.length + num] : this[ num ] );
}

3.

// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {
		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	}


