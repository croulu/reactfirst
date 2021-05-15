import React, {Component, Fragment} from 'react'
import './App.css';
import Membre from "./components/Membre";
import Button from "./components/Button";

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

    handleClick = (num) => {
        const famille = {...this.state.famille}
        famille.membre1.age += num
        this.setState({famille})
    }

    handleChange = event => {
        const famille = {...this.state.famille}
        const nom = event.target.value
        famille.membre1.nom = nom
        this.setState({famille})
    }

    handleChangeAge = event => {
        const famille = {...this.state.famille}
        const age = event.target.value
        famille.membre1.age = age
        this.setState({famille})
    }

    render() {
        const {titre, auteur} = this.props
        const {famille} = this.state
        return (
            <Fragment>
                <div className="App">
                    <h1>React app [{titre}] [{auteur}] </h1>
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>
                        nom membre 1: <input type="text" value={famille.membre1.nom}
                                             onChange={this.handleChange}/>
                    </p>
                    <p>
                        nom age membre 1: <input type="text" value={famille.membre1.age}
                                                 onChange={this.handleChangeAge}/>
                    </p>
                    <h2>autre titre h2</h2>
                    <Membre nom={famille.membre1.nom} age={famille.membre1.age}/>
                    <Membre nom={famille.membre2.nom} age={famille.membre2.age}/>
                    <Membre nom={famille.membre3.nom} age={famille.membre3.age}/>
                    <Membre nom={famille.membre4.nom} age={famille.membre4.age}>
                        <strong>je suis un furet</strong>
                    </Membre>
                    <Button
                        vieillir={() => this.handleClick(2)}/>
                </div>
            </Fragment>
        )
    }
}

export default App;
