const dotenv = require('dotenv')

dotenv.config()

const { env } = process

module.exports = {
    mongo: env.URL_MONGO
}
