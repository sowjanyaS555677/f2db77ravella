const mongoose = require("mongoose")
const RunSchema = mongoose.Schema({
Run_type: {
    type:String,
    requrie:true

},
Run_age: {
    type:Number,
    min:2,
    max:100
},
Run_rank: {
    type:Number,
    min:1,
    max:50
}
})
module.exports = mongoose.model("Run",
RunSchema)