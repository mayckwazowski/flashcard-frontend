import axios from "axios";
const base_url = "https://flashcard-api-mayck.herokuapp.com/api";

const CommonService = {
    isLoading: false,
    get: ( endpoint ) =>  axios.get( base_url + endpoint ).catch( console.log ),
    post: ( endpoint, data ) => axios.post( base_url + endpoint, data ).catch( console.log ),
    put: ( endpoint, data ) => axios.put( base_url + endpoint, data ).catch( console.log ),
    del: ( endpoint ) => axios.delete( base_url + endpoint ).catch( console.log ),
}

export default CommonService;