//userRouter ===> all the routes that access the user dB

const express = require("express");
const zod = require("zod");
const { User, Accounts } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const authMiddleware = require("../authMiddleware");

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
//authMiddleware added to the middle as it must be a valid user to perform these tasks 

router.put("/edit",authMiddleware, async (req, res) => {
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

        //$set helps update only those fields that are requested to be edited and keep others as it is
        //without set it will just act as another add operation and xizting values will be overwritten and the fields that are not provided to be edited will be reset to null..

        const user = await User.updateOne({ _id: body.userId }, { $set: body });
        res.json({message:"request successful"})
    }
    catch (err) {
        res.json({ message: err });
    }
})

//search for other users
//here we have to search for a substring in various fields eg first/last name done through $or syntax -> $or:[f1,f2,f3] f1-->{field:{search property}}
//a substring search is done by a regex search done through $regex:"substring"

router.get("/search",authMiddleware, async (req, res) => {
    //if !provided search for empty string
    const key = req.query.key || "";
    const users = await User.find({
        $or:
        [
            { firstname: { $regex: key } },
            { lastname: { $regex: key } },
        ]
    });
    
})

module.exports = router;