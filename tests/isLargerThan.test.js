let assert = require('../Core/AssertionLibrary');

test("It asserts that a number is larger than another", () => {
    expect(
        assert.that(10).isLargerThan(5)
    ).toBe(true);
});

test("It fails to assert that a smaller number is larger than a larger number.", () => {
   expect(
        assert.that(5).isLargerThan(10)
    ).toBe(false);
});

test("It fails to assert that a number is larger than itself.", () => {
   expect(
        assert.that(10).isLargerThan(10)
    ).toBe(false);
});
