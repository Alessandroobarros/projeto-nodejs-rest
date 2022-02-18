const db = require('./db/index')
const app = require ('./app')

db.connect()

app.listen(3000, () => console.log('Server listen on 3000 !'))

