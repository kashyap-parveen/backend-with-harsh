### backend-with-harsh
```javascript
npm init
npm i express
npm i dotenv
import 'dotenv/config'
npm i ejs

```
###### setup ejs files
```javascript
app.set("view engine",'ejs');

app.get("/test",(req,res)=>{
    res.render("index")
})

```
