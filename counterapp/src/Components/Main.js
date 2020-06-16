import React from 'react';
import './Main.scss';


class Main extends React.Component {

    constructor(props) {
        // Just do this, don't ask why yet
        super(props);
    
        // The only time you can assign this.state
        this.state = {
          count: 0,
          value: 0,
          colorClass: "atZero",
        };
        this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
      }
  
IncreaseClick = (event) => {
    event.preventDefault();
    var previousCount = this.state.count;
    var count = this.state.count + 1;
    this.colorChange(previousCount, count);
    this.setState({ count });
}
DecreaseClick = (event) => {
    event.preventDefault();
    var previousCount = this.state.count;
    var count = this.state.count - 1;
    this.colorChange(previousCount, count);
  
    this.setState({ count });
}

handleChange(event) {
    var value = event.target.value;
    this.setState({value});
  }

  handleSubmit(event) {
    event.preventDefault();
    var previousCount = this.state.count;
    var count = this.state.value;
   this.colorChange(previousCount, count);
    this.setState({count});
    var value = 0;
    this.setState({value});
  }
  colorChange = (previousCount, count) => {
      var colorClass;
    if (previousCount === 0 && count < 0)
    {
        colorClass = "belowZero";
        this.setState({colorClass});
    } else if (previousCount === 0 && count > 0) 
    {
        colorClass = "aboveZero";
        this.setState({colorClass});
    }
     else if (count === 0)
    {
         colorClass = "atZero";
        this.setState({colorClass});
    }

  }

    render() {
   
    
        return (
          <main>
            <h2>Main!</h2>
        <h3 className={this.state.colorClass}>the Count = {this.state.count}</h3>
        <button id="increase" onClick={this.IncreaseClick}>Click To Increase!</button>
        <button id="decrease" onClick={this.DecreaseClick}>Click To Decrease!</button>
        <form onSubmit={this.handleSubmit}>
        <label>
          New Count Starting Point:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input id="submit" type="submit" value="Submit" />
      </form>

          </main>
        )
      }
}

export default Main;

