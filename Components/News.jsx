import React, { Component } from 'react';

class News extends Component {
    constructor(props){
        super(props)
        this.state = {
            saved: [],
        }
        this.getSaved = this.getSaved.bind(this)
    }

    componentDidMount(){
        this.getSaved()
    }

    getSaved () {
        fetch('/savedArticles', {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(res => res.json())
        .then((res) => {
            let results = []
            for (let i=0; i<res.articles.length; i++){
                results.push(
                    <div key={i}  className='savedArticles'>
                        <div>{res.articles[i].title}</div>
                        <div>{res.articles[i].url} </div> <br></br>
                    </div>
                )
            }
            this.setState({
                saved: results
            })
        })
    }

    render () {
        return (
            <div>
                <div>
                    {this.state.saved}
                </div>
            </div>
        )
    }
}

export default News