let assert = require("assert");
let Assertion = require("./Assertion");

class assertDeepStrictEqual extends Assertion {

    verify(actual, expected, message) {
        try {
            assert.deepStrictEqual(actual, expected, message);
            return true;
        } catch(e) {
            return false;
        }
    }

}

module.exports = new assertDeepStrictEqual;
