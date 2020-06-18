const mongoose = require('mongoose')
const MONGO_URI = 'mongodb+srv://chloe:blahblah12@cluster0-vlnhi.mongodb.net/Blavity?retryWrites=true&w=majority'

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Blavity'
})
.then(() => console.log('connected to Mongo Database'))
.catch((err) => console.log('err in database connection', err))

const Schema = mongoose.Schema

const articleSchema = new Schema({
    title: String,
    url: 'String'
})

const Article = mongoose.model('article', articleSchema)

module.exports = {
    Article
}