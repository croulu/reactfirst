import React, {Component, Fragment} from 'react'
import './App.css';
import Membre from "./components/Membre";

const famille = {
    membre1: {
        nom: 'Mariane',
        age: 28,
    },
    membre2: {
        nom: 'Adrian',
        age: 8,
    },
    membre3: {
        nom: 'Richard',
        age: 30,
    },
    membre4: {
        nom: 'Tchoupie',
        age: 3,
    },
}

class App extends Component {
    state = {
        famille: famille
    }

    render() {
        const {titre, auteur} = this.props
        const { famille } = this.state
        return (
            <Fragment>
                <div className="App">
                    <h1>React app [{titre}] [{auteur}] </h1>
                    <p>Lorem ipsum dolor sit amet</p>
                    <p className="test">hh</p>
                    <input type="text"/>
                </div>
                <h2>autre titre h2</h2>
                <Membre nom={famille.membre1.nom} age={famille.membre1.age} />
                <Membre nom={famille.membre2.nom} age={famille.membre2.age} />
                <Membre nom={famille.membre3.nom} age={famille.membre3.age} />
                <Membre nom={famille.membre4.nom} age={famille.membre4.age} >
                    <strong>je suis un furet</strong>
                </Membre>
            </Fragment>
        )
    }
}

export default App;
