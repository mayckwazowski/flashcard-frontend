import CommonService from "./common.service";


const ColecaoService = {
    getAll( callback ){
        return CommonService.get('/colecoes')
        .then( response => callback( response.data ) );
    },

    getByid( id, callback ){
        return CommonService.get(`/colecoes/${id}`)
        .then( response => callback( response.data ) );
    },

    update( id, data ){
        return CommonService.put(`/colecoes/${id}`, data );
    },

    create( data ){
        return CommonService.post("/colecoes", data );
    },

    save( data ){
        if( data.colecaoId )
            return this.update( data.colecaoId, data );
        return this.create( data );
    }
}

export default ColecaoService;