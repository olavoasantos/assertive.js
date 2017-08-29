let assert = require('../Core/AssertionLibrary');

/** Case sensitive */
test("It asserts that type is case insensitive", () => {
    expect(
        assert.that("String").is("StRiNg")
    ).toBe(true);
});

/** Failed example */
test("It asserts that a string does not have a type of number", () => {
    expect(
        assert.that("String").is("Number")
    ).toBe(false);
});

/** Array */
test("It asserts Array type", () => {
    expect(
        assert.that([]).is("Array")
    ).toBe(true);
});

/** ArrayBuffer */
test("It asserts ArrayBuffer type", () => {
    expect(
        assert.that(new ArrayBuffer).is("ArrayBuffer")
    ).toBe(true);
});

/** Boolean */
test("It asserts Boolean type", () => {
    expect(
        assert.that(true).is("Boolean")
    ).toBe(true);
});

/** DataView */
test("It asserts DataView type", () => {
    expect(
        assert.that(new DataView(new ArrayBuffer)).is("DataView")
    ).toBe(true);
});

/** Error */
test("It asserts Error type", () => {
    expect(
        assert.that(new Error).is("Error")
    ).toBe(true);
});

/** Float */
test("It asserts Float type", () => {
    expect(
        assert.that(new Float64Array).is("Float")
    ).toBe(true);
});

/** Function */
test("It asserts Function type", () => {
    expect(
        assert.that(function() {}).is("Function")
    ).toBe(true);
});

/** GeneratorFunction */
test("It asserts GeneratorFunction type", () => {
    expect(
        assert.that(function* () {}).is("GeneratorFunction")
    ).toBe(true);
});

/** Int */
test("It asserts Int type", () => {
    expect(
        assert.that(new Int16Array).is("Int")
    ).toBe(true);
});

/** Map */
test("It asserts Map type", () => {
    expect(
        assert.that(new Map).is("Map")
    ).toBe(true);
});

/** Null */
test("It asserts Null type", () => {
    expect(
        assert.that(null).is("Null")
    ).toBe(true);
});

/** Number */
test("It asserts Number type", () => {
    expect(
        assert.that(123456).is("Number")
    ).toBe(true);
});

/** Object */
test("It asserts Object type", () => {
    expect(
        assert.that({}).is("Object")
    ).toBe(true);
});

/** Promise */
test("It asserts Promise type", () => {
    expect(
        assert.that(new Promise(()=>{})).is("Promise")
    ).toBe(true);
});

/** RegExp */
test("It asserts RegExp type", () => {
    expect(
        assert.that(/regexp string/g).is("RegExp")
    ).toBe(true);
});

/** Set */
test("It asserts Set type", () => {
    expect(
        assert.that(new Set).is("Set")
    ).toBe(true);
});

/** String */
test("It asserts String type", () => {
    expect(
        assert.that("String").is("String")
    ).toBe(true);
});

/** Symbol */
test("It asserts Symbol type", () => {
    expect(
        assert.that(Symbol()).is("Symbol")
    ).toBe(true);
});

/** Uint */
test("It asserts Uint type", () => {
    expect(
        assert.that(new Uint8Array).is("Uint")
    ).toBe(true);
});

/** Undefined */
test("It asserts Undefined type", () => {
    expect(
        assert.that(undefined).is("Undefined")
    ).toBe(true);
});

/** WeakMap */
test("It asserts WeakMap type", () => {
    expect(
        assert.that(new WeakMap).is("WeakMap")
    ).toBe(true);
});

/** WeakSet */
test("It asserts WeakSet type", () => {
    expect(
        assert.that(new WeakSet).is("WeakSet")
    ).toBe(true);
});
