const { Router } = require('express')
const Atendimentos = require('../controllers/atendimentos')

const routes = Router()

routes.post('/atendimentos', Atendimentos.cadastrarAtendimento)
routes.get('/status', (req,res) => res.send('Servidor OK !'))
routes.get('/atendimentos', (req,res) => res.send('Pagina de atendimentos'))


module.exports = routes
