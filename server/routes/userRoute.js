//userRouter ===> all the routes that access the user dB

const express = require("express");
const zod = require("zod");
const User = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

const router = express.Router();

const signUpSchema = zod.object({
    username: zod.string(),
    firstname: zod.string(),
    lastname: zod.string(),
    password: zod.string(),
});

//Sign-Up Route
router.post("/signup", async (req, res) => {
    const body = req.body;
    const { success } = signUpSchema.safeParse(body);
    if (!success) {
        res.json({ message:"Invalid Inputs"})
    }
    
    //Make Sure body sends the exact required object in the frontend
    const user = User.findOne({
        username: body.username
    })

    if (user._id)
        res.json({ message: "UserName already xizts" })
    
    const newUser = await User.create(body);
    const token = jwt.sign({ userId: newUser._id }, JWT_SECRET);
    
    res.json({
        message: "User Created Successfully"
    });

})

router.post("/signin", async (req, res) => {
    const body = req.body;
    const validation = zod.object({
        username: zod.string().email(),
        password: zod.string(),
    });

    //returns a object or null if invalid
    const { success } = validation.safeParse(body);
    if (!success) {
        res.json({ message: "Invalid Inputs" });
    }
    const user = await User.findOne({
        username: body.username,
        password: body.password,
    })

    //if User DNE
    if (!user)
        res.json({ message: "Username or Password is Incorrect" });

    //if User Xizts
    if (user) {
        const token = jwt.sign({ userId: user._id }, JWT_SECRET);
        res.json({ token: token });
    }

    //if Auth Fails
    res.json({
        message: "Error While Signing In"
    })
})

//User can perform to operations on userDB(user related) edit info or search for other users
router.put("/edit", async (req, res) => {
    const body = req.body;


    //optional as anyone can be edited not necessarily all are required to be provided in req to be edited

    const validation = zod.object({
        username: zod.string().optional(),
        password: zod.string().optional(),
        firstname: zod.string().optional(),
        lastname:zod.string().optional(),
    })
    const { success } = validation.safeParse(body);
    if (!success) {
        res.json({
            message:"Invalid Request"
        });
    }
    try {
        const user = await User.updateOne({ _id: body.userId }, { $set: body });
        res.json({message:"request successful"})
    }
    catch (err) {
        res.json({ message: err });
    }
})

module.exports = router;