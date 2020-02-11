import React from 'react'
import { Card, CardHeader, CardBody, CardText } from 'reactstrap'
import styled from 'styled-components'

const CardDiv = styled.div `
    margin: 30px;
`
function CharacterCards(props) {
    const displayCard = (character) => {
        const {name, birth_year, gender, height, mass} = character
        return (            
            <Card>
                <CardHeader>{name}</CardHeader>
                <CardBody>
                    <CardText>gender: {gender}</CardText>
                    <CardText>birth: {birth_year}</CardText>
                    <CardText>height: {height}</CardText>
                    <CardText>mass: {mass}</CardText>
                </CardBody>
            </Card>
        )
    }

    const displayList = (characterList) => 
        characterList.map((character, index) => {
            return (
                <CardDiv key={index}>{displayCard(character)}</CardDiv>
            )
        })

    return (        
        <>{displayList(props.characterList)}</>        
    )
}

export default CharacterCards 