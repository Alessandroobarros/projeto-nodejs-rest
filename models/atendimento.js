const mongoose = require('mongoose')

const AtendimentoSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true
    },
    cliente: {
        type: String
    },
    pet: {
        type: String
    },
    servico: {
        type: String
    },
    status: {
        type: String,
        default: 'Aguardando'
    },
    observacoes: {
        type: String
    },
    dataCriacao: {
        type: Date
    }
})

const Atendimento = mongoose.model('Atendimento', AtendimentoSchema)

module.exports = Atendimento
