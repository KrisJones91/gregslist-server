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
        //anything you put in "/:whatever" will always be in the params
    }
    //request - heres the thing we sent in
    //result - what we are getting out
    // next - 
    async getAll(req, res, next) {
        try {
            //same thing as before just written differently
            res.send(await carsService.getAll())
            //get alls / routes that are pointing to a collection should return an array of that type
            // res.send(data) is the portal
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
    //put should return a single object after it was edited
    async edit(req, res, next) {
        try {
            //IF ONLY (req.body), saying first ignore the id from the body, if there is one , or add the id from the parameters 
            //req.body.id = req.params.id
            //then (req.body) under this line
            res.send(await carsService.edit(req.params.id, req.body))
        } catch (error) {
            next(error)
        }

    }

    async delete(req, res, next) {
        try {
            //req.params.id because of "/:id" above
            res.send(await carsService.delete(req.params.id))
        } catch (error) {
            next(error)
        }
    }






}