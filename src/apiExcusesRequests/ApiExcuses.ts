import AxiosDataService from "../services/AxiosDataService";

//class  requests api excuses

class ApiExcuses {

    // request api  get data excuses  
    async getExcuses(): Promise<any>{
        var req =  await AxiosDataService.getAll("excuses")
        const excuses = await req.data
        return excuses
    }

    // request add new excuses data

    async createExcuses(data:any): Promise<any>{
        var req = await AxiosDataService.create(data,"excuses")
        const excuses = await req.data
        return excuses
    }

}

export default new ApiExcuses();