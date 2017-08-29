let assert = require("assert");
let Assertion = require("./Assertion");

class assertNotDeepStrictEqual extends Assertion {

    verify(actual, expected, message) {
        try {
            assert.notDeepStrictEqual(actual, expected, message);
            return true;
        } catch(e) {
            return false;
        }
    }

}

module.exports = new assertNotDeepStrictEqual;
