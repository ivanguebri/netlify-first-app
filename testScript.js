require('dotenv').config();

const context = process.env.CONTEXT ?? 'CONTEXT';
console.log('CONTEXT value:', context);
