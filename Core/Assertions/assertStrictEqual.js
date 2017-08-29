let assert = require("assert");
let Assertion = require("./Assertion");

class assertStrictEqual extends Assertion {

    verify(actual, expected, message) {
        try {
            assert.strictEqual(actual, expected, message);
            return true;
        } catch(e) {
            return false;
        }
    }

}

module.exports = new assertStrictEqual;
