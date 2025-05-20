const taskModel = require("../models/task.model");

const create = async (req, res) => {

    try {

        const { title, description, status, dueDate, userId } = req.body;

        const task = new taskModel({title, description, status, dueDate, userId });
        await task.save();

        res.status(201).json({ message: "Task registered sucessfully"});

    } catch (err) {

        res.status(500).json({ error: err.message });

    }

}

const findAll = async (req, res) => {

    try {
    
        const tasks = await taskModel.find();
        res.status(200).json(tasks);

        } catch (err) {

            console.log(err);
            res.status(500).json({ message: "erro ao buscar tarefas."});

        }

}

const remove = async (req, res) => {
    
    try {

        const { id } = req.params;
        const taskDeleted = await taskModel.findByIdAndDelete(id);

        if(!taskDeleted) {
            return res.status(404).json({message: "task nao encontrada."});
        }

        res.status(200).json({message: "Task deletada com sucesso."});

    } catch (err) {

        res.status(500).json({ error: err.message});

    }

}

const update = async(req, res) => {

    try {
        
        const {id} = req.params;
        const { title, description, status, dueDate } = req.body;
        
        const updatedTask = await taskModel.findByIdAndUpdate(
            id,
            { title, description, status, dueDate },
            { new: true }
        );

        if(!updatedTask) {
            return res.status(404).json({message: "Task not found!"});
        }

        res.status(200).json({ message: "Task updated!", task: updatedTask });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    

}

module.exports = {
    create,
    findAll,
    remove,
    update
}