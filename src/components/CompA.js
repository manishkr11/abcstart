import React from 'react'
import CompB from './CompB'


const details = {name:"My Context", age: 32}

export const AppContext = React.createContext(details)

function CompA() {
    
    return (
        <AppContext.Provider value={details}>
        <div>
            <h3>Comp A - {details.name}</h3>
            <CompB />
        </div>
        </AppContext.Provider>
    )
}

export default CompA
