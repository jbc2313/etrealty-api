import { Request, Response } from 'express'


export const getAllProperty = (req: Request, res: Response) => {
    console.log('getAllProperty Route Pinged.')
    res.json({msg: "ALL HOUSES ROUTE"})
}
