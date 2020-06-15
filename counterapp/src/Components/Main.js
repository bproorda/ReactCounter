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
        };
        this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
      }
  
IncreaseClick = (event) => {
    event.preventDefault();
    var count = this.state.count + 1;
    this.setState({ count });
}
DecreaseClick = (event) => {
    event.preventDefault();
    var count = this.state.count - 1;
    if (count < 0)
    {
        count = 0;
    }
    this.setState({ count });
}

handleChange(event) {
    var value = event.target.value;
    this.setState({value});
  }

  handleSubmit(event) {
    event.preventDefault();
    var count = this.state.value;
    this.setState({count});
    var value = 0;
    this.setState({value});
  }

    render() {
   
    
        return (
          <main>
            <h2>Main!</h2>
        <h3>the Count = {this.state.count}</h3>
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

