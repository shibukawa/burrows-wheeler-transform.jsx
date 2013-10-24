burrows-wheeler-transform.jsx
===========================================

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

    // Write simple usage here!
});
```

### Use via standard JSX function

```html
<script src="burrows-wheeler-transform.js" type="text/javascript"></script>
<script type="text/javascript">
window.onload = function () {
    var classObj = JSX.require("src/burrows-wheeler-transform.js").burrows-wheeler-transform.jsx;
    var obj = new classObj();
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

API Reference
------------------

Write reference here!

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
