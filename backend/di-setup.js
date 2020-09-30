import * as awilix from 'awilix';

import { db } from './data/connection';

//Import Controllers & Services

import { SessionService } from './services/SessionService'
import { PasswordValidationService } from './services/PasswordValidationService'

import {SessionController} from './controllers/SessionController'

import UserRepository from './repository/UserRepository'
import ItemsRepository from './repository/ItemsRepository'

// Create container
export const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});


// Register 
export const setupDI = () => {
  container.register({
    // db
    /* db: awilix.asValue(db), */
    
    //Controllers
    sessionController: awilix.asClass(SessionController),  
    
  
    
    //Services
    sessionService: awilix.asClass(SessionService),
    passwordValidationService: awilix.asClass(PasswordValidationService),
    
    //Repo
    userRepository: awilix.asClass(UserRepository),
    itemsRepository: awilix.asClass(ItemsRepository),
     
    

  });
};
