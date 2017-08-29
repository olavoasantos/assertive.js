let assert = require('../Core/AssertionLibrary');

test("It asserts deepEqual response.", () => {
    const obj1 = { a: { b: 1 } };
    const obj2 = { a: { b: 2 } };
    const obj3 = { a: { b: 1 } };
    const obj4 = Object.create(obj1);

    expect(
        assert.deepEqual(obj1, obj1)
    ).toBe(true);

    expect(
        assert.deepEqual(obj1, obj2)
    ).toBe(false);

    expect(
        assert.deepEqual(obj1, obj3)
    ).toBe(true);

    expect(
        assert.deepEqual(obj1, obj4)
    ).toBe(false);
});

test("It asserts deepStrictEqual response.", () => {
    expect(
        assert.deepStrictEqual({ a: 1 }, { a: '1' })
    ).toBe(false);

    const object = {};
    const fakeDate = {};
    const date = new Date();
    Object.setPrototypeOf(fakeDate, Date.prototype);

    expect(
        assert.deepStrictEqual(object, fakeDate)
    ).toBe(false);

    expect(
        assert.deepStrictEqual(date, fakeDate)
    ).toBe(false);
});

test("It asserts doesNotThrow response.", () => {
    expect(
        assert.doesNotThrow(
            () => {
                throw new TypeError('Wrong value');
            },
            SyntaxError
        )
    ).toBe(true);

    expect(
        assert.doesNotThrow(
            () => {
                throw new TypeError('Wrong value');
            },
            TypeError
        )
    ).toBe(false);
});

test("It asserts equal response.", () => {
    expect(
        assert.equal(1, 1)
    ).toBe(true);

    expect(
        assert.equal(1, '1')
    ).toBe(true);

    expect(
        assert.equal(1, 2)
    ).toBe(false);

    expect(
        assert.equal({ a: { b: 1 } }, { a: { b: 1 } })
    ).toBe(false);
});

test("It asserts fail response.", () => {
    let error;

    assert.fail(1, 2, undefined, '>');
    error = assert.$errors.pop();
    expect(
        `${error.name}: ${error.message}`
    ).toBe("AssertionError [ERR_ASSERTION]: 1 > 2");

    assert.fail(1, 2, 'fail');
    error = assert.$errors.pop();
    expect(
        `${error.name}: ${error.message}`
    ).toBe("AssertionError [ERR_ASSERTION]: fail");

    assert.fail(1, 2, 'whoops', '>');
    error = assert.$errors.pop();
    expect(
        `${error.name}: ${error.message}`
    ).toBe("AssertionError [ERR_ASSERTION]: whoops");

    assert.fail('a', 'b');
    error = assert.$errors.pop();
    expect(
        `${error.name}: ${error.message}`
    ).toBe("AssertionError [ERR_ASSERTION]: 'a' != 'b'");
});

test("It asserts ifError response.", () => {
    let error;

    error = assert.$errors.pop();
    expect(
        assert.ifError(0)
    ).toBe(true);

    expect(
        assert.ifError(1)
    ).toBe(false);
    error = assert.$errors.pop();
    expect(
        error
    ).toBe(1);

    expect(
        assert.ifError('error')
    ).toBe(false);
    error = assert.$errors.pop();
    expect(
        error
    ).toBe("error");

    expect(
        assert.ifError(new Error())
    ).toBe(false);
    error = assert.$errors.pop();
    expect(
        error.constructor.name
    ).toBe("Error");
});

test("It asserts notDeepEqual response.", () => {
    const obj1 = { a: { b: 1 } };
    const obj2 = { a: { b: 2 } };
    const obj3 = { a: { b: 1 } };
    const obj4 = Object.create(obj1);

    expect(
        assert.notDeepEqual(obj1, obj1)
    ).toBe(false);

    expect(
        assert.notDeepEqual(obj1, obj2)
    ).toBe(true);

    expect(
        assert.notDeepEqual(obj1, obj3)
    ).toBe(false);

    expect(
        assert.notDeepEqual(obj1, obj4)
    ).toBe(true);
});

test("It asserts notDeepStrictEqual response.", () => {
    expect(
        assert.notDeepEqual({ a: 1 }, { a: '1' })
    ).toBe(false);

    expect(
        assert.notDeepStrictEqual({ a: 1 }, { a: '1' })
    ).toBe(true);
});

test("It asserts notEqual response.", () => {
    expect(
        assert.notEqual(1, 2)
    ).toBe(true);

    expect(
        assert.notEqual(1, 1)
    ).toBe(false);

    expect(
        assert.notEqual(1, '1')
    ).toBe(false);
});

test("It asserts notStrictEqual response.", () => {
    expect(
        assert.notStrictEqual(1, 2)
    ).toBe(true);

    expect(
        assert.notStrictEqual(1, 1)
    ).toBe(false);

    expect(
        assert.notStrictEqual(1, '1')
    ).toBe(true);
});

test("It asserts ok response.", () => {
    expect(
        assert.ok(true)
    ).toBe(true);

    expect(
        assert.ok(1)
    ).toBe(true);

    let error;
    assert.ok(false);
    error = assert.$errors.pop();
    expect(
        `${error.name}: ${error.message}`
    ).toBe("AssertionError [ERR_ASSERTION]: false == true");

    assert.ok(0);
    error = assert.$errors.pop();
    expect(
        `${error.name}: ${error.message}`
    ).toBe("AssertionError [ERR_ASSERTION]: 0 == true");

    assert.ok(false, 'it\'s false');
    error = assert.$errors.pop();
    expect(
        `${error.name}: ${error.message}`
    ).toBe("AssertionError [ERR_ASSERTION]: it's false");
});

test("It asserts strictEqual response.", () => {
    expect(
        assert.strictEqual(1, 2)
    ).toBe(false);

    expect(
        assert.strictEqual(1, 1)
    ).toBe(true);

    expect(
        assert.strictEqual(1, '1')
    ).toBe(false);
});

test("It asserts throws response.", () => {
    expect(
        assert.throws(
            () => {
                throw new Error('Wrong value');
            },
            Error
        )
    ).toBe(true);

    expect(
        assert.throws(
            () => {
                throw new Error('Wrong value');
            },
            TypeError
        )
    ).toBe(false);
});
