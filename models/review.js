import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    name : {
        type : String,
        required : true
    },
    rating : {
        type : Number,
        required : true,
        min: 1,
        max: 5
    },
    comment : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        required : true,
        default: Date.now
    },
    isApproved : {
        type : Boolean,
        required : true,
        default : false
    },
    profilePic : {
        type : String,
        required : true,
        default : "https://i.ibb.co/7Y5r8hS/default-user.png"
    }

})

const Review = mongoose.model("Review",reviewSchema);

export default Review;