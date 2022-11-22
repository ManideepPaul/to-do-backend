import mongoose from "mongoose";

const {Schema} = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
    },
    title: [{
        titleName: String,
        tasks: [String],
    }]
})

export default mongoose.model("User", userSchema)