import mongoose from "mongoose";

const { Schema } = mongoose;

const titleSchema = new Schema({
    titleName: String,
    tasks: [String]
}, {
    timestamps: true
})

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
    },
    email: {
        type: String,
        unique: true,
    },
    password: String,
    title: [titleSchema]
}
)

export default mongoose.model("User", userSchema)