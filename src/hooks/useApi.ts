import { api } from '../services/api';

export const useApi = () => {

    const fetchData = async(url: string) => {
        try{
            const response = await api.get(url);
            return response.data;
        }catch(err){
            console.log(err);
        }
    }

    return fetchData;
}
