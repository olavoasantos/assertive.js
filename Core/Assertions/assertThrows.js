let assert = require("assert");
let Assertion = require("./Assertion");
let typeOf = require("../Helpers/getType");

class assertThrows extends Assertion {

    verify(block, error) {
        this.check(block);

        try {
            assert.throws(block, error);
            return true;
        } catch(e) {
            return false;
        }
    }

    check(block) {
        if(typeOf(block) !== "function") {
            throw new TypeError(`Assert throw's block is not a function.`);
        }
    }

}

module.exports = new assertThrows;
