
import './App.css';
import NavBar from './component/NavBar';
import News from './component/News';
// import ComNews from './component/ComNews';
import Footer from './component/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


import React, { Component } from 'react'


export default class App extends Component {

  state = {
    progress : 0
  }

  setProgress =(progress)=>{
    this.setState({
      progress:progress
    })

  }
  
  render() {
    this.page = 8


    return (
      <div>
        <Router>
        
      < LoadingBar
        color='red'
        progress={this.state.progress}
        height={4}
        
      />
      
        < NavBar/>
      {/* < News setProgress={this.setProgress}  pageSize= {8} country='in' category ='science'/> */}
      <Routes>


        
        
        <Route path='/' element={< News setProgress={this.setProgress}  key='gerenal' pageSize= {this.page} country='in' category ='general'/>} />
        <Route path='/general' element={< News setProgress={this.setProgress}  pageSize= {this.page} country='in' category ='general'/>} />
        <Route path='/business' element={< News setProgress={this.setProgress}  key='business' pageSize= {this.page} country='in' category ='business' />} />
        {/* <Route path='/business' element={< ComNews setProgress={this.setProgress}  key='business' pageSize= {this.page} country='in' category ='business'/>}/> */}
        <Route path='/entertainment' element={< News setProgress={this.setProgress}  key='entertainment' pageSize= {this.page} country='in' category ='entertainment'/>} />
        <Route path='/science' element={< News setProgress={this.setProgress}  key='science' pageSize= {this.page} country='in' category ='science'/>} />
        <Route path='/health' element={< News setProgress={this.setProgress}  key='health' pageSize= {this.page} country='in' category ='health'/>} />
        <Route path='/sports' element={< News setProgress={this.setProgress}  key='sports' pageSize= {this.page} country='in' category ='sports'/>} />
        <Route path='/technology' element={< News setProgress={this.setProgress}  key='technology' pageSize= {this.page} country='in' category ='technology'/>} />
        
        
      </Routes>
      < Footer/>

      </Router>
      </div>
    )
  }
}
