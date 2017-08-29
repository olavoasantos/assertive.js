let Assertion = require("./Assertion");

class assertIsSmallerThan extends Assertion {

    verify(element, value) {
        return (element < value);
    }

}

module.exports = new assertIsSmallerThan;
