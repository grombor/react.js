const express = require("express");
const app = express();
const mysql = require("mysql2");

const db = mysql.createPool({
    host: 'localhost',
    user: 'admin',
    password: 'admin',
    database: 'CRUDDataBase'
});

/*     const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES ('foo', 'bar');";
    db.query(sqlInsert, (err, result) => {
        res.send("testing db");
    }) */

app.get("/", (req, res) => {
    

});

// Route to get all posts
app.get("/get", (req,res)=>{
    db.query("SELECT * FROM movie_reviews", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   });

app.listen(3001, () => {
console.log("Running on port 3001 - All OK!");
})