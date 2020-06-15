import React from 'react';
import './Main.scss';


class Main extends React.Component {

    constructor(props) {
        // Just do this, don't ask why yet
        super(props);
    
        // The only time you can assign this.state
        this.state = {
          count: 0,
        };
      }
  
    render() {
        // Re-rendering is automatic when state changes
        // console.log('Rendering!', this.state );
        // let passwordMessage = this.state.words.length > 10 ? 'Strong!' : 'Weak!';
    
        return (
          <main>
            <h2>Main!</h2>
          <h3>the Count</h3>

          </main>
        )
      }
}

export default Main;

