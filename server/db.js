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

const AccountsSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true,
    },
    balance: {
        type: number,
        required:true,
    }
})

const Accounts = mongoose.model("Accounts",AccountsSchema);

const User = mongoose.model("User", userSchema);

module.exports={
    User,
    Accounts
}