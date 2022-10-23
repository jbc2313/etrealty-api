import { Request, Response } from 'express'
import prisma from '../dbUtils/prismaClient'

export const getAllProperty = (req: Request, res: Response) => {
    console.log('getAllProperty Route Pinged.')
    res.json({msg: "ALL HOUSES ROUTE"})
}

export const getSingleProperty = (req: Request, res: Response) => {
    console.log('getSingleProperty Route Pinged.')
    res.json({msg: "SINGLE HOUSE ROUTE"})
}
