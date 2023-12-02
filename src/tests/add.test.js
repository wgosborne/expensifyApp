const add = (a,b) => a + b;

const generateGreeting = (name = 'Anon') => `Hello ${name}!`

test('should add 2 numbers', () => { //always string for first arg, always arrow function for 2nd
    const result = add(3,4);

    // if(result !== 7) {
    //     throw new Error(`You added 4 and 3. The reult was ${result}. Expected 7.`)
    // }

    expect(result).toBe(7);
});

test('Should return a cute greeting', () => {
    const result = generateGreeting('Wags');
    expect(result).toBe('Hello Wags!');
});

test('should generate greeting for no name', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anon!');
});