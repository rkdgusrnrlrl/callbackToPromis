var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'rkd123'
});


const express = require('express');
const app = express();

function query(q) {
    return new Promise(function(resolve, reject) {
        connection.query(q, function (error, results) {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

app.get('/', (req, res) => {
    query('SELECT 1 + 1 AS solution')
        .then((results1) => {
            return query('SELECT 1 + 2 AS solution')
                .then((results2) => {
                    let solution1 = results1[0].solution;
                    let solution2 = results2[0].solution;
                    res.send('The solution is: ' + (solution1 + solution2));
                })
        })
        .catch((err) => {
            res.send(err);
        })
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));