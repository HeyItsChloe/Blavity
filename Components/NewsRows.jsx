import React, { Component } from 'react';

class NewRows extends Component {
    constructor(props){
        super(props)
        this.state = {
            saved: 0
        }
        this.saveNews = this.saveNews.bind(this)
    }

    saveNews () {
        if(this.state.saved === 0){
            console.log('true')
            this.setState({
                saved: 1
            })

            fetch('/savedArticles', {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: this.props.title,
                    url: this.props.url
                })
            })
        }

        if (this.state.saved === 1){
             console.log('false')
             this.setState({
                saved: 0
            })
             fetch('/savedArticles', {
                 method: 'DELETE',
                 headers: {
                     'Content-Type' : 'application/json'
                 },
                 body: JSON.stringify({
                     title: this.props.title
                 })
             })
        }
    }

    render () {
        return (
            <div>
                <div className='eachArticle'>
                    title: {this.props.title} <br></br>
                    url: {this.props.url} <br></br>
                    <button onClick={this.saveNews}>save</button>
                </div>
            </div>
        )
    }
}

export default NewRows