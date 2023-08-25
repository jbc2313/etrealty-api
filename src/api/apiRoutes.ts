import express, { Router } from 'express'
import * as apiController from './apiController'
const router: Router = express.Router()


router.get('/api/all', apiController.getAllProperty)

router.get('/api/total', apiController.getTotalProperty)

router.get('/api/forsale', apiController.getForSaleProperty)

router.get('/api/property/:id', apiController.getSingleProperty)

router.get('/api/test_file', apiController.createFile)

export default router;
