const express = require("express")
const app =express()
const PORT = 3001;

// UGLY WAY OF WRITING CODE
app.get('/health-checkup1', (req, res) => {
    const username= req.headers.username
    const password=req.headers.password
    const kidney=req.query.kidney
    if (username!= "harkirat" || password!= "pass"){
        res.status(400).json("username or password may be wrong")
    }
    if (kidney!=1 && kidney !=2){
        res.status(400).json("kidneys are wrong")
    }
    res.json("everything is fine")
});




// USING MIDDLEWARES
// Middleware for username and password validation
const checkCredentials = (req, res, next) => {
    const username = req.headers.username;
    const password = req.headers.password;
    if (username !== "harkirat" || password !== "pass") {
        return res.status(400).json("Invalid credentials");
    }
    next(); 
};

// Middleware for kidney validation
const checkKidney = (req, res, next) => {
    const kidney = req.query.kidney;
    if (kidney != 1 && kidney != 2) {
        return res.status(400).json("Invalid kidney parameter");
    }
    next();
};

app.get('/health-checkup2', checkCredentials, checkKidney, (req, res) => {
    res.json("Everything is OK");
});

app.get('/kidney-checkup', checkKidney, (req, res) => {
    res.json("Kidney is ok");
});




// MIDDLEWARES USING APP.USE
// const checkCredentials = (req, res, next) => {
//     const username = req.headers.username;
//     const password = req.headers.password;
//     if (username !== "harkirat" || password !== "pass") {
//         return res.status(400).json("Invalid credentials");
//     }
//     next(); 
// };

// const checkKidney = (req, res, next) => {
//     const kidney = req.query.kidney;
//     if (kidney != 1 && kidney != 2) {
//         return res.status(400).json("Invalid kidney parameter");
//     }
//     next();
// };

// app.use(checkKidney); // using global middleware

// app.get('/health-checkup2', checkCredentials, (req, res) => {
//     res.json("Everything is OK");
// });

// app.get('/kidney-checkup', (req, res) => {
//     res.json("Kidney is ok");
// });




app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
