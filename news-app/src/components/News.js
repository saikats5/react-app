import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
  constructor() {
    super()
    this.state = {
      articles: [],
      loading: false,
    }
  }
  async componentDidMount() {
    let url =
      'https://newsapi.org/v2/top-headlines?country=in&apiKey=2adb1baa059e40e4adb0d5b8e4795953'
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({ articles: parsedData.articles })
    console.log('News Data======', data)
  }
  render() {
    return (
      <div className="container my-3">
        <h2>News Application</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItems
                  title={element.title ? element.title.slice(0, 45) : ''}
                  description={
                    element.description
                      ? element.description.slice(0, 88)
                      : null
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default News
