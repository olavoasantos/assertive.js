let assert = require('../Core/AssertionLibrary');

/** Nulls, bools and undefined */
// Nulls
test("It asserts that equal nulls are similar", () => {
    expect(
        assert.that(null).isSimilarTo(null)
    ).toBe(true);
});

test("It asserts that null and something else are not similar", () => {
    expect(
        assert.that(null).isSimilarTo("something else")
    ).toBe(false);
});

test("It asserts that null is not 0", () => {
    expect(
        assert.that(null).isSimilarTo(0)
    ).toBe(false);
});

// Bools
test("It asserts that equal bools are similar", () => {
    expect(
        assert.that(true).isSimilarTo(true)
    ).toBe(true);
});

test("It asserts that different bools are not similar", () => {
    expect(
        assert.that(true).isSimilarTo(false)
    ).toBe(false);
});

test("It asserts that false is similar to 0", () => {
    expect(
        assert.that(false).isSimilarTo(0)
    ).toBe(true);
});

// Undefined
test("It asserts that equal undefined are similar", () => {
    expect(
        assert.that(undefined).isSimilarTo(undefined)
    ).toBe(true);
});

test("It asserts that undefined and something else are not similar", () => {
    expect(
        assert.that(undefined).isSimilarTo("something else")
    ).toBe(false);
});

test("It asserts that undefined is not 0", () => {
    expect(
        assert.that(undefined).isSimilarTo(0)
    ).toBe(false);
});

// Combined
test("It asserts that false is not similar to null", () => {
    expect(
        assert.that(false).isSimilarTo(null)
    ).toBe(false);
});

test("It asserts that undefined is similar to null", () => {
    expect(
        assert.that(undefined).isSimilarTo(null)
    ).toBe(true);
});

test("It asserts that undefined is not false", () => {
    expect(
        assert.that(undefined).isSimilarTo(false)
    ).toBe(false);
});

/** Strings */
test("It asserts that equal strings are similar", () => {
    expect(
        assert.that("string").isSimilarTo("string")
    ).toBe(true);
});

test("It asserts that two different strings are not similar", () => {
    expect(
        assert.that("different").isSimilarTo("strings")
    ).toBe(false);
});

/** Numbers */
test("It asserts that two equal numbers are similar", () => {
    expect(
        assert.that(1).isSimilarTo(1)
    ).toBe(true);
});

test("It asserts that two different numbers are not similar", () => {
    expect(
        assert.that(1).isSimilarTo(2)
    ).toBe(false);
});

test("It asserts that the string representation of a number and the number are similar", () => {
    expect(
        assert.that("1").isSimilarTo(1)
    ).toBe(true);
});

test("It asserts that -0, 0 and +0 are similar", () => {
    expect(
        assert.that(-0).isSimilarTo(0)
    ).toBe(true);

    expect(
        assert.that(0).isSimilarTo(+0)
    ).toBe(true);

    expect(
        assert.that(-0).isSimilarTo(+0)
    ).toBe(true);
});

/** Arrays */
test("It asserts that two arrays are similar", () => {
    expect(
        assert.that(["a"]).isSimilarTo(["a"])
    ).toBe(true);
});

test("It asserts that two different arrays are not similar", () => {
    expect(
        assert.that(["a", "b"]).isSimilarTo(["a", "b", "c"])
    ).toBe(false);
});

test("It asserts that two arrays with the same elements in different order are not similar", () => {
    expect(
        assert.that(["a", "b"]).isSimilarTo(["b", "a"])
    ).toBe(false);
});

/** Objects */
test("It asserts that two equal objects are similar", () => {
    expect(
        assert.that({a: "b"}).isSimilarTo({a: "b"})
    ).toBe(true);
});

test("It asserts that two circular objects are similar", () => {
    let a = {a: "b"};
    let b = {a: "b"};

    a.circular = a;
    b.circular = b;

    expect(
        assert.that(a).isSimilarTo(b)
    ).toBe(true);
});

test("It asserts that two different objects with the same keys are not similar", () => {
    expect(
        assert.that({a: "b"}).isSimilarTo({a: "c"})
    ).toBe(false);
});

test("It asserts that an object is not equal to the same object containing more elements", () => {
    expect(
        assert.that({a: "b"}).isSimilarTo({a: "b", c: "d"})
    ).toBe(false);
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
        assert.that(class1).isSimilarTo(class2)
    ).toBe(true);
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
        assert.that(class1).isSimilarTo(class2)
    ).toBe(false);
});
