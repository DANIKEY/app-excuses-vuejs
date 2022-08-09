import { api } from "../boot/axios";

// class AxiosDataService requests axios

class AxiosDataService{
   
    // return all data  
    getAll(url: string): Promise<any>{
        return api.get(url);
    }
    
    // return data by id 
    get(id: any, url: string): Promise<any>{
       return api.get(url+"/"+id);
    }

    // add new data 
    create(data: any,url: string): Promise<any>{
        return api.post(url, data);
    }
}

export default new AxiosDataService();