let assert = require('../Core/AssertionLibrary');

test("It asserts that a number is larger or equal to another", () => {
    expect(
        assert.that(10).isLargerOrEqualTo(5)
    ).toBe(true);
});

test("It asserts that a number is larger or equal to itself.", () => {
   expect(
        assert.that(10).isLargerOrEqualTo(10)
    ).toBe(true);
});

test("It fails to assert that a smaller number is larger or equal to a larger number.", () => {
   expect(
        assert.that(5).isLargerOrEqualTo(10)
    ).toBe(false);
});
