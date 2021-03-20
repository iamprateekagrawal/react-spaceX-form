import React, {createContext} from 'react'

const Submit = (props) => {
    const name = props.name;
    return(
        <div class="button">
            <button id="apply" onClick={() => {alert(`Thank you ${name}! A dummy application has been sent for review`)}}>Apply</button>
        </div>
    )
}

export default Submit;