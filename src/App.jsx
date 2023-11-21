import React from "react";
import './App.css'

export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      count : 0
    }
  }

  increase =()=>{
    this.setState({count:this.state.count+1})
  }

  decrease =()=>{
    if(this.state.count > 0){
      this.setState({count:this.state.count-1})
    }
  }

  reset =()=>{
    this.setState({count:this.state.count=0})
  }

  render(){
    return(
      <div>
        <div>
          <h1 className="head">Counter App</h1>
        </div>
        <div className="num">{this.state.count}</div>
        <div>
          <button onClick={this.increase}>+</button>
          <button onClick={this.decrease}>-</button>
          <button onClick={this.reset}>Reset</button>

        </div>
      </div>
    )
  }
}

