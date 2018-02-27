var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'rkd123'
});


const express = require('express')
const app = express()

app.get('/', (req, res) => {
    connection.query('SELECT 1 + 1 AS solution', function (error, results) {
        if (error) {
            res.send(error);
        } else {
            res.send('The solution is: ' + results[0].solution);
        }
    });

});

app.listen(3000, () => console.log('Example app listening on port 3000!'));