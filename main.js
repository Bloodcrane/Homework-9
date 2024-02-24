const validator = require('validator');

const emails = ['test@test.com', 'abcDE123'];

emails.forEach(email => {
    console.log(`${email} is ${validator.isEmail(email) ? 'a valid' : 'an invalid'} email`);
});
