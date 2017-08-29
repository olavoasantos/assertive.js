let assert = require('../Core/AssertionLibrary');

test("It asserts that a number is smaller than another", () => {
    expect(
        assert.that(5).isSmallerThan(10)
    ).toBe(true);
});

test("It fails to assert that a larger number is smaller than a smaller number.", () => {
   expect(
        assert.that(10).isSmallerThan(5)
    ).toBe(false);
});

test("It fails to assert that a number is smaller than itself.", () => {
   expect(
        assert.that(10).isSmallerThan(10)
    ).toBe(false);
});
