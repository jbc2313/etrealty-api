import { Request, Response } from 'express'
import prisma from '../dbUtils/prismaClient'
import { findProperty } from '../dbUtils/findSingleModel' 

export const getAllProperty = (req: Request, res: Response) => {
    console.log('getAllProperty Route Pinged.')
    prisma.property.findMany()
    .then(props => {
        res.json({msg: "All Properties returned", properties: props})
    })
}

export const getSingleProperty = (req: Request, res: Response) => {
    console.log('getSingleProperty Route Pinged.')
    console.log(req.body)
    //const query = req.body.propId
    //findProperty(query)
    //.then(res => {

    //})
    res.json({msg: "SINGLE HOUSE ROUTE"})
}






