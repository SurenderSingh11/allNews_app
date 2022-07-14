import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  constructor(){
      super();
      this.state = {
        articles: [],
        loading: false,
        page:1
      }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=ec26f65a639f4e5cb9831f2a61847e6e";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles})
  }

  handlePrevClick = ()=>{
    console.log("Previous");
  }

  handleNextClick = ()=>{
    console.log("Next");
  }

  render() {
    return (
      <div className='container my-3'>
        <h1>NewsMonkey - Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
          <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
          </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
          <button type="button" class="btn btn-dark" onClick={this.handleNextClick}> Next &rarr;</button>
        </div>
      </div>
    )
  }
}



