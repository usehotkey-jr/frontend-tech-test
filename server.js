const app = require("express")();
const tasks = require("./tasks.json");
const endpoints = require("./config/endpoints");

/**
 * GET /tasks
 *
 * Return the list of tasks with status code 200.
 */
app.get("/tasks", (req, res) => res.status(200).json({payload: tasks}));

/**
 * PUT /task/update/:id/:title/:description
 *
 * id: Number
 * title: string
 * description: string
 *
 * Update the task with the given id.
 * If the task is found and update as well, return a status code 204.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
app.put("/task/update/:id/:title/:description", (req, res) => {
    const id = parseInt(req.params.id, 10);

    if (!Number.isNaN(id)) {
        const task = tasks.find(item => item.id === id);

        if (task !== null) {
            task.title = req.params.title;
            task.description = req.params.description;
            return res.status(200).json({payload: task});
        }
        return res.status(404).json({message: "Not found"});

    }
    return res.status(400).json({message: "Bad request"});

});

/**
 * POST /task/create/:title/:description
 *
 * title: string
 * description: string
 *
 * Add a new task to the array tasks with the given title and description.
 * Return status code 201.
 */
app.post("/task/create/:title/:description", (req, res) => {
    const task = {
        description: req.params.description,
        id: tasks.length,
        title: req.params.title,
    };

    tasks.push(task);

    return res.status(201).json({
        message: "Resource created",
        payload: task.id,
    });
});

/**
 * DELETE /task/delete/:id
 *
 * id: Number
 *
 * Delete the task linked to the  given id.
 * If the task is found and deleted as well, return a status code 204.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
app.delete("/task/delete/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);

    if (!Number.isNaN(id)) {
        const task = tasks.find(item => item.id === id);

        if (task !== null) {
            const taskIndex = tasks;
            tasks.splice(taskIndex, 1);
            return res.status(200).json({
                message: "Updated successfully",
                payload: id,
            });
        }
        return res.status(404).json({message: "Not found"});

    }
    return res.status(400).json({message: "Bad request"});

});

app.listen(endpoints.SERVER_PORT, () => {
    process.stdout.write("the server is available on http://localhost:9001/\n");
});
