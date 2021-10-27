import CommonService from "./common.service";


const ColecaoService = {
    getAll( callback ){
        return CommonService.get('/colecoes')
        .then( response => callback( response.data ) );
    },

    create( data ){
        return CommonService.post("/colecoes", data );
    }
}

export default ColecaoService;