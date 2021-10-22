const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())
const users = [
    {"id":0, "name":"jhankar", "age":14},
    {"id":1, "name":"tushar", "age":14},
    {"id":2, "name":"mijan", "age":15},
    {"id":3, "name":"rakib", "age":16},
    {"id":4, "name":"sakib", "age":17},
    {"id":5, "name":"robi", "age":18}
]
app.post('/users',(req,res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    res.json(newUser)
})
app.get('/',(req, res)=>{
    res.send('Second Node project. My name is tushar')
})

app.get('/users',(req, res)=>{
    // use query parameter
    const search = req.query.search;
    if(search){
        const result = users.filter(user=> user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
        res.send(result)
    }else{
        res.send(users)
    }
})
// dynamic api
app.get('/users/:id',(req, res)=>{
    const id= req.params.id
    const user = users[id]
    res.send(user)
})
app.listen(port,()=>{
    console.log(`listening at http://localhost:${port}`)
})