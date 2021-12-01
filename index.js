const customExpress = require('./config/customExpress')
const db = require('./db/index')

const app = customExpress()

db.connect()

app.listen(3000, () => console.log('Server listen on 3000 !'))

module.exports = app
