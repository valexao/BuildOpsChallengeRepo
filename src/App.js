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

  //Toggle between 
  clicked() {
    this.setState((state) => ({ isDefault: !state.isDefault}));
    // if (this.state.buttonString == "-") {
    //   this.state.buttonString = this.setState((state) => ({buttonString: "+"}));
    // } else {
    //   this.state.buttonString = this.setState((state) => ({buttonString: "-"}));
    // }
  };

  //Extract information from headerData and render it horizontally
  renderHeaderData = () => {
    var headerData = this.state.data.headerData.slice();
    
    var objects = headerData.map(function(item, index) {
      return <div style={{display:"inline", padding:"50px"}} key={index}>{item}</div>
    });
    return objects;
  };

  changeColor = () => {
    var contentA = this.state.data.contentA;
    var contentB = this.state.data.contentB;
    //CONTENT A Default #FFFFFF (VISIBLE)

    //CONTENT B Default #EEEEEE (INVISIBLE)
  };

  //Load the content for panel A
  loadContentA() {
    var contentA = this.state.data.contentA;

    if(this.state.isDefault) {
      return <div style={{background:"#FFFFFF", float:"left"}}>{contentA}</div>
    }
  }

  //Load the content for panel B
  loadContentB() {
    var contentB = this.state.data.contentB;
    if(!this.state.isDefault) {
      return <div style={{background:"#EEEEEE", float:"right"}}>{contentB}</div>
    }
  }

  render() {
    var contentStyle = {
      paddingTop: "30px",
      margin:"10px",
      display:"table",
      height: "1000",
      width: "500",
      filter: "drop-shadow(0px 0px 2px #600)"
    };

    return(
      <div style={{color: 'black', margin:"30px", width:"100%"}}>
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

//ReactDOM.render(<App />, document.getElementById('app'));
//           {this.loadContentA()}
          
//{this.loadContentB()}