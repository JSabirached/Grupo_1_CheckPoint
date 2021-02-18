const fs=require("fs")


module.exports=json.parse(fs.readFileSync(__dirname+"/autos.json"))
