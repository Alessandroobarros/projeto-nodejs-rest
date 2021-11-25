const express = require('express')

const app = express()

app.listen(3000, () => console.log('Server listen on 3000 !'))

app.get('/status', (req,res) => res.send('Servidor OK !'))

app.get('/atendimentos', (req,res) => res.send('Pagina de atendimentos'))

module.exports = app