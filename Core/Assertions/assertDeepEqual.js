let assert = require("assert");
let Assertion = require("./Assertion");

class assertDeepEqual extends Assertion {

    verify(actual, expected, message) {
        try {
            assert.deepEqual(actual, expected, message);
            return true;
        } catch(e) {
            return false;
        }
    }

}

module.exports = new assertDeepEqual;
