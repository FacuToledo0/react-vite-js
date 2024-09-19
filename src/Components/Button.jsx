import { Fragment } from 'react';
import { Button } from 'primereact/button'

const myButton = () => {
    // console.log("este es el boton")
    // console.log(12121);
    return(
        <Fragment>
            <Button label="Contador" />
            <h2>Segundo año</h2>
        </Fragment>
    )
    
}

export default myButton