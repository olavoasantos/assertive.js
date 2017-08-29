let Assertion = require("./Assertion");

class assertIsLargerOrEqualTo extends Assertion {

    verify(element, value) {
        return (element >= value);
    }

}

module.exports = new assertIsLargerOrEqualTo;
