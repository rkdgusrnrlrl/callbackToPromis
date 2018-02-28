var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'rkd123'
});


const express = require('express');
const app = express();

app.get('/', (req, res) => {
    connection.query('SELECT 1 + 1 AS solution', function (error, results1) {
        if (error) {
            res.send(error);
        } else {
            connection.query('SELECT 1 + 2 AS solution', function (error, results2) {
                if (error) {
                    res.send(error);
                } else {
                    let solution1 = results1[0].solution;
                    let solution2 = results2[0].solution;
                    res.send('The solution is: ' + (solution1 + solution2));
                }
            });
        }
    });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));