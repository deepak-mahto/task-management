const zod = require("zod");

const createTask = zod.object({
  title: zod.string(),
  description: zod.string(),
});

const updateTask = zod.object({
  id: zod.string(),
});

module.exports = {
  createTask: createTask,
  updateTask: updateTask,
};
