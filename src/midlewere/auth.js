const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

const authMidleware = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith("Bearer ")) {

        return res.status(401).json({ error: "No token provided!"});

    }

    const token = authHeader.split(" ")[1];

    try {

        const decoded = jwt.verify(token, secret);
        req.userId = decoded.userId;
        next();

    } catch (err) {

        res.status(401).json({ error: "Invalid token"});

    }

} 

module.exports = authMidleware;