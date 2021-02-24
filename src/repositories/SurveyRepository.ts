import { Entity, EntityRepository } from 'typeorm';
import {Users} from '../models/Users';
import {Repository} from 'typeorm';
import { Survey } from '../models/Survey';

@EntityRepository(Survey)
class SurveyRepository extends Repository<Survey>{


}

export { SurveyRepository }