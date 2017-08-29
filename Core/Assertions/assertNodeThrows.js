let assert = require("assert");
let Assertion = require("./Assertion");

class assertNodeThrows extends Assertion {

    verify(actual, expected, message) {
        assert.throws(actual, expected, message);
    }

}

module.exports = new assertNodeThrows;
