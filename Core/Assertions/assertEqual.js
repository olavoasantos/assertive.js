let assert = require("assert");
let Assertion = require("./Assertion");

class assertIsEqualTo extends Assertion {

    verify(actual, expected, message) {
        try {
            assert.equal(actual, expected, message);
            return true;
        } catch(e) {
            return false;
        }
    }

}

module.exports = new assertIsEqualTo;
