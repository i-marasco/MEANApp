require('dotenv').config();

const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const cors = require('cors');

const con = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    port: process.env.MYSQL_PORT,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    charset: 'utf8'
});

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};

con.connect(function(err) {
    if (err) {
        console.log(err);
    }
});

router.get('/books', cors(corsOptions), (req, res) => {
    con.query('SELECT * FROM books', function(err, result, fields) {
        if (err) {
            return res.send(err);
        }

        res.send(result);
        console.log(result);
    });
});

module.exports = router;
