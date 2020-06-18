import React, { Component } from 'react';
import NewsContainer from './NewsContainer.jsx';
import News from './News.jsx'
import axios from 'axios';

class HomePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            updateNews: false,
            title: '',
            url: '',
            getSaved: false
        }
        this.getNews = this.getNews.bind(this)
        this.savedArticles = this.savedArticles.bind(this)
    }

    savedArticles () {
        this.setState({
            getSaved: !this.state.getSaved
        })
    }

    getNews () {
        const url = 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-05-18&sortBy=publishedAt&apiKey=531591f3d76844f6951459db1971562d'
        axios.get(url)
        .then((res) => {
            let titles = []
            let urls = []
            for(let i=0; i<res.data.articles.length; i++){
                titles.push(res.data.articles[i].title)
                urls.push(res.data.articles[i].url)
            }

            this.setState({
                title: titles,
                url: urls,
                updateNews: !this.state.updateNews
            })
        })
    }

    render () {
        return (
            <div>
                <div>
                    <button onClick={this.getNews}><h3>Get The News!</h3></button>
                    <button onClick={this.savedArticles}><h3>Show Saved Articles</h3></button>
                </div>
                <div>
                    {this.state.updateNews ? 
                        <NewsContainer titles={this.state.title} urls={this.state.url} /> 
                    : null}

                    {this.state.getSaved ? <News /> : null}
                </div>
            </div>
        )
    }
}

export default HomePage;