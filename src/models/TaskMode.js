const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String
    },
    timestamps: {
        type: String
    },
    endingtimestamps: {
        type: String
    },
    status: {
        type: String,
        enum: ["Not Started", "In Progress", "Completed"]
    },
    driverId: {
        type: mongoose.Schema.ObjectId,
        ref: "Driver"
    }
})

module.exports = mongoose.model("Task", TaskSchema)