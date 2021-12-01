const mongoose = require('mongoose')
const env = require('../config/config')

const connect = () => {
    try {
        mongoose.connect(env.mongo, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        console.log('Connected to MongoDB!!!')
    } catch (error) {
        error.message = error
    }
}

const disconect = () => {
    mongoose.disconnect()
}

module.exports = { connect, disconect, mongoose }
