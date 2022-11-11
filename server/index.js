const express = require('express')
const cors = require('cors')
const{Novu}= require('@novu/node')


const novu = new Novu("1e938140d4004d5d1a3553ec1b1cf3c1")
const app = express()
const PORT = 4000

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())



const users = []

const generateID = () => Math.random().toString(36).substring(2,10)

app.post("/api/register",(req,res)=>{
    const {email,username,password,tel} = req.body

    let result = users.filter((user)=> user.email === email && user.tel === tel)

    if( result.length === 0){
        const newUser = {id : generateID(),email ,password,username,tel}
        users.push(newUser)
        console.log(users)
        return res.json({message : "Account created successfully"})
    }


    
    console.log({email,username,password,tel})
    res.json({error_message: "User already Exists"})
})




app.post("/api/login",(req,res)=>{
    const {email,password} = req.body

    let result = users.filter((user)=> user.email === email && user.password === password)

    if(result.length===0){
        return res.json({error_message:"Invalid credentials"})
    }


    res.json({
        message:"Login successfull",
        data:{
            username: result[0].username
        }
    })

   
})



app.listen(PORT,()=>{
    console.log(`server listening on PORT ${PORT}`)
})