const express = require('express')
const bodyParser = require('body-parser')

app = express()

// 'bodyParser.url...' toma o corpo da requisição e joga todos os dados dentro de 'req.body'
app.use(bodyParser.urlencoded({extended: true}))

// Atende  à requisição 'POST' em '/usuários'
app.post('/usuarios', (req, res) => {
   console.log(req.body)
   // console.log(req.query) //Para o caso de GET - parâmetros na URL
   // res.send(`<h1>Parabéns, ${req.body.username}!!</h1>`)
   res.send(req.body)
})

app.post('/usuarios/:id', (req, res) => {
   res.send(req.params.id)
})

app.listen(3003, 'localhost')