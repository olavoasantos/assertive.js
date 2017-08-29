let Assertion = require("./Assertion");
let typeOf = require('../Helpers/getType');

class assertIs extends Assertion {
    verify(element, type) {
        return (typeOf(element) === type.toLowerCase());
    }
}

module.exports = new assertIs;
