import React from 'react'
import {useSelector,useDispatch} from 'react-redux'

function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.numOfCakes)
    return (
        <div>
            <h2>Num of cakes - {numOfCakes}</h2>
        </div>
    )
}

export default HooksCakeContainer
