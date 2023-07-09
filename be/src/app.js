const express = require("express");
const app = express();
const cors = require("cors");
const { Client } = require('pg')
 
app.use(cors());
app.use(express.json());

app.listen(3000, function () {
  console.log("listening on 3000");
});
 
app.get("/api", (req, res) => {
  res.send("Welcome USER! to MY node app!");
  console.log("welcome url /");
});
 
app.get("/api/delete", (req, res) => {
  res.send("User was deleted");
  console.log("DELETE user");
});
 
app.get('/api/user', async (req, res) => {
    const userData = await client.query("select * from user_data");
    res.send(userData.rows); 
})

app.post("/api/user", async (req, res) => {
    console.log(req.body);
    await client.query("INSERT INTO user_data(NAME, AGE, GENDER) VALUES($1, $2, $3)", [req.body.user, req.body.age, req.body.gender]);
    res.send("{'status': 'ok'}");
});

const client = new Client({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: 5432,
});

client.connect(function(err) {
    client.query("CREATE TABLE IF NOT EXISTS user_data (ID  SERIAL PRIMARY KEY, NAME TEXT NOT NULL, AGE INT NOT NULL, GENDER TEXT NOT NULL)")
    if (err) throw err;
    console.log("Connected!");
});