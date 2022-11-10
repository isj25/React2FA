const express = require('express')
const cors = requrie('cors')


const app = express()
const PORT = 4000

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())






app.listen(PORT,()=>{
    console.log(`server listening on PORT ${PORT}`)
})