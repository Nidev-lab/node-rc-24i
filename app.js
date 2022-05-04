const express = require('express')
const app = express()

const port = 8000

app.use(express.json())
app.use(express.urlencoded())

app.get('/hola', (req, res) => {
  res.send('Hola amigo')
})

app.get('/chau', (req, res) => {
  res.status(500).json({
    message: 'Hasta luego',
    numero: 102
  })
})

app.post('/user', (req, res) => {
  res.json(req.body)
})

app.put('/', async (req, res) => {
  res.send('hola')
})

app.listen(port, () => {
  console.log('El servidor esta corriendo en el puerto ' + port)
})
