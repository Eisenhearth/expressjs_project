import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { User } from "../entity/User"
import { userRepository } from "../repositories"

export class UserController {

    private userRepository = AppDataSource.getRepository(User)

    static async all(request: Request, response: Response, next: NextFunction) {
        const data = await userRepository.findAll();
        return response.status(200).send(data);
    }   

    static async create(request:Request, response:Response) {
        const data = await userRepository.createUser(request.body)
        return response.status(200).send(data);
    }

    static async findOne(request: Request, response: Response){
        const id = Number(request.params.id);
        const data = await userRepository.findOne(id);
        return response.status(200).send(data);
    }

    static async update(request: Request, response: Response){
        const id = Number(request.params.id);
        const data = await userRepository.updateUser(id, request.body);
        return response.send(data);
    }

    static async delete(request: Request, response: Response) {
        const id = Number(request.params.id);
        const data = await userRepository.deleteUser(id);
        return response.send(data);
    }

   
}