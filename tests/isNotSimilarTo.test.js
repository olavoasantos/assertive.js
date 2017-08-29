let assert = require('../Core/AssertionLibrary');

/** Nulls, bools and undefined */
// Nulls
test("It asserts that equal nulls are similar", () => {
    expect(
        assert.that(null).isNotSimilarTo(null)
    ).toBe(false);
});

test("It asserts that null and something else are not similar", () => {
    expect(
        assert.that(null).isNotSimilarTo("something else")
    ).toBe(true);
});

test("It asserts that null is not 0", () => {
    expect(
        assert.that(null).isNotSimilarTo(0)
    ).toBe(true);
});

// Bools
test("It asserts that equal bools are similar", () => {
    expect(
        assert.that(true).isNotSimilarTo(true)
    ).toBe(false);
});

test("It asserts that different bools are not similar", () => {
    expect(
        assert.that(true).isNotSimilarTo(false)
    ).toBe(true);
});

test("It asserts that false is similar to 0", () => {
    expect(
        assert.that(false).isNotSimilarTo(0)
    ).toBe(false);
});

// Undefined
test("It asserts that equal undefined are similar", () => {
    expect(
        assert.that(undefined).isNotSimilarTo(undefined)
    ).toBe(false);
});

test("It asserts that undefined and something else are not similar", () => {
    expect(
        assert.that(undefined).isNotSimilarTo("something else")
    ).toBe(true);
});

test("It asserts that undefined is not 0", () => {
    expect(
        assert.that(undefined).isNotSimilarTo(0)
    ).toBe(true);
});

// Combined
test("It asserts that false is not similar to null", () => {
    expect(
        assert.that(false).isNotSimilarTo(null)
    ).toBe(true);
});

test("It asserts that undefined is similar to null", () => {
    expect(
        assert.that(undefined).isNotSimilarTo(null)
    ).toBe(false);
});

test("It asserts that undefined is not false", () => {
    expect(
        assert.that(undefined).isNotSimilarTo(false)
    ).toBe(true);
});

/** Strings */
test("It asserts that equal strings are similar", () => {
    expect(
        assert.that("string").isNotSimilarTo("string")
    ).toBe(false);
});

test("It asserts that two different strings are not similar", () => {
    expect(
        assert.that("different").isNotSimilarTo("strings")
    ).toBe(true);
});

/** Numbers */
test("It asserts that two equal numbers are similar", () => {
    expect(
        assert.that(1).isNotSimilarTo(1)
    ).toBe(false);
});

test("It asserts that two different numbers are not similar", () => {
    expect(
        assert.that(1).isNotSimilarTo(2)
    ).toBe(true);
});

test("It asserts that the string representation of a number and the number are similar", () => {
    expect(
        assert.that("1").isNotSimilarTo(1)
    ).toBe(false);
});

test("It asserts that -0, 0 and +0 are similar", () => {
    expect(
        assert.that(-0).isNotSimilarTo(0)
    ).toBe(false);

    expect(
        assert.that(0).isNotSimilarTo(+0)
    ).toBe(false);

    expect(
        assert.that(-0).isNotSimilarTo(+0)
    ).toBe(false);
});

/** Arrays */
test("It asserts that two arrays are similar", () => {
    expect(
        assert.that(["a"]).isNotSimilarTo(["a"])
    ).toBe(false);
});

test("It asserts that two different arrays are not similar", () => {
    expect(
        assert.that(["a", "b"]).isNotSimilarTo(["a", "b", "c"])
    ).toBe(true);
});

test("It asserts that two arrays with the same elements in different order are not similar", () => {
    expect(
        assert.that(["a", "b"]).isNotSimilarTo(["b", "a"])
    ).toBe(true);
});

/** Objects */
test("It asserts that two equal objects are similar", () => {
    expect(
        assert.that({a: "b"}).isNotSimilarTo({a: "b"})
    ).toBe(false);
});

test("It asserts that two circular objects are similar", () => {
    let a = {a: "b"};
    let b = {a: "b"};

    a.circular = a;
    b.circular = b;

    expect(
        assert.that(a).isNotSimilarTo(b)
    ).toBe(false);
});

test("It asserts that two different objects with the same keys are not similar", () => {
    expect(
        assert.that({a: "b"}).isNotSimilarTo({a: "c"})
    ).toBe(true);
});

test("It asserts that an object is not equal to the same object containing more elements", () => {
    expect(
        assert.that({a: "b"}).isNotSimilarTo({a: "b", c: "d"})
    ).toBe(true);
});

/** Class */
test("It asserts that two equal instances of the same class are similar", () => {
    class test {
        constructor(a) {
            this.a = a;
        }
    };
    let class1 = new test("a"),
        class2 = new test("a");

    expect(
        assert.that(class1).isNotSimilarTo(class2)
    ).toBe(false);
});

test("It asserts that two instances of the same class with different properties are not similar", () => {
    class test {
        constructor(a) {
            this.a = a;
        }
    };
    let class1 = new test("a"),
        class2 = new test("b");

    expect(
        assert.that(class1).isNotSimilarTo(class2)
    ).toBe(true);
});
