let assert = require("assert");
let Assertion = require("./Assertion");

class assertFail extends Assertion {

    verify(actual, expected, message, operator, stackStartFunction) {
        operator = operator || "!=";
        assert.fail(actual, expected, message, operator, stackStartFunction);
    }

}

module.exports = new assertFail;
