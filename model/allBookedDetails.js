import mongoose from "mongoose";

const bookDetails = mongoose.Schema({
    roomId:{
        type: "number",
        require: true
    },
    name:{
        type: "string",
        require: true
    },
    date:{
        type: "string",
        require: true
    },
    time:{
        type: "string",
        require: true
    },
    status:{
        type: "string",
        require: true
    }
})

export default mongoose.model("bookedStatus", bookDetails)