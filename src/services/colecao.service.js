import CommonService from "./common.service";


const ColecaoService = {
    getAll( callback ){
        CommonService.get('/colecoes')
        .then( response => callback( response.data ) );
    },

    create( data ){
        CommonService.post("/colecoes", data );
    }
}

export default ColecaoService;