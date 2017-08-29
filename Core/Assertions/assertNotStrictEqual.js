let assert = require("assert");
let Assertion = require("./Assertion");

class assertNotStrictEqual extends Assertion {

    verify(actual, expected, message) {
        try {
            assert.notStrictEqual(actual, expected, message);
            return true;
        } catch(e) {
            return false;
        }
    }

}

module.exports = new assertNotStrictEqual;
