import { describe, expect, test, beforeAll } from '@jest/globals'
import prisma from "../dbUtils/prismaClient"

// this has not been updated for MLS GRID


beforeAll(() => {
    //setup enviroment for test here
})

describe('query a single Property model from db', () => {
    test(('prisma query should return 1 property'), () => {
        expect(prisma.property.findFirst({where: { PropertyId: { equals: "8888209488"}}})).resolves.toHaveProperty("PropertyId", "8888209488")
    })
})

