import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

const loaderComponent = ({text}) => {
    return (
        <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', flexDirection: 'column'}}>
            <Spinner animation="grow" variant="info" />
          <p>{text}</p>
        </div>
    )
}

export default loaderComponent
