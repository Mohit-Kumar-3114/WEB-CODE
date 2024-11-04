const express = require("express");
const zod = require("zod")
const app = express();

const schema = zod.array(zod.string());

app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.post("/health-checkup",  function (req, res) {
  const kidneys = req.body.kidneys
  const response = schema.safeParse(kidneys)
  res.send(response)
});


app.listen(3006);