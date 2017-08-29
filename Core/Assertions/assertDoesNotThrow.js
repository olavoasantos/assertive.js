let assert = require("assert");
let Assertion = require("./Assertion");

class assertDoesNotThrow extends Assertion {

    verify(block, error, message) {
        assert.doesNotThrow(block, error, message);
    }

}

module.exports = new assertDoesNotThrow;
