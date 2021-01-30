const express = require('express');
const app = express();

app.use(express.static('./public'));

app.get("/", (req, res) => {
    res.sendFile('index.html', {root: __dirname});
    res.end();
})

app.listen(3003, () => {
    console.log("Server is listening on 3003");
})