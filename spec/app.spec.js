// add 
var Adding = require('../app'); 

// structure
describe('Add funcionality', () => {
    //what i want to test type A
    it('Calculate a + b = c', () => {
        expect(Adding(20, 4)).toEqual(24)
    });
    // second test i want 
    it('calculate a + b != c', () => {
        expect(Adding(20,4)).not.toEqual(4)
    })
});