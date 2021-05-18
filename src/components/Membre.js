import React, {Fragment} from 'react'

const Membre = ({nom, age, children, hideName, handleChange, handleChangeAge}) => {
    return (
        <Fragment>
            <h2 style={{
                backgroundColor: age < 10 ? 'grey' : 'orange',
                color: age < 10 ? 'white' : 'black',
            }}>{nom.toUpperCase()} : {age}
            </h2>
            <p>
                nom : <input type="text"
                                     value={nom}
                                     onChange={handleChange}/>&nbsp;
                age : <input type="text"
                                     value={age}
                                     onChange={handleChangeAge}/>
            </p>
            <button onClick={hideName}>X</button>
            {children ? <p>{children}</p> : <Fragment/>}
        </Fragment>
    );
}

export default Membre
