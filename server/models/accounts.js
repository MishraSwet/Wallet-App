const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/walletApp");


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

export const Accounts = mongoose.model("Accounts",AccountsSchema);
export const User = mongoose.model("User", userSchema);