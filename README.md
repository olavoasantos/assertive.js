# Assertive.js
Assertion library for Node.js

## Installation

```
    npm install assertive.js
```

## Basic usage

```js
    let assert = require("assertive.js");

    assert.that("Some random string").is("String");
```

## API

### `that(target)`

Sets the target of the assertion.

```js
    assert.that("String");
```

### `isEqualTo(element)`

Deep, coercive equality between the actual and expected parameters using the Abstract Equality Comparison ( === ). Based on node's [Assert.deepStrictEqual](https://nodejs.org/api/assert.html#assert_assert_deepstrictequal_actual_expected_message).

```js
    assert.that("String").isEqualTo("String");        // ==> true
    assert.that("Something").isEqualTo("different");  // ==> false
```

### `isNotEqualTo(element)`

Negation of `isEqualTo`.

```js
    assert.that("String").isNotEqualTo("Something different");  // ==> true
    assert.that("String").isNotEqualTo("String");               // ==> false
```

### `isSimilarTo(element)`

Deep, coercive equality between the actual and expected parameters using the Abstract Equality Comparison ( == ). Based on node's [Assert.deepEqual](https://nodejs.org/api/assert.html#assert_assert_deepequal_actual_expected_message).

```js
    assert.that(1).isSimilarTo("1");                             // ==> true
    assert.that({ a: { b: 1 } }).isSimilarTo({ a: { b: 2 } });   // ==> false
```

### `isNotSimilarTo(element)`

Negation of `isSimilarTo`.

```js
    assert.that({ a: { b: 1 } }).isNotSimilarTo({ a: { b: 2 } });  // ==> true
    assert.that({ a: { b: 1 } }).isNotSimilarTo({ a: { b: 1 } });  // ==> false
```

### `is(type)`

Asserts that the target is of a specific type.

```js
    assert.that("String").is("String");  // ==> true
    assert.that("String").is("Number");  // ==> false
```

Type is NOT case sensistive.

##### Available types

+ Array
+ ArrayBuffer
+ Boolean
+ DataView
+ Error
+ Float
+ Function
+ GeneratorFunction
+ Int
+ Map
+ Null
+ Number
+ Object
+ Promise
+ RegExp
+ Set
+ String
+ Symbol
+ Uint
+ Undefined
+ WeakMap
+ WeakSet

### `isNot(type)`

Negation of `is`.

```js
    assert.that("String").isNot("Number");  // ==> true
    assert.that("String").isNot("String");  // ==> false
```

### `throws(error)`

 Based on node's [Assert.throws](https://nodejs.org/api/assert.html#assert_assert_throws_block_error_message).

```js
    let block = () => {
        throw new TypeError;
    }

    assert.that(block).throws(TypeError);   // ==> true
    assert.that(block).throws(Error);       // ==> false
```

### `isLargerThan(number)`

 Asserts that the target is larger than `number`.

```js
    assert.that(10).isLargerThan(5);   // ==> true
    assert.that(10).isLargerThan(10);  // ==> false
```

### `isLargerOrEqualTo(number)`

 Asserts that the target is larger or equal to `number`.

```js
    assert.that(10).isLargerOrEqualTo(5);   // ==> true
    assert.that(10).isLargerOrEqualTo(10);  // ==> true
```

### `isSmallerThan(number)`

 Asserts that the target is smaller than `number`.

```js
    assert.that(7).isSmallerThan(10);   // ==> true
    assert.that(7).isSmallerThan(7);    // ==> false
```

### `isSmallerOrEqualTo(number)`

 Asserts that the target is Smaller or equal to `number`.

```js
    assert.that(7).isSmallerOrEqualTo(10);   // ==> true
    assert.that(7).isSmallerOrEqualTo(7);    // ==> true
```

### `$errors`

Return an array with the error objects of the errors occoured in the assertions.

```js
    assert.that(20).isSmallerOrEqualTo(10);   // ==> false

    console.log(assert.$errors);
    // [ [AssertionError] ]
```

### Native NodeJS Assert API

If you rather use the built in Assert API, you still can. The assertion library wraps the built in API, so you can use it as you normally would.
Check out [Node's Assert Documentation](https://nodejs.org/api/assert.html) for more information and examples.

#### Methods

+ `deepEqual(actual, expected, message)`
+ `deepStrictEqual(actual, expected, message)`
+ `doesNotThrow(block, error, message)`
+ `equal(actual, expected, message)`
+ `fail(message)`
+ `fail(actual, expected, message, operator, stackStartFunction)`
+ `ifError(value)`
+ `notDeepEqual(actual, expected, message)`
+ `notDeepStrictEqual(actual, expected, message)`
+ `notEqual(actual, expected, message)`
+ `notStrictEqual(actual, expected, message)`
+ `ok(value, message)`
+ `strictEqual(actual, expected, message)`
+ `throws(block, error, message)`

##### Usage

```js
    assert.deepEqual(actual, expected, message)
    assert.deepStrictEqual(actual, expected, message)
    assert.doesNotThrow(block, error, message)
    assert.equal(actual, expected, message)
    assert.fail(message)
    assert.fail(actual, expected, message, operator, stackStartFunction)
    assert.ifError(value)
    assert.notDeepEqual(actual, expected, message)
    assert.notDeepStrictEqual(actual, expected, message)
    assert.notEqual(actual, expected, message)
    assert.notStrictEqual(actual, expected, message)
    assert.ok(value, message)
    assert.strictEqual(actual, expected, message)
    assert.throws(block, error, message)
```

## Testing

Tests were built using [Jest](http://facebook.github.io/jest/).

## Author

+ [Olavo Amorim Santos](https://github.com/olavoasantos)

## Changelog

+ __0.0.1__ - Release
