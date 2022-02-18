const { Router } = require('express')
const Atendimentos = require('../controllers/atendimentos')

const routes = Router()

routes.post('/atendimentos', Atendimentos.cadastrarAtendimento)
routes.get('/atendimentos/:id', Atendimentos.buscaById)
routes.post('/cancelamento', Atendimentos.cancelaById)
routes.get('/status', (req,res) => res.send('Servidor rodando !!!!'))


module.exports = routes
