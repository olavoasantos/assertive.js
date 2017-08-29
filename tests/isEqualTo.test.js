let assert = require('../Core/AssertionLibrary');

/** Nulls, bools and undefined */
// Nulls
test("It asserts that equal nulls are equal", () => {
    expect(
        assert.that(null).isEqualTo(null)
    ).toBe(true);
});

test("It asserts that null and something else are not equal", () => {
    expect(
        assert.that(null).isEqualTo("something else")
    ).toBe(false);
});

test("It asserts that null is not 0", () => {
    expect(
        assert.that(null).isEqualTo(0)
    ).toBe(false);
});

// Bools
test("It asserts that equal bools are equal", () => {
    expect(
        assert.that(true).isEqualTo(true)
    ).toBe(true);
});

test("It asserts that different bools are not equal", () => {
    expect(
        assert.that(true).isEqualTo(false)
    ).toBe(false);
});

test("It asserts that false is not 0", () => {
    expect(
        assert.that(false).isEqualTo(0)
    ).toBe(false);
});

// Undefined
test("It asserts that equal undefined are equal", () => {
    expect(
        assert.that(undefined).isEqualTo(undefined)
    ).toBe(true);
});

test("It asserts that undefined and something else are not equal", () => {
    expect(
        assert.that(undefined).isEqualTo("something else")
    ).toBe(false);
});

test("It asserts that undefined is not 0", () => {
    expect(
        assert.that(undefined).isEqualTo(0)
    ).toBe(false);
});

// Combined
test("It asserts that false is not null", () => {
    expect(
        assert.that(false).isEqualTo(null)
    ).toBe(false);
});

test("It asserts that undefined is not null", () => {
    expect(
        assert.that(undefined).isEqualTo(null)
    ).toBe(false);
});

test("It asserts that undefined is not false", () => {
    expect(
        assert.that(undefined).isEqualTo(false)
    ).toBe(false);
});

/** Strings */
test("It asserts that equal strings are equal", () => {
    expect(
        assert.that("string").isEqualTo("string")
    ).toBe(true);
});

test("It asserts that two different strings are not equal", () => {
    expect(
        assert.that("different").isEqualTo("strings")
    ).toBe(false);
});

/** Numbers */
test("It asserts that two equal numbers are equal", () => {
    expect(
        assert.that(1).isEqualTo(1)
    ).toBe(true);
});

test("It asserts that two different numbers are not equal", () => {
    expect(
        assert.that(1).isEqualTo(2)
    ).toBe(false);
});

test("It asserts that the string representation of a number and the number are not equal", () => {
    expect(
        assert.that("1").isEqualTo(1)
    ).toBe(false);
});

test("It asserts that -0, 0 and +0 are equal", () => {
    expect(
        assert.that(-0).isEqualTo(0)
    ).toBe(true);

    expect(
        assert.that(0).isEqualTo(+0)
    ).toBe(true);

    expect(
        assert.that(-0).isEqualTo(+0)
    ).toBe(true);
});

/** Arrays */
test("It asserts that two arrays are equal", () => {
    expect(
        assert.that(["a"]).isEqualTo(["a"])
    ).toBe(true);
});

test("It asserts that two different arrays are not equal", () => {
    expect(
        assert.that(["a", "b"]).isEqualTo(["a", "b", "c"])
    ).toBe(false);
});

test("It asserts that two arrays with the same elements in different order are not equal", () => {
    expect(
        assert.that(["a", "b"]).isEqualTo(["b", "a"])
    ).toBe(false);
});

/** Objects */
test("It asserts that two equal objects are equal", () => {
    expect(
        assert.that({a: "b"}).isEqualTo({a: "b"})
    ).toBe(true);
});

test("It asserts that two circular objects are equal", () => {
    let a = {a: "b"};
    let b = {a: "b"};

    a.circular = a;
    b.circular = b;

    expect(
        assert.that(a).isEqualTo(b)
    ).toBe(true);
});

test("It asserts that two different objects with the same keys are not equal", () => {
    expect(
        assert.that({a: "b"}).isEqualTo({a: "c"})
    ).toBe(false);
});

test("It asserts that an object is not equal to the same object containing more elements", () => {
    expect(
        assert.that({a: "b"}).isEqualTo({a: "b", c: "d"})
    ).toBe(false);
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
        assert.that(class1).isEqualTo(class2)
    ).toBe(true);
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
        assert.that(class1).isEqualTo(class2)
    ).toBe(false);
});
