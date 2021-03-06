burrows-wheeler-transform.jsx
===========================================

[![Build Status](https://travis-ci.org/shibukawa/burrows-wheeler-transform.jsx.png)](https://travis-ci.org/shibukawa/burrows-wheeler-transform.jsx)

Synopsis
---------------

Burrows Wheeler transform library for JS/JSX/AMD/CommonJS

Motivation
---------------

This code is a part of [Oktavia](http://oktavia.info).
To create FM-index index files takes much time to create
suffix array. This module uses O(n) induced sorting algorithm.
It can use to create suffix arraies from more than 10MB source text.

Code Example
---------------

### Use from JSX

```js
import "burrows-wheeler-transform.jsx";
import "console.jsx";

class _Main {
    static function main(argv : string[]) : void
    {
        // Simple version
        var result = BurrowsWheelerTransform.bwt('abracadabra', '$');
        // -> 'ard$rcaaaabb'

        // Detail version
        var bwt = new BurrowsWheelerTransform('abracadabra');
        console.log(bwt.get('$')); // -> 'ard$rcaaaabb'
        console.log(bwt.size());   // -> 12
        console.log(bwt.head());   // -> 3
    }
}
```

### Use from node.js

```js
var BWT = require('burrows-wheeler-transform.common.js').BurrowsWheelerTransform;
```

### Use from require.js

```js
// use burrows-wheeler-transform.amd.js
define(['burrows-wheeler-transform.js'], function (BWT) {

    var bwt = new BWT.BurrowsWheelerTransform('text');
    // Write simple usage here!
});
```

### Use via standard JSX function

```html
<script src="burrows-wheeler-transform.js" type="text/javascript"></script>
<script type="text/javascript">
window.onload = function () {
    var BWT = JSX.require("lib/burrows-wheeler-transform.js").BurrowsWheelerTransform;
    var bwt = new BWT('text');
});
</script>
```

### Use via global variables

```html
<script src="burrows-wheeler-transform.global.js" type="text/javascript"></script>
<script type="text/javascript">
window.onload = function () {
    var obj = new BurrowsWheelerTransform();
});
</script>
```

Installation
---------------

```sh
$ npm install burrows-wheeler-transform.jsx
```

If you want to use this library from other JSX project, install like the following:

```sh
$ npm install burrows-wheeler-transform.jsx --save-dev
```

or add like these lines to your parent project's `package.json`:

```js
   devDependencies: {
       "burrows-wheeler-transform.jsx": "~0.3.0"
   },
   peerDepenencies: {
       "burrows-wheeler-transform.jsx": "~0.3.0"
   }
```

And add `node_modules/burrows-wheeler-transform.jsx/src` as a search path.
You should add to `peerDepenencies` if your product is library.

API Reference
------------------

### static BurrowsWheelerTransform.bwt(text : string, endMarker : string = default) : string

It is a shortcut method to get converted string.

### class BurrowsWheelerTransform(text : string)

This constructer Converts input text and stores results in BWT transform.

### BurrowsWheelerTransform#size() : int

Input text size + sentinel(size 1).

### BurrowsWheelerTransform#getChar(index : int) : string

Get character at the index.

### BurrowsWheelerTransform#get(endMarker : string = default) : string

Get converted text with specified or default endMarker.

### BurrowsWheelerTransform#head() : int

Head index in translated string.

Development
-------------

## JSX

Don't be afraid [JSX](http://jsx.github.io)! If you have an experience of JavaScript, you can learn JSX
quickly.

* Static type system and unified class syntax.
* All variables and methods belong to class.
* JSX includes optimizer. You don't have to write tricky unreadalbe code for speed.
* You can use almost all JavaScript API as you know. Some functions become static class functions. See [reference](http://jsx.github.io/doc/stdlibref.html).

## Setup

To create development environment, call following command:

```sh
$ npm install
```

## Repository

* Repository: git:/github.com/shibukawa/burrows-wheeler-transform.jsx.git
* Issues: https://github.com/shibukawa/burrows-wheeler-transform.jsx/issues

## Run Test

```sh
$ grunt test
```

## Build

```sh
$ grunt build
```

## Generate API reference

```sh
$ grunt doc
```

Author
---------

* shibukawa / yoshiki@shibu.jp

License
------------

MIT

Complete license is written in `LICENSE.md`.

Reference
------------------

* BWT paper: M Burrows, DJ Wheeler. A Block-sorting Lossless Data Compression Algorithm. Digital Equipment, 1994
* Induced Sort: http://www.cs.sysu.edu.cn/nong/index.files/Two%20Efficient%20Algorithms%20for%20Linear%20Suffix%20Array%20Construction.pdf
