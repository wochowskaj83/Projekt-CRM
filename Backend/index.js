const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(7070, () => {
    console.log('serwer Node.js działa');
});