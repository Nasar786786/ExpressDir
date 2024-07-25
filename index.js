const express = require("express");
const app = express();


let port = 8080

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("hello, i am root");
});

app.get("/:usrername/:id", (req, res) => {
    let { username, id } = req.params;
    res.send(`welcome to the page of @${username}.`);
});


