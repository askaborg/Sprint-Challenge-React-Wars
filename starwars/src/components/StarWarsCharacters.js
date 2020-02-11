import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CharacterCards from './CharacterCards'
import AlertError from './AlertError'

function StarWarsCharacters() {
    const [characterList, setCharacterList] = useState([])
    const [apiError, setApiError] = useState([])

    useEffect (() => {
        axios
            .get('https://swapi.co/api/people/')
            .then(responseSwapi => setCharacterList(responseSwapi.data.results))
            .catch(errorSwapi => setApiError(errorSwapi))
    }, [])

    const gotCharacterList = (characterList.length !== 0 ) ? true : false
    const gotError = (apiError.message !== undefined) ? true : false

    if (gotCharacterList) return <CharacterCards characterList={characterList} />
    else if (gotError) return <AlertError apiError={apiError} />
    else return <></>
}

export default StarWarsCharacters