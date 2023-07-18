import express from 'express'
import groupController from '../controllers/groupController'
import userController from '../controllers/userController'

let router = express.Router()

const initAPIRouter = (app) => {

    router.get('/api/v1/group', groupController.getGroup)
    router.get('/api/v1/user', userController.getUser)
    router.get('/api/v1/user-group', userController.getUseOfGroup)
    router.put('/api/v1/update/user', userController.updateUser)

    return app.use('/', router)
}

export default initAPIRouter