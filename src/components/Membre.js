import React, {Fragment} from 'react'

const Membre = ({nom, age, children}) => {
    return (
        <Fragment>
            <h2>membre de ma famille : {nom.toUpperCase()}, {age}</h2>
            { children ? <p>{children}</p> : <Fragment /> }
        </Fragment>
    );
}

export default Membre
