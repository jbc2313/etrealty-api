import { Request, Response } from 'express'
import prisma from '../dbUtils/prismaClient'

export const getAllProperty = (req: Request, res: Response) => {
    console.log('getAllProperty Route Pinged.')
    prisma.dProperty.findMany()
    .then(props => {
        res.json({msg: "All Properties returned", properties: props})
    })
}


// THIS WILL NEED TO BE DOUBLE CHECKED and UPDATED FOR MLS GRID
// MlsStatus needs to be double checked to see what is standard values
export const getForSaleProperty = (req: Request, res: Response) => {
    console.log('getForSaleProperty Route Pinged.')
    prisma.dProperty.findMany({
       where: {
            MlsStatus: "Active" 
       }
    }).then(props => {
        res.json({
            msg: "All ForSale Properties returned", 
            properties: props,
        })
    });
}

export const getSingleProperty = (req: Request, res: Response) => {
    console.log('getSingleProperty Route Pinged.')
    console.log(req.params.id)
    prisma.dProperty.findFirst({
        where: {
            ListingId: {
                equals: req.params.id
            }
        }
    })
    .then(prop => {
        res.json({ msg: "Single House Returned", property: prop })
    })
    
    //const query = req.body.propId
    //findProperty(query)
    //.then(res => {

    //})
    // res.json({msg: "SINGLE HOUSE ROUTE"})

}

export const getTotalProperty = (req: Request, res: Response) => {
    console.log('getTotalProperty route pinged.')
    prisma.dProperty.count()
    .then(tot => {
        res.json({ msg: "Total number of properties returned", total: tot })
    })
}


// this is for testing purposes, code will probably have to change for digital ocean volume
var fs = require('fs');
export const createFile = (req: Request, res: Response) => {

};






