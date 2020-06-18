const articleController = {}
const model = require('./Models/savedArticlesModel.js')

articleController.postArticles = (req, res, next) => {
    const { title, url } = req.body
    model.Article.create({title: title, url: url}, (err) => {
        if(err){
            console.log('err in post controller', err)
            return next()
        }
    })
    return next()
}

articleController.deleteArticles = (req, res, next) => {
    const { title } = req.body
    model.Article.findOneAndDelete({title: title}, (err, title) => {
        if (err){
            console.log(err)
        }
        return next();
    })
}

articleController.getArticles = (req, res, next) => {
    model.Article.find({}, (err, articles) => {
        if(err){
            console.log('err')
            return next()
        }
        res.locals.articles = articles
        return next()
    })
}

module.exports = articleController