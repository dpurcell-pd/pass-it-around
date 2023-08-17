const express = require('express');
const app = express();
const port = 3000;
const bottles = "bottle(s) of ginger beer on the wall";
const takeOneDown = "Take one down, pass it around";

app.get("/", (req, res) => {    
    res.send(`<h1>99 ${bottles}</h1>
    <a href="http://localhost:3000/98">${takeOneDown}</a>`); 
});

app.get("/:number_of_bottles", (req, res) => {
    const remainingBottles = req.params.number_of_bottles
    
    if (remainingBottles >= 1) {
        res.send(`<h1>${remainingBottles} ${bottles}</h1>
        <a href="http://localhost:3000/${remainingBottles - 1}">${takeOneDown}</a>`)
    } else {
        res.send(`<h1>0 ${bottles}</h1>`)
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
})