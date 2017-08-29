let assert = require('../Core/AssertionLibrary');

/** Nulls, bools and undefined */
// Nulls
test("It asserts that equal nulls are equal", () => {
    expect(
        assert.that(null).isNotEqualTo(null)
    ).toBe(false);
});

test("It asserts that null and something else are not equal", () => {
    expect(
        assert.that(null).isNotEqualTo("something else")
    ).toBe(true);
});

test("It asserts that null is not 0", () => {
    expect(
        assert.that(null).isNotEqualTo(0)
    ).toBe(true);
});

// Bools
test("It asserts that equal bools are equal", () => {
    expect(
        assert.that(true).isNotEqualTo(true)
    ).toBe(false);
});

test("It asserts that different bools are not equal", () => {
    expect(
        assert.that(true).isNotEqualTo(false)
    ).toBe(true);
});

test("It asserts that false is not 0", () => {
    expect(
        assert.that(false).isNotEqualTo(0)
    ).toBe(true);
});

// Undefined
test("It asserts that equal undefined are equal", () => {
    expect(
        assert.that(undefined).isNotEqualTo(undefined)
    ).toBe(false);
});

test("It asserts that undefined and something else are not equal", () => {
    expect(
        assert.that(undefined).isNotEqualTo("something else")
    ).toBe(true);
});

test("It asserts that undefined is not 0", () => {
    expect(
        assert.that(undefined).isNotEqualTo(0)
    ).toBe(true);
});

// Combined
test("It asserts that false is not null", () => {
    expect(
        assert.that(false).isNotEqualTo(null)
    ).toBe(true);
});

test("It asserts that undefined is not null", () => {
    expect(
        assert.that(undefined).isNotEqualTo(null)
    ).toBe(true);
});

test("It asserts that undefined is not false", () => {
    expect(
        assert.that(undefined).isNotEqualTo(false)
    ).toBe(true);
});

/** Strings */
test("It asserts that equal strings are equal", () => {
    expect(
        assert.that("string").isNotEqualTo("string")
    ).toBe(false);
});

test("It asserts that two different strings are not equal", () => {
    expect(
        assert.that("different").isNotEqualTo("strings")
    ).toBe(true);
});

/** Numbers */
test("It asserts that two equal numbers are equal", () => {
    expect(
        assert.that(1).isNotEqualTo(1)
    ).toBe(false);
});

test("It asserts that two different numbers are not equal", () => {
    expect(
        assert.that(1).isNotEqualTo(2)
    ).toBe(true);
});

test("It asserts that the string representation of a number and the number are not equal", () => {
    expect(
        assert.that("1").isNotEqualTo(1)
    ).toBe(true);
});

test("It asserts that -0, 0 and +0 are equal", () => {
    expect(
        assert.that(-0).isNotEqualTo(0)
    ).toBe(false);

    expect(
        assert.that(0).isNotEqualTo(+0)
    ).toBe(false);

    expect(
        assert.that(-0).isNotEqualTo(+0)
    ).toBe(false);
});

/** Arrays */
test("It asserts that two arrays are equal", () => {
    expect(
        assert.that(["a"]).isNotEqualTo(["a"])
    ).toBe(false);
});

test("It asserts that two different arrays are not equal", () => {
    expect(
        assert.that(["a", "b"]).isNotEqualTo(["a", "b", "c"])
    ).toBe(true);
});

test("It asserts that two arrays with the same elements in different order are not equal", () => {
    expect(
        assert.that(["a", "b"]).isNotEqualTo(["b", "a"])
    ).toBe(true);
});

/** Objects */
test("It asserts that two equal objects are equal", () => {
    expect(
        assert.that({a: "b"}).isNotEqualTo({a: "b"})
    ).toBe(false);
});

test("It asserts that two circular objects are equal", () => {
    let a = {a: "b"};
    let b = {a: "b"};

    a.circular = a;
    b.circular = b;

    expect(
        assert.that(a).isNotEqualTo(b)
    ).toBe(false);
});

test("It asserts that two different objects with the same keys are not equal", () => {
    expect(
        assert.that({a: "b"}).isNotEqualTo({a: "c"})
    ).toBe(true);
});

test("It asserts that an object is not equal to the same object containing more elements", () => {
    expect(
        assert.that({a: "b"}).isNotEqualTo({a: "b", c: "d"})
    ).toBe(true);
});

/** Class */
test("It asserts that two equal instances of the same class are equal", () => {
    class test {
        constructor(a) {
            this.a = a;
        }
    };
    let class1 = new test("a"),
        class2 = new test("a");

    expect(
        assert.that(class1).isNotEqualTo(class2)
    ).toBe(false);
});

test("It asserts that two instances of the same class with different properties are not equal", () => {
    class test {
        constructor(a) {
            this.a = a;
        }
    };
    let class1 = new test("a"),
        class2 = new test("b");

    expect(
        assert.that(class1).isNotEqualTo(class2)
    ).toBe(true);
});
