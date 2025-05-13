const mongoose = require("mongoose");
const { string } = require("zod");

mongoose.connect("mongodb+srv://ranjanrohan2002:SFd7igxu9W41mAh0@cluster0.vuanjdn.mongodb.net/")

const UserSchema = mongoose.Schema({
   username : string,
   password : string,
   firstName :string,
   lastName : string,

})

const User = mongoose.model("User" , UserSchema);
module.exports={
    User
}
