import express, { Router } from 'express'
import * as apiController from './apiController'
const router: Router = express.Router()

router.get('/api', apiController.getAllProperty)

export default router;
