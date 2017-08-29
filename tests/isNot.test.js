let assert = require('../Core/AssertionLibrary');

/** Case sensitive */
test("It asserts that type is case insensitive", () => {
    expect(
        assert.that("String").isNot("NuMbEr")
    ).toBe(true);
});

/** Failed example */
test("It asserts that a string does not have a type of number", () => {
    expect(
        assert.that("String").isNot("Number")
    ).toBe(true);
});

/** Array */
test("It asserts Array type", () => {
    expect(
        assert.that([]).isNot("Array")
    ).toBe(false);
});

/** ArrayBuffer */
test("It asserts ArrayBuffer type", () => {
    expect(
        assert.that(new ArrayBuffer).isNot("ArrayBuffer")
    ).toBe(false);
});

/** Boolean */
test("It asserts Boolean type", () => {
    expect(
        assert.that(true).isNot("Boolean")
    ).toBe(false);
});

/** DataView */
test("It asserts DataView type", () => {
    expect(
        assert.that(new DataView(new ArrayBuffer)).isNot("DataView")
    ).toBe(false);
});

/** Error */
test("It asserts Error type", () => {
    expect(
        assert.that(new Error).isNot("Error")
    ).toBe(false);
});

/** Float */
test("It asserts Float type", () => {
    expect(
        assert.that(new Float64Array).isNot("Float")
    ).toBe(false);
});

/** Function */
test("It asserts Function type", () => {
    expect(
        assert.that(function() {}).isNot("Function")
    ).toBe(false);
});

/** GeneratorFunction */
test("It asserts GeneratorFunction type", () => {
    expect(
        assert.that(function* () {}).isNot("GeneratorFunction")
    ).toBe(false);
});

/** Int */
test("It asserts Int type", () => {
    expect(
        assert.that(new Int16Array).isNot("Int")
    ).toBe(false);
});

/** Map */
test("It asserts Map type", () => {
    expect(
        assert.that(new Map).isNot("Map")
    ).toBe(false);
});

/** Null */
test("It asserts Null type", () => {
    expect(
        assert.that(null).isNot("Null")
    ).toBe(false);
});

/** Number */
test("It asserts Number type", () => {
    expect(
        assert.that(123456).isNot("Number")
    ).toBe(false);
});

/** Object */
test("It asserts Object type", () => {
    expect(
        assert.that({}).isNot("Object")
    ).toBe(false);
});

/** Promise */
test("It asserts Promise type", () => {
    expect(
        assert.that(new Promise(()=>{})).isNot("Promise")
    ).toBe(false);
});

/** RegExp */
test("It asserts RegExp type", () => {
    expect(
        assert.that(/regexp string/g).isNot("RegExp")
    ).toBe(false);
});

/** Set */
test("It asserts Set type", () => {
    expect(
        assert.that(new Set).isNot("Set")
    ).toBe(false);
});

/** String */
test("It asserts String type", () => {
    expect(
        assert.that("String").isNot("String")
    ).toBe(false);
});

/** Symbol */
test("It asserts Symbol type", () => {
    expect(
        assert.that(Symbol()).isNot("Symbol")
    ).toBe(false);
});

/** Uint */
test("It asserts Uint type", () => {
    expect(
        assert.that(new Uint8Array).isNot("Uint")
    ).toBe(false);
});

/** Undefined */
test("It asserts Undefined type", () => {
    expect(
        assert.that(undefined).isNot("Undefined")
    ).toBe(false);
});

/** WeakMap */
test("It asserts WeakMap type", () => {
    expect(
        assert.that(new WeakMap).isNot("WeakMap")
    ).toBe(false);
});

/** WeakSet */
test("It asserts WeakSet type", () => {
    expect(
        assert.that(new WeakSet).isNot("WeakSet")
    ).toBe(false);
});
