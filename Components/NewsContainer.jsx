import React, { Component } from 'react';
import NewsRows from './NewsRows.jsx'

class NewsContainer extends Component {
    render () {
        let eachListing = []

        this.props.titles.forEach((titles, i) => {
            const urls = this.props.urls[i]
            eachListing.push(<NewsRows key={i} title={titles} url={urls} />)
        });

        return (
            <div>
                <div> 
                    {eachListing}
                </div>
            </div>
        )
    }
}

export default NewsContainer