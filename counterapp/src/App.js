import React from 'react';
import Header from './Components/Header';
import Footer from  './Components/Footer';
import Main from './Components/Main';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <p>
//           UnderConstruction
//         </p>
//         {/* <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//       </header>
//     </div>
//   );
// }


class App extends React.Component{
  render() {
    // <> is a Fragment; can't return multiple things
    return (
      <>
        <Header/>
        <Main />
        <Footer /> 
      </>
    );
  }
}

export default App;
