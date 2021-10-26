import React, {useState, useEffect } from "react";
import { Button, Icon, Row } from "react-materialize";
import { Link } from "react-router-dom";
import ColecaoService from "../../services/colecao.service";
import Course from "./course";

const Courses = () => {
    let page = 1;
    const [colecao, setColecao] = useState([{
        colecaoId : 0,
        nome: '',
        descricao: ''
    }]);
    useEffect(() =>  ColecaoService.getAll( setColecao ), page);
    return(
        <>
            <Row>
                {colecao.map( item => <Course colecaoId={item.colecaoId} nome={item.nome} descricao={item.descricao} />)}
            </Row>
            <Link to='/create/course'>
                <Button
                    className="red"
                    floating
                    icon={<Icon>add</Icon>}
                    large
                    node="button"
                    waves="light"
                    onClick=""
                    />
            </Link>
        </>
    )
}

export default Courses