var app = require("express")();
app.get("/",(req,res,next)=>{
    res.json({msg:"magex adapter"})
})
app.listen(8100)