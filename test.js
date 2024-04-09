
// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    const { sum } = require('./app.js');
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});
test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    // const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(dollars).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
});

test("One yen should be euros/156.5", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function like its supposed to be used
    const yen = fromDollarToYen(3);

   
    // const expected = 3 * 1.07 / 156.5; 
    
    // This is the comparison for the unit test
     expect(yen).toBe(0.020511182108626198); 
});
test("One pound should be euros/0.87", function() {
    // Import the function from app.js
    const { fromDYenToPound } = require('./app.js');

    // Use the function like its supposed to be used
    const pound = fromDYenToPound(2);

   
  //  const expected = 2 * 0.87/ 156.5 ;
    
    // This is the comparison for the unit test
     expect(pound).toBe(0.011118210862619809); 
})