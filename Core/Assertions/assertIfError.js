let assert = require("assert");
let Assertion = require("./Assertion");

class assertIfError extends Assertion {

    verify(value) {
        assert.ifError(value);
    }

}

module.exports = new assertIfError;
