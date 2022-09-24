const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

const users = {
    1: {
        fullname: "Zaky Zaidan",
        username: "zakynich",
        address: "Jakarta"
    },
    2: {
        fullname: "M. Fathur Ahmad",
        username: "fathurtuch",
        address: "Samarinda"
    },
    3: {
        fullname: "Sumanto Karomahi",
        username: "sukar",
        address: "Bandung"
    }
}

app.post('/user', function(req, res){
    let body = req.body
    console.log(body)

    if(Object.keys(body).length !== 0){
        let lastNum = Object.keys(users).pop()
        users[++lastNum] = body
    }

    res.send(users)
})

app.get('/user/:id', function(req, res){
    res.send(users[req.params.id])
})

console.log(`Listening Port: ${port}`)

app.listen(port)