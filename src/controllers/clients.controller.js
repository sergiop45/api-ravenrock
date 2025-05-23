const clientModel = require("../models/clients.model");
 
const create = async (req, res) => {

    const { name, email, phone, service, message } = req.body;

    try {

        const createdClient = new clientModel({ name, email, phone, service, message });
        await createdClient.save();

        res.status(201).json({ message: "Client created sucessfully", createdClient});

    } catch (err) {

        res.status(500).json({ error: err.message });

    }
   
}

const findAll = async (req, res) => {

    try {

        const clients = await clientModel.find();

        res.status(200).json(clients);

    } catch (err) {

        res.status(500).json({ message: err.message });

    }

}

const findOne = async (req, res) => {

    const { id } = req.params;

    if(!id) {

        return res.json(400).json({ message: "User ID is required." });

    }

    try {

        const client = await clientModel.findById(id);

        res.status(200).json(client);

    }  catch (err) {

        res.status(500).json({ message: err.message });

    }

}

const remove = async (req, res) => {

    const { id } = req.params;

    if(!id) {

        return res.json(400).json({ message: "User ID is required." });

    }

    try {

        const deletedClient = await clientModel.findByIdAndDelete(id);

        res.status(200).json({ message: "Client deleted sucessfully", deletedClient});

    }  catch (err) {

        res.status(500).json({ message: err.message });

    }

}

module.exports = [
    create,
    findOne,
    findAll,
    remove
]