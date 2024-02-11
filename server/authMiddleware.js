const jwt = require("jsonwebtoken");
const JWT_SECRET = require("./config");

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("bearer"))
        res.json({ message: "Token Not Found" }).status(403);

    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        if (decoded)
            //since this a middleware once auth is complete only then we set the req-userid
            req.userid=decoded.userid;
    }
    catch(error) {
        res.json({message:error})
    }
    next();
}

module.exports = authMiddleware;