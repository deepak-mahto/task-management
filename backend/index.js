require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { createTask, updateTask } = require("./types");
const { task } = require("./db");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/task", async (req, res) => {
  const createPayload = req.body;
  const parsePayload = createTask.safeParse(createPayload);

  if (!parsePayload.success) {
    res.status(411).json({
      message: "You sent the wrong inputs",
    });
    return;
  }
  await task.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.status(200).json({
    message: "Task Added",
  });
});

app.get("/tasks", async (req, res) => {
  const tasks = await task.find({});
  res.json({
    tasks,
  });
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsePayload = updateTask.safeParse(updatePayload);

  if (!parsePayload.success) {
    res.status(411).json({
      message: "Id not matched with any of the todos",
    });
    return;
  }
  await task.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
});

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(3000);
}

main();
