import { Request, Response } from 'express';
import { getRepository } from "typeorm";
import { Users } from '../models/Users';

class UserController{

    async create(request: Request, response:Response){
        const { name, email } = request.body;
       
        const UsersRepository = getRepository(Users);

        const UserAlreadExist = await UsersRepository.findOne({
            email
        })

        if (UserAlreadExist){
            return response.status(404).json({
                error:"Users alread exists!"
            })
        }

        const user = UsersRepository.create({
           name, email,
        });

        await UsersRepository.save(user);
        return response.json(user)
    }
}

export { UserController }