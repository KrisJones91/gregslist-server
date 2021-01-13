import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";


class CarsService {
    async getAll(query = {}) {
        return await dbContext.Cars.find(query)
    }

    async getOne(id) {
        let carFound = await dbContext.Cars.findById(id)
        if (!carFound) {
            throw new BadRequest("No car exists with that id")
        }
        return carFound
    }

    async create(body) {
        return await dbContext.Cars.create(body)
    }

    async edit(id, body) {
        //this is where the actual EDITING occurs
        return await dbContext.Cars.findByIdAndUpdate(id, body, { new: true })
    }

    async delete(id) {
        let car = await dbContext.Cars.findByIdAndDelete(id)
        if (!car) {
            throw new BadRequest("No car exists with that id")
        }
        return "Successful Delete"
    }

}
export const carsService = new CarsService()