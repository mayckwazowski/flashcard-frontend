import React, {useState } from "react";
import { Button, Icon, Switch, Textarea, TextInput } from "react-materialize";
import { useHistory } from "react-router";
import ColecaoService from "../../services/colecao.service";
import Routers from "../routers/routers";



const SalvarButton = () => (
    <Button
        node="button"
        type="submit"
        waves="light"
        >
        Salvar
        <Icon right>
            send
        </Icon>
    </Button>

);


const CancelarButton = ( props ) => (
    <Button
        node="button"
        style={{
        marginRight: '5px'
        }}
        waves="light"
        onClick={props.handleClick}
    >
        Cancelar
    </Button>
)

const FormColecao = () => {
    const history = useHistory();
    const goBack = () =>{
        history.push( Routers.COURSE );
    }
    const [colecaoDados, setColecaoDados] = useState({
        nome: '',
        descricao: '',
        publico: false
    });

    const onChangeField = e => {
        const value = e.target.id === "publico" ? e.target.checked : e.target.value;
        setColecaoDados( { ...colecaoDados, [e.target.id]: value } )
    }

    const handleSubmit = (e) => {
        ColecaoService.create( colecaoDados )
        .then( goBack );
        e.preventDefault();
    }

    return (
    <form onSubmit={handleSubmit}>
        <TextInput 
            id="nome" 
            label="Nome" 
            value={colecaoDados.nome} 
            onChange={onChangeField}/>
        <Textarea
            id="descricao"
            label="descricao"
            value={colecaoDados.descricao}
            onChange={onChangeField}
            />
        <Switch
            id="publico"
            offLabel="Privado"
            value={colecaoDados.publico}
            onChange={ e => setColecaoDados( { ...colecaoDados, publico: e.target.checked} )}
            onLabel="Público"
            />
        <p>
            <CancelarButton handleClick={goBack} />
            <SalvarButton />
        </p>
    </form>
    )
}

export default FormColecao;