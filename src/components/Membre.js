import React from 'react'

const Membre = ({nom, age}) => {
    return (
        <h2>membre de ma famille :
            {nom.toUpperCase()} - {age}</h2>
    );
}

export default Membre
