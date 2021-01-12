import BaseController from "../utils/BaseController";
import { carsService } from "../services/CarsService"


export class CarsController extends BaseController {
    constructor() {
        super("api/cars")
        this.router
            .get("", this.getAll)
            .get("/:id", this.getOne)
            .post("", this.create)
            .put("/:id", this.edit)
            .delete("/:id", this.delete)

    }

    async getAll(req, res, next) {
        try {
            //same thing as before just written differently
            res.send(await carsService.getAll())
            res.send("getting all")
        } catch (error) {
            next(error)
        }
    }

    async getOne(req, res, next) {
        try {
            //.id is specific to whatever we call in "/:id".. so "/:carId", we'd do params.carId
            res.send(await carsService.getOne(req.params.id))
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next) {
        try {
            res.send(await carsService.create(req.body))
        } catch (error) {
            next(error)
        }
    }

    async edit(req, res, next) {
        try {
            res.send(await carsService.edit(req.params.id, req.body))
        } catch (error) {
            next(error)
        }

    }

    async delete(req, res, next) {
        try {
            res.send(await carsService.delete(req.params.id))
        } catch (error) {
            next(error)
        }
    }






}