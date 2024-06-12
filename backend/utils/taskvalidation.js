const zod = require('zod');

const taskvalidation = zod.object({
    body: zod.object({
        Taskname: zod.string(),
        TaskDescription: zod.string(),
        assigneedTomember: zod.string()
        .min(2,"The minimum charater of members should be 2"),
        taskduedate: zod.string(),
        status: zod.string()
    }),
});

module.exports = taskvalidation;