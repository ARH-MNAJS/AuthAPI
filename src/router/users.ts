import express from 'express';

import { updateUser, deleteUser, getAllUsers } from '../controllers/users'
import { isOwner, isAuthenticated } from '../middlewares';

export default (router: express.Router) =>{
    router.get('/users', isAuthenticated, getAllUsers);
    router.delete('/users/:id', isAuthenticated, isOwner, deleteUser);
    router.patch('/users/:id', isAuthenticated, isOwner, updateUser);
} 