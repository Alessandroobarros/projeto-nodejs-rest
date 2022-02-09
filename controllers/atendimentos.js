const Atendimento = require("../models/atendimento")


const cadastrarAtendimento =  async (req, res) => {

    try{
        const dados = req.body

        if(!dados){
            res.status(422).json({ error: 'Deve-se informar as os dados no body' })
        }
        const data = await Atendimento.create(dados)

        const { _id } = data
        console.log('LOG DO DATA', data);
        res.status(201).json({message: `Atendimento criado com sucesso id: ${_id}`})
    }catch(error){
        console.log('LOG DO ERRO', error);
        res.status(400).json({error: error})
    }

}

module.exports = { cadastrarAtendimento }
