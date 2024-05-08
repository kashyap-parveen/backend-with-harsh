import express from 'express'
import 'dotenv/config'

const app  = express()

const port = process.env.PORT || 3000

app.set("view engine",'ejs');
app.use(express.static("./public"));

app.get("/test",(req,res)=>{
    res.render("index")
})
app.get("/",(req,res)=>{
    res.send("test files 1")
})

app.listen(port,()=>{
    console.log(`Your server is running PORT no ${port}`);
})