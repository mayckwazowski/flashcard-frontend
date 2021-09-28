import React from "react";
import { Parallax } from "react-materialize";

const Home = () =>(
    <>
        <div>
        <Parallax
            image={<img alt="" src="http://materializecss.com/images/parallax1.jpg"/>}
            options={{
            responsiveThreshold: 0
            }}
        />
        <div className="section white">
            <div className="row container">
            <h2 className="header">
                Projeto Flashcard
            </h2>
            <p className="grey-text text-darken-3 lighten-3">
                Método de estudos por repetição espaçada!!!
            </p>
            </div>
        </div>
        <Parallax
            image={<img alt="" src="http://materializecss.com/images/parallax2.jpg"/>}
            options={{
            responsiveThreshold: 0
            }}
        />
        </div>
    </>
)

export default Home