import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import {fileURLToPath} from "url";

const __dirname=dirname(fileURLToPath(import.meta.url));
const port=3000;
const app=express();
const database=[];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.render("index.ejs");
});

app.get("/explore", (req, res)=>{
    res.render("explore.ejs", {database});
});

app.get("/add_blog", (req, res)=>{
    res.render("add_blog.ejs");
});

/* Writing logic to save the blogs */
app.post("/add_blog", (req, res)=>{
    const obj=req.body;
    database[database.length]=[obj.uname, obj.title, obj.blog];
    console.log(database);
    res.redirect("/add_blog");
});


app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});