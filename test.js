const { fromEuroToDollar,fromDollarToYen , fromYenToPound  } = require('./app.js');

test("One euro should be 1.07 dollars", function() {

    const dollars = fromEuroToDollar(3.5);
     // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(dollars).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One Dollar should be 146 YEN", function() {

    const yens = fromDollarToYen(1);
    const expected = 1 * 146.26; 
    
    expect(yens).toBeCloseTo(expected);
})

test("One Yen should be 0.0055591054 POUND", function() {

    const pounds = fromYenToPound(1);
    const expected = 1 * 0.0055591054; 
    
    expect(pounds).toBeCloseTo(expected);
})

