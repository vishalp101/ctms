const zod = require('zod');
const uservalidation = zod.object({
    body: zod.object({
        username: zod
        .string()
        .max(15,"The maximun Charater of user name should be 15")
        .min(3,"The minimum charater of user name should be 3"),
        useremail: zod.string().email(),
        password: zod.string()
    }),
});

module.exports = uservalidation;