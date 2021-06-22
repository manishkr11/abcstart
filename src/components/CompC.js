import React, {useContext} from 'react'
import { AppContext } from './CompA';

function CompC() {
    const {name} = useContext(AppContext);
    return (
        <div>
            <h3>Comp C - {name}</h3>
        </div>
    )
}

export default CompC
