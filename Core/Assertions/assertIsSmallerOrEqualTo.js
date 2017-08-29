let Assertion = require("./Assertion");

class assertIsSmallerOrEqualTo extends Assertion {

    verify(element, value) {
        return (element <= value);
    }

}

module.exports = new assertIsSmallerOrEqualTo;
