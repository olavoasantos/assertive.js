let assert = require("assert");
let Assertion = require("./Assertion");

class assertNotEqual extends Assertion {

    verify(actual, expected, message) {
        try {
            assert.notEqual(actual, expected, message);
            return true;
        } catch(e) {
            return false;
        }
    }

}

module.exports = new assertNotEqual;
