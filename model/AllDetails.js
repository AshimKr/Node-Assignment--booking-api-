import mongoose from "mongoose";

const room = mongoose.Schema({
    roomId:{
        type: "number",
        require: true
    },
    seatAvailable :{
        type: "number",
        require:true,
    },
    Amenities:{
        type:"array",
        require:true
    },
    PriceForOneHour:{
        type: String,
    },
    availableDate:{
        type:"string",
        require:true
    },
    availableTimes:{
        type:"array",
        require:true
    },
    bookingDetails:{
        type: "array",
    }
})

export default mongoose.model("rooms",room)