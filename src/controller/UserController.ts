import { Request, Response } from 'express';
import { getRepository } from "typeorm";
import { Users } from '../models/Users';

class UserController{
    async create(request:Request, response:Response){
        /*const body = request.body;
        console.log(body);
        return response.send();*/

        const {name, email} = request.body;
        const userRepository = getRepository(Users); //getrepository(Users) model Users.ts

        const userAlreadExists = await getRepository(Users).findOne({
            email
        });

        if(userAlreadExists){
            return response.status(400).json({error: "User alread exist!"});
        }

        const user = userRepository.create({name,email})
        await userRepository.save(user);
        return response.json(user);
    }
}

export { UserController }