let assert = require("assert");
let Assertion = require("./Assertion");

class assertIsEqualTo extends Assertion {

    verify(actual, expected) {
        try {
            assert.deepStrictEqual(actual, expected);
            return true;
        } catch(e) {
            return false;
        }
    }

}

module.exports = new assertIsEqualTo;
