const express = require("express")
const db = require("./db.json")
const fs = require("fs")
const PORT = 8080

const app = express()
app.use(express.json())

app.post("/login", (req, res)=>{
    let input = (req.body)
    let data = db.people.find((ele)=>ele.username==input.username)
    if(data){
        if(data.password==input.password){
            res.status(200).send({token:`${input.password}@${input.username}`})
        }else {
        res.status(401).send({error:"Wrong password"})
        }
    } else {
        res.status(401).send({error:"User Not Found"})
    }
})


app.post("/signup", (req, res)=>{
    let {username, email, password} = req.body
    let data = db.people.find(ele=>ele.email==email)

    if(data){
        res.status(401).send({error:"Email already registered with us"})
    } else {
        let dat1 = db.people.find(ele=>ele.username==username)
        if(dat1){
           res.status(401).send({error:"Please select a different username"}) 
        } else {
            if(password.length>=8){
                let obj = {
                    username, 
                    email, 
                    password,
                    teamName:"",
                    entries:[],
                    tasks:[]
                }
                console.log(obj)
                db.people.push(obj)
                fs.writeFile("./src/db.json", JSON.stringify(db), ()=>{})
                res.status(200).send({error:"false"})
            } else {
                res.status(401).send({error:"Password must have 8 characters"})
            }
        }
    }

})


app.post("/data", (req, res)=>{
    let token = req.body.token
    let {pass, username} = token.split("@")
    let data = db.people.find(ele=>ele.username==username)
    res.status(200).send({"entries":data.entries, tasks:data.tasks, teamName:data.teamName})
})

app.post("/addEntry", (req, res)=>{
    let input = req.body
    let [pass, uname] = input.token.split("@")
    console.log(uname)
    let data = db.people.find(ele=>ele.username==uname)
    data.entries.push({id, title})
    res.send()
    
})


app.listen(PORT, ()=>{
    console.log(`Server Started @ http://localhost:${PORT}`)
})
