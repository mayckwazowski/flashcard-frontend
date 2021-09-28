import React, {useState, useEffect } from "react";
import { Row } from "react-materialize";
import Course from "./course";

const Courses = () => {
    const [colecao, setColecao] = useState([{
        colecaoId : 0,
        descricao: ''
    }]);
    useEffect(() => {
        fetch(`https://flashcard-api-mayck.herokuapp.com/api/colecoes`)
        .then( res => res.json() )
        .then( colecao => setColecao( colecao ))
        .catch( error => console.log(error) )
    }, 1);
    return(
    <Row>
        {colecao.map( item => <Course colecaoId={item.colecaoId} descricao={item.descricao} />)}
    </Row>
    )
}

export default Courses