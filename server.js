const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const fs = require("fs");
fs.readFile("./data/products.json", "utf8", (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err);
        return;
    }
    console.log("File data:", jsonString);
});
fs.readFile("./data/categories.json", "utf8", (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err);
        return;
    }
    console.log("File data:", jsonString);
});
app.use(express.static(path.join(__dirname, 'view')))
app.get('/', (req, res) => {

    res.sendFile("/index.html");
})
app.get("/Demos", (req, res) => {
    res.sendFile(__dirname + "/Demos.html");
})
app.get("/Categroies", (req, res) => {
    res.sendFile(__dirname + "/Categroies.html");
})
app.get("/Products", (req, res) => {
    res.sendFile(__dirname + "/products.html");
})
app.all('*', (req, res) => {
    res.status(404).send('<h1>404! Page not found</h1>');
});

app.listen(port, () => {
    console.log("Express http server listening on 8080");
})