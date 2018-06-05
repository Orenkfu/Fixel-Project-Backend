const express = require('express');
const _ = require('underscore');
const app = express();
let x = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(_.contains(x, 2));
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => console.log('INITIATED -- Listening on port 3000'))