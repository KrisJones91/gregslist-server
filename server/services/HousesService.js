import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";



class HousesService {
    async getAll(query = {}) {
        return await dbContext.Houses.find(query)
    }
    async getOne(id) {
        let houseFound = await dbContext.Houses.findById(id)
        if (!houseFound) {
            throw new BadRequest("No house exists with that id")
        }
        return houseFound;
    }
    async create(body) {
        return await dbContext.Houses.create(body)
    }
    async edit(id, body) {
        return await dbContext.Houses.findByIdAndUpdate(id, body, { new: true })
    }
    async delete(id) {
        let house = await dbContext.Houses.findByIdAndDelete(id)
        if (!house) {
            throw new BadRequest("No house exists with that id")
        }
        return "Successful Delete"
    }




}
export const housesService = new HousesService();