let Assertion = require("./Assertion");

class assertIsLargerThan extends Assertion {

    verify(element, value) {
        return (element > value);
    }

}

module.exports = new assertIsLargerThan;
