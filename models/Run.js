const mongoose = require("mongoose")
const RunSchema = mongoose.Schema({
Run_type: String,
Run_age: Number,
Run_rank: Number
})
module.exports = mongoose.model("Run",
RunSchema)