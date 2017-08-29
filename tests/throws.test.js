let assert = require('../Core/AssertionLibrary');

test("It asserts that an error is thrown", () => {
    let block = () => {
        throw new Error;
    }

    expect(
        assert.that(block).throws()
    ).toBe(true);
});

test("It asserts that a TypeError is thrown", () => {
    let block = () => {
        throw new TypeError;
    }

    expect(
        assert.that(block).throws(TypeError)
    ).toBe(true);
});

test("It asserts that a TypeError is not thrown", () => {
    let block = () => {
        throw new Error;
    }

    expect(
        assert.that(block).throws(TypeError)
    ).toBe(false);
});
