const app = require("..")

module.exports = (app) =>{
    app.get('/status', (req,res) => res.send('Servidor OK !'))
    app.get('/atendimentos', (req,res) => res.send('Pagina de atendimentos'))
    app.post('/atendimentos', (req, res) => {
        console.log(req.body);
        res.send('Você esta na rota de atendimentos e esta realizando um post')     
    })
}