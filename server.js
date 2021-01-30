const express = require('express');
const app = express();

app.use(express.static('./public'));

app.get("/", (req, res) => {
    res.sendFile('index.html', {root: __dirname});
    res.end();
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

module.exports = app;