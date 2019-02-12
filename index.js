const express = require('express')
var bodyParser = require('body-parser');
const app = express()
const port = 3000
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let currentUser = {
    "id": 1,
    "email": "hamed@test.com",
    "name": "Hamed Momeni",
    "age": 28,
    "birthdate": "03-06-1990",
    "token": "12345678iujhgfdw34567uikjhgfdsq"
}

let users = [
    currentUser,
    {
        "id": 2,
        "email": "ali@gmail.com",
        "name": "Ali Mirzaee",
        "age": 28,
        "birthdate": "03-06-1990",
        "token": "12345678iujhgfdw34567uikjhgfdsq"
    },
    {
        "id": 3,
        "email": "masoud@test.com",
        "name": "Masoud Khoshkam",
        "age": 28,
        "birthdate": "03-06-1990",
        "token": "12345678iujhgfdw34567uikjhgfdsq"
    },
    {
        "id": 4,
        "email": "babak@test.com",
        "name": "Babak Hosseini",
        "age": 28,
        "birthdate": "03-06-1990",
        "token": "12345678iujhgfdw34567uikjhgfdsq"
    }
]


app.get('/', (req, res) => res.send('Hello World!'))
app.get('/users', (req, res) => res.send(users))
app.post('/login', (req, res) => {
    let email  = req.body.email
    let password = req.body.password

    if(email == 'hamed.ma7@gmail.com' && password == '123456'){
        res.send(currentUser)        
    }else{
        res.status(401).send('Wrong email and password')
        
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))