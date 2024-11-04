const express = require("express")
const app =express()
const PORT = 3007;
app.use(express.urlencoded({extended:true}))
app.use(express.json());


app.post('/health-checkup', (req, res) => {
    const kidneys=req.body.kidneys
    const kidneylength=kidneys.length  // {"kidneys":["1","2","3"]} in postman
    res.send("you have "+kidneylength+" kidneys")
})

// GLOBAL CATCHES
app.use(function(err,req,res,next){
    res.json("opps not found anything")
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
