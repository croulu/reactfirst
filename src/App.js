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
        famille: famille,
        isShow: true
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

    hideName = (id) => {
        const famille = {...this.state.famille}
        famille[id].nom = 'X'
        this.setState({famille})
    }

    handleChangeAge = event => {
        const famille = {...this.state.famille}
        const age = event.target.value
        famille.membre1.age = age
        this.setState({famille})
    }

    handleShowDescription = () => {
        const isShow = !this.state.isShow
        this.setState({isShow})
    }


    render() {
        const {titre, auteur} = this.props
        const {famille, isShow} = this.state

        let description = null

        if (isShow) {
            description = (
                <strong>je suis un furet</strong>
            )
        }

        const liste = Object.keys(famille)
            .map(membre => (
                <Membre
                    hideName={ ()=> this.hideName(membre) }
                    nom={famille[membre].nom}
                    age={famille.[membre].age}/>
            ))

        return (
            <Fragment>
                <div className="App">
                    <h1>React app [{titre}] [{auteur}] </h1>
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>
                        nom membre 1: <input type="text"
                                             value={famille.membre1.nom}
                                             onChange={this.handleChange}/>
                    </p>
                    <p>
                        nom age membre 1: <input type="text"
                                                 value={famille.membre1.age}
                                                 onChange={this.handleChangeAge}/>
                    </p>
                    <h2>autre titre h2</h2>
                    { liste }
                    <Membre nom={famille.membre4.nom} age={famille.membre4.age}>
                        {description}
                        <button onClick={this.handleShowDescription}>
                            {
                                isShow ? 'Cacher' : 'Montrer'
                            }
                        </button>
                    </Membre>
                    <Button
                        vieillir={() => this.handleClick(2)}/>
                </div>
            </Fragment>
        )
    }
}

export default App;
