import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
    },
    role : {
        type : String,
        required : true,
        default : "customer"
    },
    firstName : {
        type : String,
        required :true,
    },
    lastName : {
        type : String,
        required :true,
    },
    phone : {
        type : String,
        required : true
    },
    profilePic : {
        type : String,
        required : true,
        default : "https://www.pinterest.com/pin/610448924494569360/"
    }
})

const User = mongoose.model("User",userSchema);

export default User;