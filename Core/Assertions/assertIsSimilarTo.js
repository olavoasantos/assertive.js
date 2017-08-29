let assert = require("assert");
let Assertion = require("./Assertion");

class assertIsSimilarTo extends Assertion {

    verify(actual, expected) {
        try {
            assert.deepEqual(actual, expected);
            return true;
        } catch(e) {
            return false;
        }
    }

}

module.exports = new assertIsSimilarTo;
