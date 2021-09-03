require('dotenv').config();

const testVar = process.env.TEST_VAR ?? 'TEST_VAR';
console.log('TEST_VAR value:', testVar);
