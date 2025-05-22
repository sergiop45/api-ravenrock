const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");

const findAll = async (req, res) => {
    
    try {

        const users = await userModel.find();

        if(!users) {

            return res.status(404).json({ message: "Users not found" });

        }

        res.status(200).json(users);

    } catch ( err ) {

        res.status(500).json({ error: err.message });

    }

}

const findOne = async (req, res) => {

    const { id } = req.params;
    const user = await userModel.findById(id);

    if(!user) {
        res.status(404).json({erro: "User not found"});
    }

    res.status(200).json(user);

}

const remove = async (req, res) => {

    const { id } = req.params;
    const userDeleted = await userModel.findByIdAndDelete(id);

    if (!userDeleted) {
        return res.status(404).json({erro: "User not found"})
    }

    res.json({message: "User deleted sucessfully"});

}

const update = async (req, res) => {
    const { id } = req.params;
    const { name, password, email } = req.body;

    try {
        const dataToUpdate = {};

        if (name && name.trim() !== "") {
            dataToUpdate.name = name;
        }

        if (email && email.trim() !== "") {
            dataToUpdate.email = email;
        }

        if (password && password.trim() !== "") {
            const hashed = await bcrypt.hash(password, 10);
            dataToUpdate.password = hashed;
        }

        if (Object.keys(dataToUpdate).length === 0) {
            return res.status(400).json({ message: "No valid fields to update" });
        }

        const userUpdated = await userModel.findByIdAndUpdate(
            id,
            dataToUpdate,
            { new: true }
        );

        if (!userUpdated) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({
            message: "User updated successfully",
            user: userUpdated
        });

    } catch (error) {
        res.status(500).json({
            message: "Error updating user",
            error: error.message
        });
    }
};

module.exports = {
    findAll,
    findOne,
    remove,
    update
}
