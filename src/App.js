import React, { Component} from 'react';
import p from './photo.jpg';
import './App.css'
class App extends Component {
  constructor () {
    super()
    this.state = {
      Person : {
        fullName : 'Mohamed Amine Terbah',
        bio : 'Happy coding ',
        imgSrc : p,
        profession : 'FullStack JavaScript Developer'
      },
      shows : false,
      count : 0
  }
}

  showState = () => 
    this.setState({
      shows : !this.state.shows,
      })

  componentDidMount() {
    setInterval(() => {
      this.setState({count: this.state.count + 1 })
    }, 1000)
}

      render() { 
        return( 
        <div className="App">
          {this.state.shows ? 
          (
            <>
              <h1>{this.state.Person.fullName}</h1>
              <p>{this.state.Person.bio}</p>
              <p>{this.state.Person.profession}</p>
              <img alt="" src={this.state.Person.imgSrc} style={{width:250, borderRadius:"100%", margin:20}}/>
            </> )
          : 
            (
              <h1>Show profile</h1>
            )
          }
          
          <button onClick={()=>this.showState()}>{!this.state.shows ? 'Show' : 'Hide'}</button>
          <br></br>
          Counter : {this.state.count}
        </div>)
      }

  }
  export default App 