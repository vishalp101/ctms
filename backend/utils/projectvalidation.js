const zod = require('zod');
const projectvalidation = zod.object({
    body: zod.object({
        name: zod.string()
        .max(15,"The Maximum charater of project name should be 15")
        .min(3,"The minimum charater of project name should be 3"),
        Description: zod.string()
        .max(600,"The Maximum charater of project name should be 600")
        .min(3,"The minimum charater of project name should be 3"),
        owner: zod.string(),
        members: zod.string()
        .min(2,"The minimum charater of members should be 2"),
    }),
});

module.exports = projectvalidation;