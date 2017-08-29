let assert = require("assert");
let Assertion = require("./Assertion");

class assertNotDeepEqual extends Assertion {

    verify(actual, expected, message) {
        try {
            assert.notDeepEqual(actual, expected, message);
            return true;
        } catch(e) {
            return false;
        }
    }

}

module.exports = new assertNotDeepEqual;
