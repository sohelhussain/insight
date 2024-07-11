const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("Welcome to web server");
})

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));