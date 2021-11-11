const express = require('express');
const app = express();
app.use(express.json());
let jwt = require("jsonwebtoken");
var server = require('http').createServer(app);
const mysql = require('mysql');
const cors = require('cors');
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    password: 'dongseopfuck1',
    database: "color"
})

db.connect();

app.post('/signup', function(req, res){
    db.query(`SELECT * from user where name=${req.body.name}`, function(err, rows){
        if(rows === []){
            res.status === 406;
            res.json("중복");
        }
        else{
            db.query(`INSERT INTO user (name, password) VALUES (?, ?);`, [req.body.name, req.body.password], function(error, results, fields){
                if(error){
                    res.json(error);
                }
                else{
                    res.json("성공");
                }
            });
        }
    });
})

app.post('/login', function(req, res){
    console.log(req.body);
    db.query(`SELECT * from user WHERE name=? and password=?`, [req.body.name, req.body.password], function(err, rows){
        if(err){
            res.status(406);
        }
        else{
            const name = rows[0].name;
            const password = rows[0].password;
            const token = jwt.sign({name: name, password: password}, "apple")
            res.json(token);
        }
    })
})

function checklogin(token){
    return new Promise((resolve, reject) => {
        var user = jwt.verify(token, 'apple');
        resolve(user);
    })
}

app.get('/pallete', function(req, res){
    db.query(`SELECT * FROM pallete`, function(err, rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
})

app.post('/test', function(req, res){
    res.json(req.body);
})

app.post('/pallete', async(req, res) => {
    let check = await checklogin(req.headers.authorization.substring(7));
    if(check){
        db.query(`SELECT * from pallete where name=${req.body.name}`, function(err, rows){
            if(rows[0]){
                res.json("이미 존재하는 팔레트 이름 입니다.")
            }
            else{
                var color = "";
                console.log(req.body.color)
                req.body.color.map(
                    i => {
                        color += i;
                    }
                )
                console.log("color: " + req.body.color)
                color = color.replaceAll('#', ".");
                console.log(color);
                db.query(`INSERT INTO pallete (name, color, master) VALUES (?, ?, ?)`, [req.body.name, color, req.body.master], function(err, rows){
                    if(err){
                        res.json("에러");
                    }
                    else{
                        res.json("성공");
                    }
                })
            }
        })
    }
    else{
        res.json("권한이 없습니다.")
    }
})

app.delete('/pallete', async(req, res) => {
    let check = await checklogin(req.headers.authorization.substring(7));
    if(check){
        if(check.master === req.body.master){
            db.query(`DELETE FROM pallet where name=${req.body.name} and master=${req.body.master}`, function(err, rows){
                if(err){
                    res.json("권한이 없습니다.")
                }
                else{
                    res.json("삭제")
                }
            })
        }
    }
})

app.get('/user', async(req, res) => {
    var user = await checklogin(req.headers.authorization.substring(7));
    res.json(user.name);
})

server.listen(1312, function () {
    console.log('Example app listening on port', 1312);
});