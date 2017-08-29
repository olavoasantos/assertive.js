let assert = require('../Core/AssertionLibrary');

test("It asserts that a number is smaller or equal to another", () => {
    expect(
        assert.that(5).isSmallerOrEqualTo(10)
    ).toBe(true);
});

test("It asserts that a number is smaller or equal to itself.", () => {
   expect(
        assert.that(5).isSmallerOrEqualTo(5)
    ).toBe(true);
});

test("It fails to assert that a larger number is smaller or equal to a smaller number.", () => {
   expect(
        assert.that(10).isSmallerOrEqualTo(5)
    ).toBe(false);
});
