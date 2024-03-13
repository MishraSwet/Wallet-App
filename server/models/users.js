const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/walletApp");

 const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        maxlength: 30,
        minlength: 3,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 30,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 30,
    },
    password: {
        type: string,
        required: true,
        minLength: 6,
    }
});

export const User = mongoose.model("User", userSchema);

