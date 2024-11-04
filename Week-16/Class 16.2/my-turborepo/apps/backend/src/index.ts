import express from "express";
const app = express()

import { BACKEND_URL } from "@repo/common/config";
import { VALUE } from "@repo/common/config";
console.log(BACKEND_URL)
console.log(VALUE)
app.get("/", (req, res) => {
    res.json({
        message: "hello world"
    });
})

app.listen(3008);