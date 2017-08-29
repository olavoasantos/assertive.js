/** Helpers */
let assert = require("assert");

/** Assertions */
let assertIs = require("./Assertions/assertIs");
let assertThrows = require("./Assertions/assertThrows");
let assertIsEqualTo = require("./Assertions/assertIsEqualTo");
let assertIsSimilarTo = require("./Assertions/assertIsSimilarTo");
let assertIsLargerThan = require("./Assertions/assertIsLargerThan");
let assertIsSmallerThan = require("./Assertions/assertIsSmallerThan");
let assertIsLargerOrEqualTo = require("./Assertions/assertIsLargerOrEqualTo");
let assertIsSmallerOrEqualTo = require("./Assertions/assertIsSmallerOrEqualTo");

/** Built in assertions */
let assertOk = require("./Assertions/assertOk");
let assertFail = require("./Assertions/assertFail");
let assertEqual = require("./Assertions/assertEqual");
let assertIfError = require("./Assertions/assertIfError");
let assertNotEqual = require("./Assertions/assertNotEqual");
let assertDeepEqual = require("./Assertions/assertDeepEqual");
let assertNodeThrows = require("./Assertions/assertNodeThrows");
let assertStrictEqual = require("./Assertions/assertStrictEqual");
let assertDoesNotThrow = require("./Assertions/assertDoesNotThrow");
let assertNotDeepEqual = require("./Assertions/assertNotDeepEqual");
let assertNotStrictEqual = require("./Assertions/assertNotStrictEqual");
let assertDeepStrictEqual = require("./Assertions/assertDeepStrictEqual");
let assertNotDeepStrictEqual = require("./Assertions/assertNotDeepStrictEqual");

class AssertionLibrary {

    constructor() {
        this.$errors = [];
        this.element = null;
    }

    that(element) {
        this.element = element;

        return this;
    }

    is(type) {
        return this.$assert(
            assertIs.verify(this.element, type),
            `Failed to assert that element is of type ${type}.`
        );
    }

    isNot(type) {
        return this.$assert(
            !assertIs.verify(this.element, type),
            `Failed to assert that element is not of type ${type}.`
        );
    }

    isEqualTo(expected) {
        return this.$assert(
            assertIsEqualTo.verify(this.element, expected),
            `Failed to assert that the values are equal.`
        );
    }

    isNotEqualTo(expected) {
        return this.$assert(
            !assertIsEqualTo.verify(this.element, expected),
            `Failed to assert that the values are not equal.`
        );
    }

    isSimilarTo(expected) {
        return this.$assert(
            assertIsSimilarTo.verify(this.element, expected),
            `Failed to assert that the values are similar.`
        );
    }

    isNotSimilarTo(expected) {
        return this.$assert(
            !assertIsSimilarTo.verify(this.element, expected),
            `Failed to assert that the values are not similar.`
        );
    }

    throws(block, error, message) {
        // If element is set, use library assertion
        if(this.element !== null) {
            return this.$assert(
                assertThrows.verify(this.element, block),
                `Failed to assert that the values are not similar.`
            );
        }

        // If element is noy set, use node built in assertion
        try {
            assertNodeThrows.verify(block, error, message);

            return true;
        } catch(e) {
            this.$errors.push(e);

            return false;
        }
    }

    isLargerThan(num) {
        return this.$assert(
            assertIsLargerThan.verify(this.element, num),
            `Failed to assert that ${this.element} is larger than ${num}.`
        );
    }

    isLargerOrEqualTo(num) {
        return this.$assert(
            assertIsLargerOrEqualTo.verify(this.element, num),
            `Failed to assert that ${this.element} is larger than ${num}.`
        );
    }

    isSmallerThan(num) {
        return this.$assert(
            assertIsSmallerThan.verify(this.element, num),
            `Failed to assert that ${this.element} is smaller than ${num}.`
        );
    }

    isSmallerOrEqualTo(num) {
        return this.$assert(
            assertIsSmallerOrEqualTo.verify(this.element, num),
            `Failed to assert that ${this.element} is smaller than ${num}.`
        );
    }

    $assert(assertion, message) {
        this.element = null;
        try {
            assert(assertion, message);

            return true;
        } catch(e) {
            this.$errors.push(e);

            return false;
        }
    }

    /** Built in API wrapper */
    equal(actual, expected, message) {
        return this.$assert(
            assertEqual.verify(actual, expected, message),
            message
        );
    }

    deepEqual(actual, expected, message) {
        return this.$assert(
            assertDeepEqual.verify(actual, expected, message),
            message
        );
    }

    deepStrictEqual(actual, expected, message) {
        return this.$assert(
            assertDeepStrictEqual.verify(actual, expected, message),
            message
        );
    }

    doesNotThrow(block, error, message) {
        this.element = null;
        try {
            assertDoesNotThrow.verify(block, error, message);
        } catch(e) {
            this.$errors.push(e);

            return !(e.name === "AssertionError [ERR_ASSERTION]");
        }
    }

    fail(actual, expected, message, operator, stackStartFunction) {
        this.element = null;
        try {
            assertFail.verify(actual, expected, message, operator, stackStartFunction);
        } catch(e) {
            this.$errors.push(e);

            return !(e.name === "AssertionError [ERR_ASSERTION]");
        }
    }

    ifError(value) {
        this.element = null;
        try {
            assertIfError.verify(value);

            return true;
        } catch(e) {
            this.$errors.push(e);

            return false;
        }
    }

    notDeepEqual(actual, expected, message) {
        return this.$assert(
            assertNotDeepEqual.verify(actual, expected, message),
            message
        );
    }

    notDeepStrictEqual(actual, expected, message) {
        return this.$assert(
            assertNotDeepStrictEqual.verify(actual, expected, message),
            message
        );
    }

    notEqual(actual, expected, message) {
        return this.$assert(
            assertNotEqual.verify(actual, expected, message),
            message
        );
    }

    notStrictEqual(actual, expected, message) {
        return this.$assert(
            assertNotStrictEqual.verify(actual, expected, message),
            message
        );
    }

    ok(value, message) {
        this.element = null;
        try {
            assertOk.verify(value, message);

            return true;
        } catch(e) {
            this.$errors.push(e);

            return false;
        }
    }

    strictEqual(actual, expected, message) {
        return this.$assert(
            assertStrictEqual.verify(actual, expected, message),
            message
        );
    }
}

module.exports = new AssertionLibrary;
