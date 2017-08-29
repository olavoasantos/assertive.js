class Assertion {
    constructor() {
        if(this['verify'] === undefined) throw new Error(`Verify method missing on ${this.constructor.name}`);
    }
}

module.exports = Assertion;
