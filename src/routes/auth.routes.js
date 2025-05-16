const express = require("express");
const bcrypt = require("bcrypt");
const userModel = require("../models/user.model");
const router = express.Router();
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

router.post("/register", async (req, res) => {

    try {

        const { name, email, password } = req.body;
        const hashed = await bcrypt.hash(password, 10);

        const user = new userModel({name, email, password: hashed});
        await user.save();

        res.status(201).json({ message: "User registered sucessfully."});

    } catch (err) {

        res.status(500).json({ err: err.message});

    }

});

router.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body;
        
        const user = await userModel.findOne({email});

        if (!user || !(await bcrypt.compare(password, user.password))) {

            return res.status(401).json({ error: "Invalid credentials."});

        }

        const token = jwt.sign({ userId: user._id}, secret, {expiresIn: '2h'});

        res.json({ message: "Login sucessful", token});

    } catch (err) {

        res.status(500).json({ error: err.message});

    }

});

module.exports = router;