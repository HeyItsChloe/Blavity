/* modules */
const path = require('path')
const bodyparser = require('body-parser')
/* start server */
const express = require('express')
const app = express()
const PORT = 3000
app.listen(PORT, () => console.log('listening on PORT 3000'))
/* Parsers */
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
/* imports */
const articleController = require('./articleController.js')

/* Routes */
app.use('/styles', express.static(path.join(__dirname, '../src/styles.scss')))

app.post('/savedArticles', articleController.postArticles, (req, res, next) => {
    res.status(200).json({})
})

app.delete('/savedArticles', articleController.deleteArticles, (req, res, next) => {
    res.status(200).json({})
})

app.get('/savedArticles', articleController.getArticles, (req, res, next) => {
    res.status(200).json({articles: res.locals.articles})
})

/* error handlers */
app.use('*', (req, res, next, err) => {
    console.log('err in catch all')
    res.status(404)
})

app.use((req, res, next, err) => {
    console.log('err in global')
    res.status(500).send('Internal Server Error');
})