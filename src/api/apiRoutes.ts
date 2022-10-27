import express, { Router } from 'express'
import * as apiController from './apiController'
const router: Router = express.Router()


router.get('/api', apiController.getAllProperty)

router.get('/api/:id', apiController.getSingleProperty)








export default router;
