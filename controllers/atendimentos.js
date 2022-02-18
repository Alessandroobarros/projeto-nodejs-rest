const Atendimento = require('../models/atendimento')
const moment = require('moment')


const cadastrarAtendimento =  async (req, res) => {

    try{
        const dados = req.body

        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')

        const atendimentoDatado = { ...dados, dataCriacao}

        if(!dados){
            res.status(422).json({ error: 'Deve-se informar as os dados no body' })
        }
        const data = await Atendimento.create(atendimentoDatado)

        const { _id } = data
        console.log('LOG DO DATA', data);
        res.status(201).json({message: `Atendimento criado com sucesso id: ${_id}`})
    }catch(error){
        console.log('LOG DO ERRO', error);
        res.status(400).json({error: error})
    }

}

const buscaById =  async (req, res) => {
    try{
        const id = req.params.id

        const atendimento = await Atendimento.findOne({id})

        res.status(200).json(atendimento)
    }catch(error){
        console.log('LOG DO ERRO', error);
        res.status(400).json({error: error})
    }

}

const cancelaById =  async (req, res) => {
    try{
        const {id, justificativa} = req.body

        const atendimento = await Atendimento.findOne({id})

        const newStatus = 'Cancelado'

        await atendimento.set({status: newStatus, observacoes: justificativa}).save()

        res.status(201).json({message: `atendimento ${id} Cancelado com sucesso!`})
    }catch(error){
        console.log('LOG DO ERRO', error);
        res.status(400).json({error: error})
    }

}

module.exports = { cadastrarAtendimento, buscaById, cancelaById }
