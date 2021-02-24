import { Entity, EntityRepository } from 'typeorm';
import {Users} from '../models/Users';
import {Repository} from 'typeorm';

@EntityRepository(Users)
class UserRepository extends Repository<Users>{


}

export { UserRepository }