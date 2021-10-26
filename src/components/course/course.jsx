import React from "react";
import { Card, Col, Icon, CardTitle } from "react-materialize";

const Course = ( props ) => (
    <Col
        l={4}
        m={6}
        s={12}
    >
        <Card
        closeIcon={<Icon>close</Icon>}
        header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" reveal waves="light"/>}
        reveal={<p>{props.descricao}</p>}
        revealIcon={<Icon>more_vert</Icon>}
        title={props.nome}
        >
        <p>
            <a href="#">
            This is a link
            </a>
        </p>
        </Card>
    </Col>
)

export default Course