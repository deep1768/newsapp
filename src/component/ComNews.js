import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export  class ComNews extends Component {
    static defultProps ={
        country: "in",
        pageSize: 8,
        category: "gereral"
    
      }
    
       PropTypes ={
        country: PropTypes.string,
        pageSize : PropTypes.number,
        category: PropTypes.string,
    
      }
      

      articles = [
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
    ]

    key = "d46c2531ea9c40a1809fcefe655fe489"

  constructor(props){
    super(props);
   
    this.state = {
      articles : this.articles,
      loading : false,
      page : 1,
      totalResults: 0
    }

    document.title = `${(this.props.category).charAt(0).toUpperCase() + (this.props.category).slice(1)}  News On Time` ;
    

    
    
  }

async componentDidMount(){
  console.log('hello')

  if(this.props.category==='business'){
    const arr= ['sports', 'health']
    
    for( let i=0; i<arr.length; i++){
      let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${arr[i]}&apiKey=${this.key}&page=${this.state.page ===1? this.state.page+1:this.state.page }&pagesize=${4}`

      let data= await fetch(url);
      let parsedData = await data.json()
      if(this.state.page===1){
        this.setState({
          page:this.state.page +1
        })
      }
    
      this.setState({articles: parsedData.articles})
    

    }

  }
  

 
}




  // async update(){
  //   console.log("dhveh")
  //   if ( this.props.category==='business'){
  //     const arr=['sport','health']
  //     for( let i=0; i<arr.length;i++){
  //       console.log("hello")
      
  //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${arr[i]}&apiKey=${this.key}&page=${this.state.page}&pagesize=${this.props.pageSize}`
  //     this.setState({loading : true})
  //   let data = await fetch(url);
  //   let parsedData = await data.json()
  //   document.write(parsedData)

  //   this.setState({
  //     articles:parsedData.articles,
  //     totalResults:parsedData.totalResults,
  //     loading: false
    
  //   })
  //   }
  // }
    
    
    

    

  // };

 
  render() {
    return (
      <div className="container my-3">
        <h1>Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={ element.url}>
             < NewsItem  title ={element.title} discription = {element.description} imageUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} author={element.author} source={element.source.name}/>
            </div>
          })}
        </div>
      </div>
      

    )
  }

}

export default ComNews