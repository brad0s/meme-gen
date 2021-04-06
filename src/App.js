import React from "react"
import './App.css';
import Header from "./Header"
import MemeGenerator from "./MemeGenerator"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MemeGenerator />
      </div>
    )
  }
}

export default App;
