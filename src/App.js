import React, {Component, Fragment} from 'react'
import './App.css';
import Membre from "./components/Membre";

class App extends Component {
  render () {
      const { titre, auteur } = this.props
      return (
<Fragment>
          <div className="App">
              <h1>React app [{titre}] [{auteur}] </h1>
              <p>Lorem ipsum dolor sit amet</p>
              <p className="test">hh</p>
              <input type="text" />
          </div>
      <h2>autre titre h2</h2>
    <Membre nom = 'Marianne' age='28'/>
    <Membre nom = 'Adrian'  age='8'/>
    <Membre nom = 'Richard'  age='30'/>
    <Membre nom = 'Tchoupie' age='2'/>
</Fragment>
      )
  }
}

export default App;
