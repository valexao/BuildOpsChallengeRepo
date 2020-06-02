import ReactDOM from 'react-dom';
import React from 'react';
import data from './data.json';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isDefault: true, buttonString: "-", data: data};
    //binding to make the callback work
    this.clicked = this.clicked.bind(this);
  }

  //Toggle between the default and non-default state
  clicked() {
    this.setState((state) => ({ isDefault: !state.isDefault}));
  };

  //Extract information from headerData and render it horizontally
  renderHeaderData = () => {
    var headerData = this.state.data.headerData.slice();
    
    var objects = headerData.map(function(item, index) {
      return <div style={{display:"inline",paddingRight: "250px"}} key={index}>{item}</div>
    });
    return objects;
  };

  renderHeaderSquare() {
    var headerStyle = {
      paddingTop: "30px",
      margin:"10px",
      width: "1000px",
      filter: "drop-shadow(0px 0px 2px #660)"
    };

    return <div style={headerStyle}></div>

  }

  //Load the content for panel A
  loadContentA() {
    var contentA = this.state.data.contentA;

    //Default is visible, otherwise, hide content
    if(this.state.isDefault) {
      return <div style={{height: "300px", background:"#FFFFFF", float:"left", color: "black", filter: "drop-shadow(0px 0px 2px #660)"}}>{contentA}</div>
    } else {
      return <div style={{height: "300px", background:"#EEEEEE", float:"left", color: "#EEEEEE"}}>{contentA}</div>
    }
  }

  //Load the content for panel B
  loadContentB() {
    var contentB = this.state.data.contentB;
    //Default is hidden, otherwise, show content
    if(this.state.isDefault) {
      return <div style={{height: "300px", background:"#EEEEEE", float:"right", color: "#EEEEEE"}}>{contentB}</div>
    } else {
      return <div style={{height: "300px", background:"#FFFFFF", float:"right", color: "black", filter: "drop-shadow(0px 0px 2px #660)"}}>{contentB}</div>
    }
  }

  render() {
    var contentStyle = {
      paddingTop: "30px",
      margin:"10px",
      width: "1000px",
    };

    return(
      <div style={{color: 'black', margin:"30px", width: "70%", textAlign:"center"}}>
        {this.renderHeaderData()}
        <button type='button' onClick={this.clicked}>{this.state.isDefault ? '-' : '+'}</button>
        <div style={contentStyle}>
        {this.loadContentA()}
        {this.loadContentB()}
        </div>
      </div>
    );
  }
}

export default App;