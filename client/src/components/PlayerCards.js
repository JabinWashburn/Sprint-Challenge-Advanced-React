import React from 'react'
import { useDarkMode } from '../hooks/darkMode'

export function PlayerCards(props){

    return(
        <div>
            <p>Name:{props.players.name}</p>
            <p>Country: {props.players.country}</p>
            <p>Searches: {props.players.searches}</p>
        </div>
    )
}