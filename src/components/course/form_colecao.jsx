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

const CancelarButton = () => {
    let history = useHistory();
    const handleClick = () => {
        history.push( Routers.COURSE );
    }
    return(            
        <Button
            node="button"
            style={{
            marginRight: '5px'
            }}
            waves="light"
            onClick={handleClick}
        >
            Cancelar
        </Button>
    )
}

const FormColecao = () => {
    let history = useHistory();
    const [nome, setNome] = useState('');

    const handleSubmit = (e) => {
        alert('Um nome foi enviado: ' + nome );
        //ColecaoService.create( {nome, descricao, publico} );
        //history.push( Routers.COURSE );
        e.preventDefault();
    }

    return (
    <form onSubmit={handleSubmit}>
        <TextInput id="nome" label="Nome" value={nome} onChange={e => setNome( e.target.value ) }/>
        <Textarea
                id="descricao"
                placeholder="descricao"
                />
        <Switch
            id="publico"
            offLabel="Privado"
            onChange={function noRefCheck(){}}
            onLabel="Público"
            />
        <p>
            <CancelarButton />
            <SalvarButton />
        </p>
    </form>
    )
}

export default FormColecao;