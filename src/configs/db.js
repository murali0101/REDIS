const mongoose = require("mongoose")


module.exports=()=>{
    return mongoose.connect(
      "mongodb+srv://muralimv:1234@masaiassignments.vt3o0.mongodb.net/REDIS?retryWrites=true&w=majority"
    );
}