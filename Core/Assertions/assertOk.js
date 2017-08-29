let assert = require("assert");
let Assertion = require("./Assertion");

class assertOk extends Assertion {

    verify(value, message) {
        assert.ok(value, message);
    }

}

module.exports = new assertOk;
