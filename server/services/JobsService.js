import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";


class JobsService {
    async getAll(query = {}) {
        return await dbContext.Jobs.find(query)
    }
    async getOne(id) {
        let jobFound = await dbContext.Jobs.findById(id)
        if (!jobFound) {
            throw new BadRequest("No job exists with that id")
        }
        return jobFound
    }
    async create(body) {
        return await dbContext.Jobs.create(body)
    }
    async edit(id, body) {
        return await dbContext.Jobs.findByIdAndUpdate(id, body, { new: true })
    }
    async delete(id) {
        let job = await dbContext.Jobs.findByIdAndDelete(id)
        if (!job) {
            throw new BadRequest("No job exists with that id")
        }
        return "Successful Delete"
    }

}
export const jobsService = new JobsService();