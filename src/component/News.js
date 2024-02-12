import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
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
  
  async update(){
    
    
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.key}&page=${this.state.page}&pagesize=${this.props.pageSize}`
    // let url=`http://20.244.56.144/numbers/primes`
    this.setState({loading : true})
    let data = await fetch(url);
    // console.log(data)
    
    let parsedData = await data.json()
    document.write(parsedData)
    

    this.setState({
      articles:parsedData.articles,
      totalResults:parsedData.totalResults,
      loading: false
    
    })
    


  }
   
  async componentDidMount(){
    
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.key}&page=${this.state.page}&pagesize=${this.props.pageSize}`
    // let url=`http://20.244.56.144/numbers/fibo`
    this.setState({loading : true})
    let data = await fetch(url);
    // console.log(data);
    // this.props.setProgress(30)
    let parsedData = await data.json()
    this.props.setProgress(70)
    

    this.setState({
      articles:parsedData.articles,
      totalResults:parsedData.totalResults,
      loading: false,
      
      
    
    })
    this.props.setProgress(100)
  }

 
  // handleNextClick =async ()=>{
    
   
   
  //   this.setState({
  //     page: this.state.page+1,
      
    
  //   })
  //   this.update()
  

  //   }
  
  // handlePreClick =async ()=>{
   
  //   this.setState({
  //     page: this.state.page-1
  //   })
  //   this.update()
  // }

  fetchMoreData =async () => {
    this.setState({page: this.state.page +1
    })

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.key}&page=${this.state.page ===1? this.state.page+1:this.state.page }&pagesize=${this.props.pageSize}`
    this.setState({loading : true})
    let data = await fetch(url);
    let parsedData = await data.json()

    if(this.state.page===1){
      this.setState({
        page:this.state.page +1
      })
    }
    

    this.setState({
      
      articles:this.state.articles.concat(parsedData.articles),
      totalResults:parsedData.totalResults,
      loading: false,

      
    
    })

   
  };

  render() {


    return (
      <div style={{margintop:"66px"}}>
    
      <div className="container " style={{ marginTop:"66px"}} >
          <section >
        <h1 className="text-center my-3" id='Top'> News On Time:- Top {(this.props.category).charAt(0).toUpperCase() + (this.props.category).slice(1)} Headlines</h1></section>

        {/* {this.state.loading && <Spinner/>} */}
        
        
        {/* <div className="row">
        { this.state.articles.map((element)=>{
           return <div className="col-md-4 my-3">
           < NewsItem  title ={element.title} discription = {element.description} imageUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} author={element.author} source={element.source.name}/>
               </div>
           })}
          
        </div> */}
        

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={ this.state.loading && <Spinner/>}
        >
          <div className="container">
          <div className="row">
        { this.state.articles.map((element)=>{
           return <div className="col-md-4 my-3">
           < NewsItem  title ={element.title} discription = {element.description} imageUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} author={element.author} source={element.source.name}/>
               </div>
           })}
          
        </div>
        </div>
        
          
        </InfiniteScroll>
        

        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} className="btn btn-dark " onClick={ this.handlePreClick} >&larr; Previous </button>
          <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={ this.handleNextClick} > Next &rarr; </button>


        </div> */}
       
        
        
      </div>
      <div className='d-flex justify-content-end' style={{marginRight:'75px'}}>
        <button disabled={this.state.page<=5} className="btn btn-primary " style={{borderRadius: '100px'}}   > <a href="#Top" style={{    textDecoration: 'none',
    color: 'white'}} > <b>&uarr; Top </b></a> </button>
        </div>
      </div>
    )
  }
}

export default News