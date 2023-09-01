import React from 'react'
import './Loader.scss'
function Loader() {
    return (
        <div className="center">
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loader